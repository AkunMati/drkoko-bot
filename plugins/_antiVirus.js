let handler = m => m

handler.before = async function (m, { conn, isAdmin, isBotAdmin }) => {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    let hapus = m.key.participant
    let bang = m.key.id
    let regVirus = /(PLHIPS|৭৭|๑๑|๒๒|[Đৡดผ๖⃝-⃟⃢-⃤㜸])/i
    let isVirusOn = regVirus.exec(m.text)
    if (chat.antiVirus && isVirusOn && !m.fromMe) {
   await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: hapus }})
   await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        await conn.sendButt(m.chat, `*Font Virus detect!*${isBotAdmin ? '' : '\n\n_Bot Bukan Admin_'}`, author, ['off antivirus', '/disable antivirus'], m)
        if (isBotAdmin && bot.restrict) {
       return m.reply('Kick!')
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!bot.restrict) return m.reply('Mungkin dia atmin!')
    }
    return !0
}
module.exports = handler
