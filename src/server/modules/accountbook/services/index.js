const {
    getPageByUserID
} = require('../model');
const _ = require('lodash');
const getAcccountBook = async (id, pageSize, page) => {
    const collection = await getPageByUserID(id, pageSize, page);
    return collection;
}

module.exports = {
    getAcccountBook
}