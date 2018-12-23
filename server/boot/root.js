'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  router.get('/health_check', function(req, res) {
    res.send('OK');
  });
  server.use(router);
};
