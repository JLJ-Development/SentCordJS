# sentcordjs
 SentCordJS is an api wrapper for sentcord to help you post your server/shard stats easily.

 # Setup
 ```javascript
 const sentcordClient = require('sentcordjs')
 var key = 'uihfiluwhfiuwhfiusdhfauidfhsdiufhasldufhsdilfuhsdfiulhffjhf'
 var sentcord = new sentcordClient(key)
 client.stats('botid', 'servercount', 'shard count')
