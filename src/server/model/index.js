const dbconfig = require('./knexfile.js').development;
// console.log(dbconfig)
const knex = require('knex')(dbconfig);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin(require('bookshelf-uuid'));
bookshelf.plugin('pagination');
const User = bookshelf.Model.extend({
    tableName: 'user',
    uuid: true
});
const Accountbook = bookshelf.Model.extend({
    tableName: 'accountbook',
    uuid: true
})

module.exports = {
    User,
    Accountbook
}