/**
 *
 * @param array1: {Array}
 * @param array2: {Array}
 * @returns {Array}
 */
module.exports.arrayDiff = function arrayDiff(array1, array2) {
    let res = [];
    for(const i of array1.concat(array2)) {
        if(array1.includes(i) != array2.includes(i)) {
            res.push(i);
        }
    }
    return res;
};


/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Array}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y) {
    let res = [];
    for(let i=x; i<=y; i++) {
        res.push(`${i} is ${(i%2==0 ? 'even' : 'odd')}`);
    }
    return res;
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.rangeSum = function rangeSum(x, y) {
    return Math.floor(y*(y+1)/2 - x*(x-1)/2);
};
