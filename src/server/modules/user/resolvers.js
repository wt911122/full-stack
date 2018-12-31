const User = require('./services');
const jsonwebtoken = require('jsonwebtoken');
module.exports = {
    Query: {
        // fetch the profile of currently authenticated user
        async me (_, args, { user }) {
            // make sure user is logged in
            if (!user) {
                throw new Error('You are not authenticated!')
            }
            // const me = jsonwebtoken.decode(user, process.env.JWT_SECRET)
            // user is authenticated
            const t =  await User.getUser(user.id);
            return t;
        }
    },
    Mutation: {
        // Handle user signup
        async signup (_, { username, password }, { user }) {
            if(user)
                throw new new Error('You have logged!');

            const userid = await User.createUser({
                username,
                password, // await bcrypt.hash(password, 10)
            });

            // return json web token
            return jsonwebtoken.sign(
                { id: userid },
                process.env.JWT_SECRET,
                { expiresIn: '1y' }
            )
        },

        // Handles user login
        async login (_, { username, password }) {
            const userid = await User.validateUser(username, password);

            // return json web token
            return jsonwebtoken.sign(
                { id: userid },
                process.env.JWT_SECRET,
                { expiresIn: '1d' }
            )
        },

    }
}