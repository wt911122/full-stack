const { Accountbook } = require('../../../model');

module.exports = {
    getPageByUserID: (id, pageSize, page) => {
        /* fetching/transform logic for a single user */
        return Accountbook.where('user', id).fetchPage({
            pageSize,
            page
        });
    },
};