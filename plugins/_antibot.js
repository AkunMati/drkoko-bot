// DETECTOR BOT
let handler = m => m
let imgr = pickRandom(flaaa)

handler.before = async (m, { isAdmin, isBotAdmin }) => {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
    let name = await conn.getName(m.sender)
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let caption = `👋 Anti Bot ${name} @${m.sender.split("@")[0]}, Tidak Bole Ada Bot Lain Di Group Ini. Thanks!`.trim()
   if (chat.antibot) {
   if (isAdmin) return m.reply('*Eh Sorry You Admins, You Will Not Be Kicked. hehe..*')
   if (!isBotAdmin) return m.reply('*Bots are Not Admins, How Can They Kick People _-*')
   if (up.key.id.startsWith('BAE5') && !up.key.fromMe) {
   	user.banned = true
   	this.sendButt(m.chat, caption, author, null, `${imgr + 'Anti Bot'}`, [['Disable Anti Bule', '.off antibot']], m, { mentions: this.parseMention(caption) })
        await conn.sendMessage(m.chat, { delete: m.key })
   	return conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
  }
 }

module.exports = handler
