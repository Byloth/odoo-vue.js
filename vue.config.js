const PATH = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [ PATH.resolve(__dirname, "node_modules") ]
        }
      }
    }
  }
};
