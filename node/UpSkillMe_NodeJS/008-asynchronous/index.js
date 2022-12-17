/**
 *
 * @param data: {Array}
 * @returns number
 */
 module.exports.callback1 = function(data) {
    let res = 0;
    for(let x of data) {
        res += x;
    }
    return res;
};

/**
 *
 * @param data: {Array}
 * @returns number
 */
module.exports.callback2 = function(data) {
    let res = 1;
    for(let x of data) {
        res *= x;
    }
    return res;
};

/**
 *
 * @param s: {string}
 * @returns number
 */
module.exports.w = function(s, callback) {
    return callback(s.split(' ').map((x) => x.length))
};


/**
 *
 * @param data: {Array | Object}
 * @returns {Function}
 */
module.exports.mocker = function mocker(data) {
    return () => new Promise((resolve, _reject) => {
        setTimeout(() => resolve(data), 1000);
    });
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
module.exports.summarize1 = function summarize1() {
    return new Promise((resolve, _reject) => {
        Promise.all(arguments)
            .then((arr) => resolve(
                arr.reduce((a, b) => a+b, 0)
            ));
    });
};

/**
 *
 * @param arg...: {Promise}
 * @returns {Function}
 */
 module.exports.summarize2 = async function summarize2() {
    let res = 0;
    for(let i of arguments) {
        res += await i;
    }
    return res;
};
