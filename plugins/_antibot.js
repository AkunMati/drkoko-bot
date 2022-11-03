let handler = m => m
let imgr = pickRandom(flaaa)

handler.before = async (m, { isAdmin, isBotAdmin }) => {
    let name = await conn.getName(m.sender)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let caption = `👋 Anti Bule ${name} @${m.sender.split("@")[0]}, Thanks!`.trim()
   if (chat.antibot) {
   if (up.key.id.startsWith('BAE5') && !up.key.fromMe) {
   	user.banned = true
   	this.sendButt(m.chat, caption, author, null, `${imgr + 'Anti Bot'}`, [['Disable Anti Bule', '.off antibot']], m, { mentions: this.parseMention(caption) })
   	return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
  }
 }

module.exports = handler

// DETECTOR BOT
			if (conn.db.data.chat[m.chat].antibot) {
				if (up.key.id.startsWith('BAE5') && !up.key.fromMe) {
					rep('[ ANTI BOT ]\ngroup ini dilengkapi dengan anti bot\nanda melanggar larangan bot\nAnda berhak di kick');
					if (isAdmin) throw 'Maaf Kamu admin ternyata'
					if (m.isOwn) throw 'Oh tidak, kamu ownerku';
					if (!isBotAdmin) throw 'Oh tidak, Bot not admin';
					kik();
				}
			}
