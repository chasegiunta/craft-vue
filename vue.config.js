const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

modern = process.env.VUE_CLI_MODERN_MODE;
production = process.env.NODE_ENV === "production";

config = {
  protocol: "http",
  host: "localhost",
  port: 8080,
  watchDir: "templates"
};

module.exports = {
  runtimeCompiler: true,
  publicPath: `${config.protocol}://${config.host}:${config.port}/`,
  outputDir: "web/dist",
  filenameHashing: true,
  css: {
    sourceMap: true
  },
  devServer: {
    https: config.https,
    host: config.host,
    port: config.port,
    clientLogLevel: "info",
    headers: { "Access-Control-Allow-Origin": "*" },
    disableHostCheck: true,
    contentBase: path.join(__dirname, config.watchDir),
    watchContentBase: true
  },
  configureWebpack: {
    plugins: [
      new ManifestPlugin({
        fileName: modern ? "manifest.json" : "manifest-legacy.json",
        publicPath: production ? "/dist/" : "/"
      }),
      new FileManagerPlugin({
        onEnd: {
          // Delete unnecessary index.html file
          delete: ["./web/dist/index.html"]
        }
      })
    ]
  }
};
