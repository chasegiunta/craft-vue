const path = require("path");
const ManifestPlugin = require("webpack-manifest-plugin");

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
    before(app, server) {
      const sane = require("sane");
      var watcher = sane(path.join(__dirname, config.watchDir), {
        glob: ["**/*"]
      });
      watcher.on("change", function(filepath, root, stat) {
        console.log("  File saved:", filepath);
        server.sockWrite(server.sockets, "content-changed");
      });
    }
  },
  configureWebpack: {
    plugins: [
      new ManifestPlugin({
        publicPath: "/dist/"
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
