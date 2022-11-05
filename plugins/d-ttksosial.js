let fetch = require('node-fetch')
let axios = require('axios')
const { tiktok } = require('social_media_downloader')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
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
_©ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×🍭_
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `Donasi`, `.donasi`, `Audio`, `.tta ${args[0]}`, fakes, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['ttksocial'].map(v => v + ' <url>')
handler.premium = true
handler.command = /^(ttksocial)$/i
module.exports = handler
