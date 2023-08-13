const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({ "@project": "src/components/", "@sui": "src/SUI/" })(config);

  return config;
};
