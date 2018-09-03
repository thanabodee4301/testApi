const controller = require('./controller');

module.exports = [{
  method: 'GET',
  path: '/{path*}',
  config: controller.index
}, {
  method: 'GET',
  path: '/league',
  config: controller.leagues.findAll
}, {
  method: 'GET',
  path: '/league/{league_slug}',
  config: controller.leagues.findOne
}]
