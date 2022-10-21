let handler = m => m
let imgr = pickRandom(flaaa)

handler.before = async (m, { isAdmin, isBotAdmin }) {
    let name = await conn.getName(m.sender)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let caption = `👋 Anti Bule ${name} @${m.sender.split("@")[0]}, Thanks!`.trim()
   if (chat.antibule) {
   if (!m.sender.startsWith('62' || '1')) {
   	user.banned = true
   	this.sendButt(m.chat, caption, author, null, `${imgr + 'Anti Bule'}`, [['Disable Anti Bule', '.off antibule']], m, { mentions: this.parseMention(caption) })
   	return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
  }
 }

module.exports = handler
