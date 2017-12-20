const Config = require('config')
const WordExpressDatabase = require('wordexpress-schema').WordExpressDatabase

const publicSettings = Config.get('public')
const privateSettings = Config.get('private')
const Database = new WordExpressDatabase({publicSettings, privateSettings})
const {connectors, models} = Database

module.exports = {
  Database,
  connectors,
  models
}
