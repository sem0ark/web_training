module.exports = {
  env: {
    node: true,
    es2020: true,
    jest: true, // adding env for Jest testing framework
  },
  extends: "eslint:recommended",
  rules: {
    // "no-empty": 2, // disallows empty blocks, already in recommended
    "no-multiple-empty-lines": 1,
    "no-var": 2, // don't use `var`
    "prefer-const": 2, // prefers the use of `const`
  },
};
