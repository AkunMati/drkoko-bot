let handler = async(m, { conn, text, participants }) => {
  let teks = ` *⊙─〔 👥TAG ALL👥 〕─⊙*
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` 👤 @${mem.id.split('@')[0]}\n`
				}
                teks += `\n↻ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×↻`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['otagall <pesan>']
handler.tags = ['owner']
handler.command = /^(otagall|otagal|otall|ot)$/i

handler.group = true
handler.owner = true
module.exports = handler
