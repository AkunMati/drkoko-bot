let fetch = require("node-fetch")
let handler = async (m, usedPrefix, command) => {
 let g = await fetch(`https://raw.githubusercontent.com/MendingTuru/RestAPi/main/data/gojo.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
conn.sendButtonImg(m.chat, a, "Random Image", "Gojo Satoru", 'Next', ".gojo", m)
}
handler.help = ['gojo']
handler.tags = ['image']
handler.command = /^gojo$/i
handler.limit = true
module.exports = handler
