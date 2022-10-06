//import fs from 'fs'
//import fetch from 'node-fetch'
let fs = require('fs')
let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/soundultah.mp3')

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
