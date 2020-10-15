var i18n = require('i18n');

i18n.configure({
  locales: ['ko', 'en'],
  directory: __dirname + '/locales',
  defaultLocale: 'ko',
  cookie: 'lang',
});

module.exports = function(req, res, next) {
  i18n.init(req, res);
  res.locals.__ = res.___;
  var current_locale = i18n.getLocale();
  return next();
}