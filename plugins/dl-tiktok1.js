let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) return m.reply(`Gunakan format ${usedPrefix + command} *link tiktok*`)
m.react('⏱️')
try {
require('../lib/tiktok').tiktok(text).then(async v => {
let imageMess = await conn.sendFile(m.chat, v.thumbnail, `*乂 T I K T O K - D O W N L O A D E R*
     *◦ Caption :* ${v.title}
     *◦ Creator :* ${v.author}
     *◦ Fetching :* ${Func.speedNow()}
     
_Tunggu sebentar, sedang mengirim media...._`, m, { isUrl: true })
if (command === 'tiktok1' || command == 'tiktokvideo1' || command == 'tiktokvid1' || command == 'tiktoknowm1' || command == 'tiktokmp41') {
conn.sendButtonVid(m.chat, v.nowm, wm, `Audio`, `.tiktokaudio1`, null, imageMess, { isUrl: true })
}
if (command === 'tiktokaudio1' || command == 'tiktoka1' || command == 'tiktokmp31' || command == 'tiktokaud1') {
conn.sendFile(m.chat, v.audio, imageMess, { isUrl: true })
}
})
} catch(e) {
m.reply(`🚩 Can\'t download media.`)
m.react('❌')
}
}
handler.help = ['tiktok1', 'tiktokaudio1']
handler.tags = ['downloader']
handler.command = /^(tiktok1|tiktokvideo1|tiktokvid1|tiktoknowm1|tiktokmp41|tiktokaudio1|tiktoka1|tiktokmp31|tiktokaud1)$/i
handler.premium = true
handler.limit = true

module.exports = handler
