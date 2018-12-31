const { User } = require('../../../model');

module.exports = {
    getByUsername: (username) => {
        /* fetching/transform logic for a single user */
        return User.where('username', username).fetch();
    },
    getById: (id) => {
        return User.where('id', id).fetch();
    },
    create: ({
        username, password
    }) => {
        return User.forge({
            'username': username,
            'password': password
        }).save()
    }
};