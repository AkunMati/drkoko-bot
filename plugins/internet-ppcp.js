/*let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=NezukoTachibana281207')
m.reply(data.wait)

//let res = await fetch(API('lol', '/api/random/ppcouple', { }, 'apikey')
let json = await res.json()

conn.sendFile(m.chat, json.result.male, 'ppcowo.png', 'Cowok', m, false,{ contextInfo: { forwardingScore: 999, isForwarded: true }})

conn.sendFile(m.chat, json.result.female, 'ppcewe.png', 'Cewek', m,false, { contextInfo: { forwardingScore: 999, isForwarded: true }})

}*/

let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=c941251d3ac904bb')
  m.reply(data.wait)
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
conn.sendButtonImg(m.chat, json.result.female,  'PP Cewenya', wm, 'Lanjut?', '.ppcp', m)
conn.sendFile(m.chat, json.result.male,'pria.jpg',  'PP Cowonya', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true
handler.register = true
module.exports = handler
