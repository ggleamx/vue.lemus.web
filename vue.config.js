const zopfli = require("@gfx/zopfli");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/lemus-enero/" : "/",
  pluginOptions: {
    compression: {
      zopfli: {
        compressionOptions: {
          numiterations: 15,
        },
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        },
      },
    },
  },
};
