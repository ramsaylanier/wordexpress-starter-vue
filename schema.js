const makeExecutableSchema = require('graphql-tools').makeExecutableSchema
const WordExpressDefinitions = require('wordexpress-schema').WordExpressDefinitions
const WordExpressResolvers = require('wordexpress-schema').WordExpressResolvers
const connectors = require('./db').connectors
const merge = require('lodash').merge
const Config = require('config')

const RootResolvers = WordExpressResolvers(connectors, Config.get('public'))
const Resolvers = merge(RootResolvers)

const schema = makeExecutableSchema({
  typeDefs: [...WordExpressDefinitions],
  resolvers: Resolvers
})

module.exports = schema
