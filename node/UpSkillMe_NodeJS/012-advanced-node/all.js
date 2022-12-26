/**
 * @desc Implements Promise.all.
 * @param promises
 */
module.exports = function (promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((p, i) => {
      if (p instanceof Promise) {
        p.then((res) => {
          // Here we add a function wrapper to the then method:
          //    if all promises are completed the list of results would be resolved
          results[i] = res;
          if (++completed === promises.length) resolve(results);
        }).catch((err) => reject(err));
      } else {
        // As it is said in the documentation:
        // If the value is not a pending Promise -> return as is.
        results[i] = p;
        if (++completed === promises.length) resolve(results);
      }
    });
  });
}
