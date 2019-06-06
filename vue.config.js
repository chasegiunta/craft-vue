const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");
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
        publicPath: production ? "/dist/" : "/"
      })
    ]
  },
  // Disable building a useless index.html file
  chainWebpack: config => {
    config.plugins.delete("html");
    config.plugins.delete("preload");
    config.plugins.delete("prefetch");
  }
};
