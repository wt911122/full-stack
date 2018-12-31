//const { gql } = require('apollo-server-koa');

const typeDefs = `
    type User {
        id: ID!
        username: String
    }
    extend type Query {
        me: User
    }
    extend type Mutation {
        signup (username: String!, password: String!): String
        login (username: String!, password: String!): String
    }
`;

module.exports = typeDefs;
