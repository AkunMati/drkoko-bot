//import fetch from 'node-fetch'
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya Dungu!'
  m.react('⏱️')
  m.reply('Sedang Diproses...')
  let res = `https://ziy.herokuapp.com/api/maker/rem?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'rem.jpg', `Nih kak`, m, false)
}
handler.help = ['logorem'].map(v => v + ' <text|text>')
handler.tags = ['logo']
handler.command = /^(logorem)$/i
handler.register = false

handler.limit = true

module.exports = handler
