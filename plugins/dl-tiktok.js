const fetch = require('node-fetch')
const axios = require('axios')
const { tiktok } = require('social_media_downloader')
let handler = async (m, { conn, usedPrefix, command, text, args }) => {
if (!args[0]) throw 'Masukkan Link'
m.react('⏱️')
try {
let p = await tiktok(args[0])
    if (!p.link) throw 'Can\'t download video!'
    let cap = `*「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────
*📛Nickname:* ${p.dev}
*📒Description:* ${p.description}
*Url:* ${p.url}
`.trim()
conn.send2ButtonVid(m.chat, p.link, cap, author, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, fake, adReply)
} catch (e) {
    throw eror
    }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^t(iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i
handler.premium = true
handler.limit = true

module.exports = handler
