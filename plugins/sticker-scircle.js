let uploadImage = require('../lib/uploadImage')
let { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
m.reply('Tunggu Sebentar...!')
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`*[ERROR❌]*\n_*Terjadi Kesalahan, Reply Picture Ketik .scircle!*_`)
}}
handler.help = ['scircle']
handler.tags = ['sticker']
handler.command = /^scircle|circle$/i
module.exports = handler
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
