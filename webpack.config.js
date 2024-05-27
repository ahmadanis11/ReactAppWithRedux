const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      http: false,
      https: false,
      stream: false,
      os: false,
      buffer: false,
    },
  },
};
