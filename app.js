const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { validateNumsQueryParam } = require('./middleware');
const { findMode, findMean, findMedian } = require('./helpers');

app.get('/mean', validateNumsQueryParam, (req, res) => {


    let result = {
        operations: "mean",
        result: findMean(req.nums)
    }

    return res.send(result);
});

app.get('/median', validateNumsQueryParam, (req, res) => {


    let result = {
        operation: "median",
        result: findMedian(req.nums)
    }

    return res.send(result);


});

app.get('/mode', validateNumsQueryParam, (req, res) => {


    let result = {
        operation: "mode",
        result: findMode(req.nums)
    }

    return res.send(result);
});

/** general error handler */

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    // pass the error to the next piece of middleware
    return next(err);
});

/** general error handler */

app.use(function (err, req, res, next) {
    res.status(err.status || 500);

    return res.join({
        error: err,
        message: err.message
    });
});

app.listen(3000, function () {
    console.log(`Server starting on port 3000`)
});