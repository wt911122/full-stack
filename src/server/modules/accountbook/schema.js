// const { gql } = require('apollo-server-koa');

const typeDefs = `
    type ABRecord {
        id: ID!
        category: String!
        content: String!
        cost: Float
        moodgrade: Float
    }
    type ABRecordCollection {
        hasMore: Boolean!
        records: [ABRecord]
    }
    extend type Query {
        ABRecords(
            """
            The number of results to show. Must be >= 1. Default = 20
            """
            pageSize: Int
            """
            If you add a cursor here, it will only return results _after_ this cursor
            """
            page: Int
        ): ABRecordCollection!
    }
`;

module.exports = typeDefs;
