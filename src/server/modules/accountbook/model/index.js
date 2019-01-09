const { Accountbook } = require('../../../model');

module.exports = {
    getPageByUserID: (id, pageSize, page) => {
        /* fetching/transform logic for a single user */
        return Accountbook.where('user', id)
            .orderBy('time', 'DESC')
            .fetchPage({
                pageSize,
                page,
                withRelated:['category']
            });
    },
    createOneRecord: (id, payload) => {
        return Accountbook.forge({
            user: id,
            ...payload
        }).save();
    }
};