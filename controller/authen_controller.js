var basicAuthConfig = require('../config/basic_auth')
var basicAuth = require('basic-auth')

// Basic authentication
exports.basicAuth = function () {
  return function (req, res, next) {
    var user = basicAuth(req)

    if (!user || user.name !== basicAuthConfig.username || user.pass !== basicAuthConfig.password) {
      res.set('WWW-Authenticate', 'Basic realm=Authorization Required')
      res.status(401).json({ 'success': false, 'error_message': 'Basic Authentication Failed.' })
    } else {
      next()
    }
  }
}
