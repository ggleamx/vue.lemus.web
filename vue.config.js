const zopfli = require("@gfx/zopfli");
module.exports = {
  pluginOptions: {
    compression: {
      zopfli: {
        compressionOptions: {
          numiterations: 15,
        },
        include: /\.(js|css|html|svg|webp|jpg|json)(\?.*)?$/i,
        algorithm(input, compressionOptions, callback) {
          return zopfli.gzip(input, compressionOptions, callback);
        },
      },
    },
  },
};
