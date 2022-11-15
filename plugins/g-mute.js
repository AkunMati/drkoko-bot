let db = require('../lib/database')

const cooldown = 60000

let handler = async (m, { conn, args, usedPrefix, isPrems, isOwner, command }) => {
    if (m.chat.includes('120363041604217979') && !isOwner) return m.reply(`[ hehe ]`)
    if (!args[0]) return m.reply(`Format : ${usedPrefix + command} <timer>\n1 = 1 menit\n5 = 5 menit ... dst.\n\nContoh : *${usedPrefix + command} 10*`)
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[0]) ? Math.min(Math.max(parseInt(args[0]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (total > 100 && !isPrems) return m.reply(`_... >> not premium ..._\n[!] Maksimal ${command} : 100 menit.`)
    if (total > 200 && !isOwner) return m.reply(`[!] Maksimal ${command} : 200 menit.`)
    let chat = db.data.chats[m.chat]
    chat.isBanned = true
    chat.lastmute = new Date * 1
    chat.mutecd = cooldown * total
    m.reply(`Bot senyap selama *${total} menit!*`)
}

handler.help = ['mute']
handler.tags = ['group']
handler.command = /^(mute|senyap)$/i

handler.admin = true
handler.botAdmin = true
handler.group = true

handler.cooldown = cooldown

module.exports = handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}
