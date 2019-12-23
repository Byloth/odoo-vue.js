const PATH = require("path");

const IS_PROD = (process.env.NODE_ENV === 'production');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [ PATH.resolve(__dirname, "node_modules") ]
        }
      }
    }
  },
  outputDir: PATH.resolve(__dirname, "./vuejs_example/static/src"),
  publicPath: IS_PROD ? "/vuejs_example/static/src/" : "/"
};
