/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/MendingTuru
  🍀 • ⚘KOKO PANGERAN⚘
-----------------------------------------------------------------------------------------*/

let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `🧿 ᵈʳкσкσ-ᴍᴅ×፝֟͜× 🔮`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButtonVid(m.chat, res, `Nih Beb Jgn Sangne🥵 *◈•@${who.split("@s.whatsapp.net")[0]}*`, wm, '🔄 NEXT BEB 🔄', `/${command}`, fgif, { mentions: [who] })}
handler.help = ['tiktokxxx']
handler.tags = ['bokep']
handler.command = /^(tiktokxxx)$/i
module.exports = handler
global.mkbot = ['lwSUluWz', 'HSxJ72Rf', 'H6pvVPJc', 'uVAf54xz', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
