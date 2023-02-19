({ // shorthand for exporting data
  parserOptions: {
    sourceType: "script"
  },
  env: {
    browser: true,
    jquery: true,
    node: false,
  },
  rules: {
    "no-var": "off",
    "prefer-const": "off",
  }
});
