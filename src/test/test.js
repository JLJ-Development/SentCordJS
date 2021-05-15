var sentcordClient = require('../Client')
var key = require(`./config/key.json`)
var client = new sentcordClient(key.sentcord.key)

client.stats('')
