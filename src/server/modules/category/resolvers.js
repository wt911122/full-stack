const { Category } = require('../../model');

module.exports = {
    Query: {
        async Categories(){
            const collections = await Category.fetchAll()
            return collections.models.map(m => m.attributes);
        }
    }
}