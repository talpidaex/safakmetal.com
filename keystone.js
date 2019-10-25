var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  views: 'templates/views',
  'static': ['public'],
  'view engine': 'ejs',
  'name': 'safak-metal',
  'user model': 'User',
  'auto update': true,
  'auth': true,
});
keystone.import('models');
keystone.set('routes', require('./routes'));

keystone.start();