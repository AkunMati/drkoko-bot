const fetch = require('node-fetch')

handler.before = function (m, { isAdmin, isBotAdmin }) => {
if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.simi2) {
        let api = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
  let res = await api.json()
  m.reply(`*Simi:* ${res.success}`)
    }
}
module.exports = handler
