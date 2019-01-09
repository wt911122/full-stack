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
    uuid: true,
    category: function() {
        return this.belongsTo(Category, 'category', 'id');
    }
});
const Category = bookshelf.Model.extend({
    tableName: 'category',
})

module.exports = {
    User,
    Accountbook,
    Category
}