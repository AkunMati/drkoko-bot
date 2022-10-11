//import fetch from 'node-fetch'
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya Dungu!'
  m.react('⏱️')
  m.reply('Sedang Diproses...')
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `*Sudah Jadi Kak>_<*`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(logokaneki)$/i
handler.limit = true
module.exports = handler
