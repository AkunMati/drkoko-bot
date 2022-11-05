let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let aineess = fs.readFileSync('./mp3/mp3_kamu_nanya yah.opus')
await conn.sendMessage(m.chat, { audio: { url: "./mp3/mp3_kamu_nanya yah.opus" }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(kamu nanya?|iya apa?|apa?|apa|kamu nanya|Kamu nanya)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
