let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Aku Sange Nih, Ngewe yuk @${orang.replace(/@.+/, '')} 🤤`.trim()
    let mentionedJid = [orang]
    await conn.sendBut(m.chat, jawab, '📮 Silahkan Klik Button dibawah ini', `Ahh ahh🥵`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['ngeweyok']
handler.tags = ['fun']
handler.command = /^ngentodyok|ngeweyok|ngntdyok$/i
handler.group = true

module.exports = handler
