// --------------------------------------------- pakai scrape social_media_downloader --------------------------------------------------------

let fetch = require('node-fetch')
let axios = require('axios')
const { tiktok } = require('social_media_downloader')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
m.react('⏱️')
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
────────── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────────
*Nickname:* ${p.dev}
*Description:* ${p.description}
*Url:* ${p.url}

_©ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, wm, `💰SEWA`, `.sewa`, `AUDIO✅`, `.tomp3`, fake, { quoted: adReply})
} catch (e) {
    throw eror
    }
}

handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i
handler.limit = true
handler.premium = false
module.exports = handler
