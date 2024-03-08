const {
    findMean,
    findMode,
    findMedian,
} = require('./helpers');

describe('#findMedian', () => {
    it("finds the median of an even set", () => {
        expect(findMedian([1, -1, 4, 2])).toEqual(1.5)
    })
    it("finds the median of an odd set", () => {
        expect(findMedian([1, -1, 4]).toEqual(1))
    })
})

describe("#findMean", function () {
    it("finds the mean of an empty array", function () {
        expect(findMean([])).toEqual(0)
    })
    it("finds the mean of an array of numbers", function () {
        expect(findMean([1, -1, 4, 2])).toEqual(1.5)
    })
})

describe("#findMode", function () {
    it("finds the mode", function () {
        expect(findMode([1, 1, 1, 2, 2, 3])).toEqual(1)
    })
})