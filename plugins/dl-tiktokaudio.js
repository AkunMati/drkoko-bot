const fetch = require('node-fetch')
const axios = require("axios")
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
 m.react('⏱️')
 let chat = global.db.data.chats[m.chat]
    let url = `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
   document: { url: `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: '▶︎ ━━━━━━━•────────────────── ', 
            body: wm,
            description: 'Now Playing...',
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/11847cc65e161641e59bb.jpg')).buffer(),
         mediaUrl: sig
        }
     }
  })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

module.exports = handler
