let { sticker } = require('../lib/sticker.js')

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', 'sama.sama', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(terimakasih|tq|ty|thx|thank|thanks)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/06a27a93b66f63a5a067e.jpg",
]
