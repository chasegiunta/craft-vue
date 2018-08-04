const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

config = {
  https: false,
  host: 'localhost',
  port: 8080,
  watchDir: 'templates' 
}

module.exports = {
  runtimeCompiler: true,
  baseUrl: '/',
  outputDir: 'web/dist',
  filenameHashing: process.env.NODE_ENV === 'production' ? true : false,
  css: {
    sourceMap: true
  },
  devServer: {
    // Uncommenting these will lose the 'Network' app access
    // host: config.host,
    // port: config.port,
    https: config.https,
    before(app, server) {
      const sane = require('sane')
      var watcher = sane(path.join(__dirname, config.watchDir), {glob: ['**/*']});
      watcher.on('change', function (filepath, root, stat) { 
        console.log('  File saved:', filepath);
        server.sockWrite(server.sockets, "content-changed");
      });
    }
  },
  configureWebpack: {
    plugins: [
      new ManifestPlugin({
        publicPath: '/dist/'
      })
    ]
  },
  // Disable building a useless index.html file
  chainWebpack: config => {
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
}