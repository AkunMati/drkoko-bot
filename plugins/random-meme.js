let axios = require("axios")
let handler = async (m, {command, conn}) => {
let res = await axios(`https://meme-api.herokuapp.com/gimme`)
let json = res.data
let url = json.url
conn.sendButt(m.chat, `*${command}*`.trim(), wm, url, [['🔄 NEXT 🔄'], [`.meme`]], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
handler.limit = true
module.exports = handler
