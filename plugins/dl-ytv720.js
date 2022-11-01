const xfar = require('xfarr-api')
const fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.react('⏱️')
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
jika masih blur, berarti videonya emang ngeblur dari youtubenya
Atau bisa jadi faktor *MUKA*`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i
handler.premium = true
handler.limit = true
module.exports = handler
