var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('authentication middleware');
        next();
    },
    logger: function(req, res, next) {
       console.log('logger middleware');
       next();
    }
}

module.exports = middleware;