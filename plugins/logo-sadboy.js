//import fetch from 'node-fetch'
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Textnya Dungu!'
  m.react('⏱️')
  m.reply('Sedang Diproses...')
  let res = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Nih kak`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['logo']
handler.command = /^(logosadboy)$/i
handler.limit = true

module.exports = handler
