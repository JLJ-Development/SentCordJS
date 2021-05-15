class sentcordClient {
    constructor(apikey, botid) {
        /**
         * packages
         * @package node-fetch
         * The apikey is required to access the sentcord api
         */
        this.apikey = apikey
        /**
         * Needs the bot id
         */
        this.botid = botid
        /**
         * Node fetch
         */
        this.fetch = require('node-fetch')
    }
    stats(botid, servers, shards) {
        this.fetch(`https://sentcord.com/api/bot/${botid}`, {
            method: 'POST',
            headers: {
                'Authorization': this.apikey,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                serverCount: servers,
                shardCount: shards
             }).then(r => r.json()).then(d => console.log(d)).catch(e => console.log(e.stack))
        }) 
    }
}

module.exports = sentcordClient