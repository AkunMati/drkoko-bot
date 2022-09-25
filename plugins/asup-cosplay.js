let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
     m.reply('Tunggu Samyang...')
  let res = await (await fetch('https://raw.githubusercontent.com/Luigmntng/RESTAPI/master/data/cosplay.json')).json()
  let cosser = res[Math.floor(Math.random() * res.length)]
  await conn.sendButtonImg(m.chat, cosser, 'ini 3d ?', wm, 'Next', `.cosplay`, m, false)
}
handler.help = ['cosplay']
handler.tags = ['asupan']
handler.command = /^(cosplay)$/i
handler.register = true
handler.premium = true
handler.limit = true

module.exports = handler
