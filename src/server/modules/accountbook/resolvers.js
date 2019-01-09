const checkAuth = require('../../auth');
const {
    getAcccountBook,
    record,
} = require('./services');

module.exports = {
    Query: {
        // fetch the profile of currently authenticated user
        async ABRecords (_, { pageSize = 20, page = 0 }, { ctx, user }) {
            // make sure user is logged in
            checkAuth(ctx, user);
            // if (!user) {
            //     throw new Error('You are not authenticated!')
            // }
            // const me = jsonwebtoken.decode(user, process.env.JWT_SECRET)
            // user is authenticated
            return await getAcccountBook(user.id, pageSize, page);

        }
    },
    Mutation: {
        async insertOneRecord (_, payload, { ctx, user }){
            checkAuth(ctx, user);
            await record(user.id, payload);
            return 'ok!';
        }
    }
}