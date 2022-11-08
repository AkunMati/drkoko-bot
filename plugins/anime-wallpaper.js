let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, 'Silahkan masukan query', m)
let tetete = `https://api.zacros.my.id/search/wallpapercave?query=${text}`
conn.sendButtonImg(m.chat, tetete, `Hasil Dari ${text}`, wm, 'Thnks Koko Ganteng:v', 'terimakasih', m) 
}
handler.help = ['wallpapercave'].map(v => v + ' <query>')
handler.tags = ['anime']
handler.command = /^(wallpapercave)$/i
handler.limit = true
module.exports = handler
