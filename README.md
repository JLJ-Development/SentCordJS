# SentCordJS
 SentCordJS is an api wrapper for sentcord to help you post your server/shard stats easily.
 https://sentcord.com

 # Setup
 ```javascript
 const sentcordClient = require('sentcordjs')
 var key = 'uihfiluwhfiuwhfiusdhfauidfhsdiufhasldufhsdilfuhsdfiulhffjhf'
 var sentcord = new sentcordClient(key)
 sentcord.stats('botid', 'servercount', 'shard count')
