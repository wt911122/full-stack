const {
    makeExecutableSchema,
    // addMockFunctionsToSchema,
    // mergeSchemas,
} = require('graphql-tools');
const requireAll = require('require-all');
const path = require('path');
const _ = require('lodash');
// console.log(path.resolve(__dirname, 'modules'));
const schemas = [];
const resolvers = {};
const dirname = path.resolve(__dirname, 'modules');
requireAll({
    dirname,
    filter :  /(schema)\.js$/,
    resolve: (schema) => {
        schemas.push(schema);
    }
})
requireAll({
    dirname,
    filter :  /(resolvers)\.js$/,
    resolve: (solvers) => {
        _.merge(resolvers, solvers);
    }
});
const baseTypeDefs = `
    type Query {
        _empty: String
    }
    type Mutation {
        _empty (_nothing: String ): String
    }
`;
schemas.unshift(baseTypeDefs);
module.exports = makeExecutableSchema({
    typeDefs: schemas,
    resolvers
});
