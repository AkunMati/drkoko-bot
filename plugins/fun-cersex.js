const fetch = require('node-fetch')
let axios = require("axios");
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let json = await fetch(`https://api-xcoders.xyz/api/random/cersex?apikey=${global.xckey}`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 Cersex 」━┉⎔*
🤠 *Query* : ${x.title}
 ${x.date}
 
 ${x.cerita}
`
        await conn.sendButton(m.chat, caption, wm, x.thumbnail, `cersex`, `.cersex`, m)
}
handler.help = ['cersex']
handler.tags = ['nsfw']
handler.command = /^(cersex)$/i
handler.premium = true

module.exports = handler
