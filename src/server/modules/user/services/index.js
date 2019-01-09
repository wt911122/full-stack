const {
    getByUsername,
    getById,
    create,
} = require('../model');
const bcrypt = require('bcrypt')
const _ = require('lodash');

const validateUser = async (username, password) => {
    const model = await getByUsername(username);
    if(!model)
        throw new Error('no such user')
    const row = model.toJSON();
    const valid = await bcrypt.compare(password, row.password);
    if(!valid)
        throw new Error('invalid password');

    return model.id;
}
const getUser = async (id) => {
    const model = await getById(id);
    if(model){
        return _.omit(model.toJSON(), ['password']);
    }else{
        throw new Error('no such user id')
    }
}

const createUser = async ({username, password}) => {
    const model = await create({
        username,
        password: await bcrypt.hash(password, 10)
    });
    return model.id
}

module.exports = {
    validateUser,
    getUser,
    createUser
}