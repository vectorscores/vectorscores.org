const { eslintrc } = require("@vectorscores/configs");

module.exports = {
  ...eslintrc,
  rules: {
    "comma-dangle": ["error", "always"]
  }
};
