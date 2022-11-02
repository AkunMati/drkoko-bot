let handler = async (m, { conn, usedPrefix, command }) => {
let img = 'https://telegra.ph/file/6433c5e9e7710aeeffeb5.jpg'
conn.sendButtonImg(m.chat, img, `
╰┈➤ ❝ *GC BOT* ❞
✤ *ʙᴏᴛ ʙʏ ᴘᴀɴɢᴇʀᴀɴ ᴍᴅ*
_*LINK:*_ https://chat.whatsapp.com/IqFfoXcdh7UFyPoQTpKoQp
(ɴ) sᴇʙᴇʟᴜᴍ ᴊᴏɪɴ ᴜsᴀʜᴀɪɴ ʙᴀᴄᴀ ᴅᴇsᴋ ᴅᴜʟᴜ ʏᴀ, ᴛʜᴀɴᴋʏᴏᴜᴜ
`, wm, 'TERIMAKASIH KOKO GANTENG:v', 'terimakasih', m) // Tambah sendiri kalo mau
handler.help = ['pangerangc']
handler.tags = ['main']
handler.command = /^pangeran(gc|group)$/i

module.exports = handler
