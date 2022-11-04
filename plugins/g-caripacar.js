let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Ehh @${orang.replace(/@.+/, '')} Mau Gak Jadi Pacar Gw? 😌`.trim()
    let mentionedJid = [orang]
    await conn.sendButt(m.chat, jawab, '📮Cari Pacar Lagi📮', `${imgr + 'Cari Pacar'}`, [['Ayang🥵','Aayang'],['Cari Pacar?','.caripacar']], m, { contextInfo: { mentionedJid } })
}
handler.help = ['caripacar']
handler.tags = ['fun']
handler.command = /^pacar|pcr|caridoi|doi|caripacar$/i
handler.group = true

module.exports = handler
