let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
let img = paptt[Math.floor(Math.random() * paptt.length)]
conn.send2ButtonImg(m.chat, img, 'Tch, dasar sangean', wm, '🔙Back Nsfw', `.nsfw`, 'Next Om🆗', `.paptt`, m)
}
handler.command = /^(paptt)$/i
handler.limit = true
handler.register = true
handler.premium = true
module.exports = handler

global.paptt = [
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg"
 ]
