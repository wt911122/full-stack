module.exports = `
    type Category {
        id: ID!
        name: String!
        describe: String!
    }
    extend type Query {
        Categories: [Category]!
    }
    `