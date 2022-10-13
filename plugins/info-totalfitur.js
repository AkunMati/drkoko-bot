let handler = async (m, { conn, args, command }) => {
let img = 'https://telegra.ph/file/6433c5e9e7710aeeffeb5.jpg'
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.sendButtonImg(m.chat, img, `Total Fitur saat ini: ${totalf}`, wm, 'THANKS KOKO GANTENG:v', 'terimakasih', m)
}

handler.help = ['totalfitur']
handler.tags = ['tools']
handler.command = ['totalfitur']
handler.limit = true
module.exports = handler
