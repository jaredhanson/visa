/**
 * Module dependencies.
 */
var Authorizer = require('./authorizer')


/**
 * Export default singleton.
 *
 * @api public
 */
exports = module.exports = new Authorizer();

/**
 * Expose constructors.
 */
exports.Visa =
exports.Authorizer = Authorizer;
