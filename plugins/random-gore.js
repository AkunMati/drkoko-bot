const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let json = await fetch(`https://api-xcoders.xyz/api/random/gore?apikey=${global.xckey}`)
        let jsons = await json.json()
        let x = jsons.result
        let caption = `*⎔┉━「 gore 」━┉⎔*
🤠 *Query* : ${x.title}
 ${x.authorname}
 ${x.published}
 ${x.author_url}
 ${x.quality}
 ${x.duration}
 ${x.url}
`
        await conn.sendButtonImg(m.chat, caption, wm, x.thumbnail, 'gore', '/gore', m)
}
handler.help = ['gore']
handler.tags = ['random']
handler.command = /^(gore)$/i
handler.limit = true
handler.premium = true
module.exports = handler
