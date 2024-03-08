
const ExpressError = require('./expressError');
const { convertAndValidateNumsArray } = require('./helpers');

const validateNumsQueryParam = (req, res, next) => {
    if (!req.query.nums) {
        return next(new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400));
    }

    let numsAsStrings = req.query.nums.split(',');
    let nums = convertAndValidateNumsArray(numsAsStrings);

    if (nums instanceof Error) {
        return next(new ExpressError(nums.message));
    }

    req.nums = nums;
    next();
};

module.exports = { validateNumsQueryParam };