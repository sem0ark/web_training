
/**
 *
 * @returns {null}
 */
function Logger() {
    this.history = new Array();
}

Logger.prototype.log = function (text) {
    this.history.push(text);
}

Logger.prototype.getLog = function () {
    return this.history;
}

Logger.prototype.clearLog = function () {
    this.history = new Array();
}

module.exports.Logger = Logger;

/**
 *
 * @returns {Array}
 */
function shuffle() {
    let res = new Array();

    for(let i=0; i<this.length; i++) {
        res[i] = this[i];
    }

    for(let i=0; i<this.length; i++) {
        let j = Math.floor(Math.random() * this.length);
        
        let tmp = res[i];
        res[i] = res[j];
        res[j] = tmp;
    }
    return res;
}

Array.prototype.shuffle = shuffle;
