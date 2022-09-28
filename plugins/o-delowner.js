let { MessageType } = require('@adiwajshing/baileys') 
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa kak yg mau di demote?'
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    user.owner = false
    
    conn.reply(m.chat, `Hai, @${who.split`@`[0]}. kamu sudah di demote`, m, { mentions: [who] }, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['downer *@user*']
handler.tags = ['owner']
handler.command = /^downer$/i
handler.rowner = true
module.exports = handler





/*let fs = require('fs')
let handler = async (m, { conn, args }) => {

    const json = JSON.parse(fs.readFileSync('./src/owner.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `${await conn.getName(who)} belum jadi owner!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/owner.json', JSON.stringify(json))
    m.reply(`${await conn.getName(who)} sekarang bukan owner!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['delowner [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)owner$/i

handler.rowner = true

module.exports = handler*/
