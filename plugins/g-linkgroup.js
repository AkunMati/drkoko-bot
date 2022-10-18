const { areJidsSameUser } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
    let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
    if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Hanya bisa dibuka di grup'
    let groupMetadata = await conn.groupMetadata(group)
    if (!groupMetadata) throw 'groupMetadata is undefined :\\'
    if (!('participants' in groupMetadata)) throw 'participants is not defined :('
    let bot = groupMetadata.participants.find(user => areJidsSameUser(user.id, conn.user.id))
    if (!bot) throw 'Gw gk ada di grup itu 🗿'
    if (!bot.admin) throw 'Gw bukan atmin bg 🗿'
    await conn.sendHydrated(m.chat, `*${htki} LINK GROUP ${htka}*`, run, null, 'https://www.whatsapp.com/otp/copy/'+'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), 'S A L I N', swb, wm, 'SEWA BOT', '.sewain', 'KOKO', '.owner', m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^link(gro?up)?$/i

module.exports = handler
