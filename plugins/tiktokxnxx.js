/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/MendingTuru
  ๐ โข โKOKO PANGERANโ
-----------------------------------------------------------------------------------------*/

let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw '*[โ๐๐๐๐โ] ๐ป๐พ๐ ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ๐ +๐ท๐พ ๐ด๐๐๐ฐ๐ฝ ๐ณ๐ด๐๐ฐ๐ฒ๐๐ธ๐๐ฐ๐ณ๐พ๐ ๐ด๐ฝ ๐ด๐๐๐ด ๐ถ๐๐๐ฟ๐พ, ๐๐ธ ๐ด๐ ๐ฐ๐ณ๐ผ๐ธ๐ฝ ๐ ๐ณ๐ด๐๐ด๐ฐ ๐ฐ๐ฒ๐๐ธ๐๐ฐ๐๐ป๐พ๐ ๐๐๐ด ๐ด๐ป ๐ฒ๐พ๐ผ๐ฐ๐ฝ๐ณ๐พ #enable modohorny*'
global.fgif = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`*แตสณแดแดแดแด แดแดแึแึษดษขแดสแดษดรแึอร*`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `๐งฟ แตสณะบฯะบฯ-แดแดรแึอร ๐ฎ`, 'jpegThumbnail': false }}}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = global.db.data.users[who]
let name = await conn.getName[who]
let json = await fetch(`http://mkbot.online/api/tiktok/nsfw/nsfwtt?&apikey=${mkbotkey}`)
let jsons = await json.json()
let res = jsons.result
conn.sendButtonVid(m.chat, res, `Nih Beb Jgn Sangne๐ฅต *โโข@${who.split("@s.whatsapp.net")[0]}*`, wm, '๐ NEXT BEB ๐', `/${command}`, fgif, { mentions: [who] })}
handler.help = ['tiktokxxx']
handler.tags = ['bokep']
handler.command = /^(tiktokxxx)$/i
module.exports = handler
global.mkbot = ['lwSUluWz', 'HSxJ72Rf', 'H6pvVPJc', 'uVAf54xz', 'nwJVzP6v']
global.mkbotkey = mkbot[Math.floor(mkbot.length * Math.random())]
