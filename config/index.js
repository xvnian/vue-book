// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

var cookie = 'uLocale=zh_CN; app_id=mi_wap; build=8888; device_id=D950PGSGFUHQ6UZ7; user_type=2; device_hash=ba0d330a9c9acaa79f1de1e0c5340cac; Hm_lvt_a1d10542fc664b658c3ce982b1cf4937=1486511107,1486810801,1486820478,1486873640; Hm_lpvt_a1d10542fc664b658c3ce982b1cf4937=1487148075';

function relayRequestHeaders(proxyReq, req) {
  if (cookie) {
    proxyReq.setHeader('cookie', cookie);
  }
};

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8083,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/xiaomi': {
        onProxyReq: relayRequestHeaders,
        target: 'http://dushu.xiaomi.com',
        changeOrigin: true,
        pathRewrite: {
          '^/xiaomi': '/'
        }
      },
      '/duokan': {
        onProxyReq: relayRequestHeaders,
        target: 'http://html.read.duokan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/duokan': '/'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
