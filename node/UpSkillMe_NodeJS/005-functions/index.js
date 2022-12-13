/**
 *
 * @param arr: {Array}
 * @param x: {Object}
 * @returns {Number}
 */
function count(arr, x) {
    let c = 0;
    for(const i of arr) {
        c += i === x;
    }
    return c;
}

/**
 *
 * @param arr: {Array}
 * @param n: {Number}
 * @returns {Number}
 */
module.exports.nThNoRepeatedValue = function nThNoRepeatedValue(arr, n) {
    let c = 0;
    for(const i of arr) {
        if(count(arr, i) === 1) c++;
        if(c === n) return i;
    }
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
function isprime(x) {
    const q = Math.sqrt(x);
    for(let i=2; i<=q; i++) {
        if(x % i == 0) return false;
    }
    return true;
}

/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.primeValues = function primeValues(arr) {
    return arr.map((x) => isprime(x));
};
