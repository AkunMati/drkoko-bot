let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `Total Fitur Bot Saat ini: ${totalf}\n`, wm, giflogo, [['THANKS KOKO GANTENG:v','terimakasih']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: data.linkig
                        mediaType: 2,
                        description: 'Kamu Sayang Aku Kan?',
                        title: run,
                        body: 'Total Cintaku Padamu',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: data.linkig
                      }}
})
}


handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(total)?fitur$/i

module.exports = handler
