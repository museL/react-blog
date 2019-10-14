const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/wxapi',{
    target: 'https://blue.yccapp.com/index.php?s=',
    changeOrigin: true,
  }));
};
