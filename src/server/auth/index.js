const { AuthenticationError } = require('apollo-server-koa');
function checkAuth(ctx, user){
    if (!user) {
        throw new AuthenticationError('You are not authenticated!')
    }
}

module.exports = checkAuth;