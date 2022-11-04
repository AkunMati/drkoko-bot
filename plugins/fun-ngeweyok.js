let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Aku Sange Nih, Ngewe yuk @${orang.replace(/@.+/, '')} 🥵🤤`.trim()
    let mentionedJid = [orang]
    await conn.sendButt(m.chat, jawab, '📮Silahkan Klik Button Dibawah Ini📮', `${imgr + 'Ngewe Yok'}`, [['Ahh Ahh🥵','AhAh'],['Ayo Lagi🥵','.ngeweyok']], m, { contextInfo: { mentionedJid } })
}
handler.help = ['ngeweyok']
handler.tags = ['fun']
handler.command = /^ngentodyok|ngeweyok|ngntdyok$/i
handler.group = true

module.exports = handler
