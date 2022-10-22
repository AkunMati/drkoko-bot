const fetch = require('node-fetch')
let handler = m => m
handler.before = async function (m, { isAdmin, isBotAdmin }) {
if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    if (chat.simiautoVn && !chat.isBanned ) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
     if (!m.text) return
    let sim = await fetch(`https://api.simsimi.net/v2/?text=${m.text}&lc=id`)
    let res = await sim.json()
        let tts = `https://hadi-api.herokuapp.com/api/tts?language=id&text=${res.success}`
        conn.sendMessage(m.chat, { audio: { url: tts }, mimetype: 'audio/mp4' })
    }
   return true
}

module.exports = handler
