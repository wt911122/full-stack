const {
    getAcccountBook
} = require('./services');
module.exports = {
    Query: {
        // fetch the profile of currently authenticated user
        async ABRecords (_, { pageSize = 20, page = 0 }, { user }) {
            // make sure user is logged in
            if (!user) {
                throw new Error('You are not authenticated!')
            }
            // const me = jsonwebtoken.decode(user, process.env.JWT_SECRET)
            // user is authenticated
            const t =  await getAcccountBook(user.id, pageSize, page);
            if(t.length === 0)
                return{
                    hasMore: false,
                    records: []
                }
            return {

            }
        }
    },
}