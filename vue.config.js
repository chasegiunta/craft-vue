const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

config = {
  https: false,
  host: 'localhost',
  port: 8080
}

module.exports = {
  runtimeCompiler: true,
  // baseUrl: process.env.NODE_ENV === 'production' ? '/' : `${config.https ? 'https' : 'http'}://${config.host}:${config.port}`,
  baseUrl: '/',
  outputDir: 'web/dist',
  devServer: {
    // Uncommenting these will lose the 'Network' app access
    // host: config.host,
    // port: config.port,
    https: config.https,
    before(app, server) {
      const sane = require('sane')
      var watcher = sane(path.join(__dirname, 'templates'), {glob: ['**/*']});
      watcher.on('change', function (filepath, root, stat) { 
        console.log('file changed:', filepath);
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