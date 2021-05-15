module.exports = class sentcordClient {
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
        if(!this.apikey) throw new ReferenceError('In order to post your stats you need to pass in your API key. To access the api key do command ..apikey in the support server.')
        if(!botid) throw new ReferenceError('In order to post your stats you need to pass in your bot id.')
        this.fetch(`https://sentcord.com/api/bot/${botid}`, {
            method: 'POST',
            headers: {
                'Authorization': this.apikey,
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify({
                serverCount: servers,
                shardCount: shards
             })
        }) 
    }
}

