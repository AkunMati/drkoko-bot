let imgr = flaaa.getRandom()
let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Ehh @${orang.replace(/@.+/, '')} Mau Gak Jadi Pacar Gw? 😌`.trim()
    let mentionedJid = [orang]
    await conn.sendButton(m.chat, jawab, '📮Silahkan Cari Pacar Lagi📮', wm + '\n\n' + run, `${imgr + 'Cari Pacar'}`, [['Cari Lagi?','.caripacar']], m, { contextInfo: { mentionedJid } })
}
handler.help = ['caripacar']
handler.tags = ['fun']
handler.command = /^pacar|pcr|caridoi|doi|caripacar$/i
handler.group = true

module.exports = handler
