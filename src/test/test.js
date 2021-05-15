var sentcordClient = require('../Client')
var client = new sentcordClient('')

client.stats('563197357697662988', '220').then(console.log('Stats posted!'))