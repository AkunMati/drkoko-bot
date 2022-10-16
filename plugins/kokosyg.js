let fs = require('fs')
let handler = async (m) => {
let kokosyg = fs.readFileSync('./mp3/tmp.opus')
conn.sendFile(m.chat, kokosyg, '', '', m, true)
}

handler.customPrefix = /^(Koko|koko|Pangeran|pangeran|Bot|bot)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
