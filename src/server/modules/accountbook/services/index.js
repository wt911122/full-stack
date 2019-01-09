const {
    getPageByUserID,
    createOneRecord
} = require('../model');
const getAcccountBook = async (id, pageSize, page) => {
    const books = await getPageByUserID(id, pageSize, page);
    if(books.length === 0)
        return{
            hasMore: false,
            records: []
        }
    const {
        pagination,
        models
    } = books;
    return {
        hasMore: pagination.page !== pagination.pageCount,
        records: models.map((book) => {
            // const category = book.related('category').toJSON();
            const b = book.toJSON();
            return b;
        })
    }
    // return books.models.map((book) => {
    //     book.
    // })
}
const record = async (id, payload) => {
    return await createOneRecord(id, payload)
}
module.exports = {
    getAcccountBook,
    record
}