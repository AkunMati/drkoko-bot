let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`, wm + '\n\n' + run, fake, [['KOKO','.owner']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ',
                        mediaType: 2,
                        description: 'Kamu Sayang Aku Kan?',
                        title: run,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ'
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(total)?fitur$/i

module.exports = handler
