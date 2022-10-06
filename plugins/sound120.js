//import fs from 'fs'
//import fetch from 'node-fetch'
let fs = require('fs')
let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    let info = fs.readFileSync('./mp3/mp3_soundultah.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ",
    mediaType: 2,
    description: "https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ", 
    title: '©ᵈʳкσкσ-ᴍᴅ | ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ',
    body: run,
    thumbnail: thumb,
    sourceUrl: data.sc  }}})
}
handler.command = ['soundultah']
handler.help = ['soundultah']
handler.tags = ['sound']
module.exports = handler
