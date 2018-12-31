const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    type User {
        id: ID!
        username: String
    }
    type Query {
        me: User
    }
    type Mutation {
        signup (username: String!, password: String!): String
        login (username: String!, password: String!): String
    }
`;

module.exports = typeDefs;
