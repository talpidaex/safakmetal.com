var keystone = require('keystone');
var importRoutes = keystone.importer(__dirname);


var routes = {
  views: importRoutes('./views'),
}

exports = module.exports = function(app) {

  app.get("/", routes.views.anasayfa);
  app.get("/kurumsal", routes.views.kurumsal);
  app.get("/galeri", routes.views.galeri);
  app.get("/iletisim", routes.views.iletisim);
  app.get("/hizmetler", routes.views.hizmetler);

}