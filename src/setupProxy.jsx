const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the API route you want to proxy
    createProxyMiddleware({
      target: 'http://assessmentapi-001-site1.htempurl.com',
      changeOrigin: true,
    })
  );
};
