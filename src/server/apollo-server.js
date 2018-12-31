const { ApolloServer } = require('apollo-server-koa');
// const { schema } = require('./modules/schemas');
// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
const schema = require('./schema-master');
// const context = async ({ req }) => {
//     // simple auth check on every request
//     const auth = (req.headers && req.headers.authorization) || '';
//     const email = new Buffer(auth, 'base64').toString('ascii');

//     // if the email isn't formatted validly, return null for user
//     if (!isEmail.validate(email)) return { user: null };
//     // find a user by their email
//     const users = await store.users.findOrCreate({ where: { email } });
//     const user = users && users[0] ? users[0] : null;

//     return { user: { ...user.dataValues } };
// };
const server = new ApolloServer({
    schema,
    // typeDefs,
    // resolvers,
    context: ({ ctx }) => {
        // get the user token from the headers
        // const token = ctx.req.headers.authorization || '';
        // try to retrieve a user with the token
        // const user = getUser(token);

        // add the user to the context
        return {
            user: ctx.state.user
        };
      },
});

module.exports = server