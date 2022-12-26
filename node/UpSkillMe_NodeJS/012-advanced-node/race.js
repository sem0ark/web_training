/**
 * @desc Implements Promise.race.
 * @param promises
 */
module.exports = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((prom) => {
      if (!(prom instanceof Promise)) return resolve(prom);
      prom
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
}
