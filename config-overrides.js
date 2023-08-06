const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({'@sui':'src/SUI/'})(config);

  return config;
};
