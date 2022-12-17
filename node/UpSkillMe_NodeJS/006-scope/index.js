let counter = 0;

/**
 *
 * @param startValue: {Number}
 * @returns {Function}
 */
module.exports.createCounter = function createCounter(startValue = 0) {
    let c = startValue;
    return () => ++c;
};

/**
 *
 * @param x: {Number}
 * @returns {Function}
 */
module.exports.multiply = (x) => (y) => (z) => x*y*z;
