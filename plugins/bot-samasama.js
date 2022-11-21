let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn }) => {
  let name = await conn.getName(m.sender)
  let res = await `https://api.memegen.link/images/custom/sama_sama_kak/${name}.jpg?background=https%3A%2F%2Ftelegra.ph%2Ffile%2F77c163345d01414345ab9.png&watermark=memecomplete.com&token=khj7yfpkw8idaztccuys`
  let stiker = await sticker(null, res, global.packname, global.author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.customPrefix = /^(terimakasih)$/i
handler.command = new RegExp

module.exports = handler
