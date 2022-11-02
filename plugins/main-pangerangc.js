const fetch = require('node-fetch')
let teks = 'gckoko'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/6433c5e9e7710aeeffeb5.jpg'+ teks)).buffer(), `
*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐉𝐨𝐢𝐧 && 𝐁𝐚𝐜𝐚 𝐑𝐮𝐥𝐞𝐬❗*
╔═══════════════════
║ _*Group All*_ ᵈʳкσкσ-ᴍᴅ×፝֟͜×
╠═══════════════════
║➸ Group Yuni & Alpuy:
║ https://chat.whatsapp.com/DsLuDkm9h8nDdgtTEKEW49
║➸ 𝐆𝐫𝐨𝐮𝐩 𝐁𝐨𝐭 1:
║ https://chat.whatsapp.com/IqFfoXcdh7UFyPoQTpKoQp
║➸ 𝐆𝐫𝐨𝐮𝐩 𝐁𝐨𝐭 2:
║ https://chat.whatsapp.com/LhpFRMqsKkn6nrCCf1He9R
╚════════════════════
╔════════════════════
║ *RULES GROUP BOT*
╠════════════════════
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 18+
║𝐍𝐨 𝐬𝐡𝐚𝐫𝐞 𝐋𝐢𝐧𝐤
║𝐍𝐨 𝐒𝐡𝐚𝐫𝐞 𝐕𝐢𝐫𝐮𝐬 
║𝐍𝐨 𝐒𝐩𝐚𝐦 𝐂𝐨𝐦𝐦𝐚𝐧𝐝
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐓𝐞𝐥𝐟𝐨𝐧 𝐁𝐨𝐭
║𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐞𝐫 𝐄𝐭𝐢𝐤𝐚
║𝐃𝐢𝐥𝐚𝐫𝐚𝐧𝐠 𝐇𝐢𝐧𝐚 𝐁𝐨𝐭
║𝐌𝐚𝐮 𝐒𝐞𝐰𝐚? 𝐊𝐞𝐭𝐢𝐤 .owner
╚════════════════════
`.trim(), wm, '😳KOKO', '.owner', 'MENU✔️', '.menu')
handler.help = ['gckoko']
handler.tags = ['info']
handler.command = /^gc(koko|groupkoko)$/i

module.exports = handler
