const config = {
    entry: "./server.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    mode: "development"
  };
  module.exports = config;