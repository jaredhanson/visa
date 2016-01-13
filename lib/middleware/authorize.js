module.exports = function authenticate(authorizer) {
  
  return function authorize(req, res, next) {
    console.log('TODO: Implement authorize middleware');
    return next();
  }
}
