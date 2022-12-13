/**
 *
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.numberOfDuplicates = function numberOfDuplicates(arr) {
    let res = [];
    for(let i=0; i<arr.length; i++) {
        let c = 0;
        for(let j=0; j<=i; j++) {
            c += (arr[i] === arr[j]);
        }
        res.push(c);
    }
    return res;
};


/**
 * 
 * @param p: {Object}
 * @returns {Number}
 */
function get_value(p) {
    switch(typeof p) {
        case "undefined":
            return 0;
        case "boolean":
            return 1;
        case "number":
            return 2;
        case "string":
            return 3;
        case "object":
            return 5;
        case "function":
            return 7;
        case "bigint":
            return 9;
        case "symbol":
            return 10;
        default:
            return 0;
    }
}


/**
 *
 * @param obj: {Object}
 * @returns {Number}
 */
module.exports.countObjectStrength = function countObjectStrength(obj) {
    let total = 0;
    for(let i of Object.getOwnPropertyNames(obj)) {
        total += get_value(obj[i]);
    }
    return total;
};
