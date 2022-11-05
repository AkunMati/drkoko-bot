// DETECTOR BOT
let handler = m => m

handler.before = async (m, { isAdmin, isBotAdmin }) => {
let imgr = pickRandom(flaaa)
    let name = await conn.getName(m.sender)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let caption = `[ ANTI BOT ]\n👋 ${name} @${m.sender.split("@")[0]}, Tidak Bole Ada Bot Lain Di Group Ini. Thanks!`.trim()
   if (chat.antibot) {
   if (isAdmin) return m.reply('*Eh Maap Ternyata Bot nya admin, Kamu Tidak Di Kick hehe..*')
   if (!isBotAdmin) return m.reply('*Jadiin Bot Admin Terlebih Dahulu, Gimana Mau Kick Pantek_-*')
   if (m.sender.id.startsWith('BAE5') && !m.fromMe) {
   	user.banned = true
   	this.sendButt(m.chat, caption, author, null, `${imgr + 'Anti Bot'}`, [['Disable Anti Bot', '.off antibot']], m, { mentions: this.parseMention(caption) })
   	return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
  }
 }

module.exports = handler
