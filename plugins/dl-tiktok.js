const hxz = require("hxz-api")
let handler = async(m,{text, conn}) => {

let p = await  hxz.ttdownloader(text)
const { nowm, wm, audio } = p
conn.sendFile(m.chat, nowm, null, '⫹⫺ Udah di kasih bilang apa?', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i
handler.premium = true
handler.limit = true
module.exports = handler
