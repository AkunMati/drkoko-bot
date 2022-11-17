let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
let bear = `9b95802c6f20`
  if (!text) return conn.reply(m.chat, `Gunakan format: ${usedPrefix}${command} Colin Changed`, m)

  await conn.sendButtonImg(m.chat, 'https://telegra.ph/file/700df524f39be728c8882.jpg', 'Searching...', wm, '😳KOKO', '.owner', m)
    let res = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=0e92565522&url=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
const ftroli = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: `Search Tiktok NoWM 🔍`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/700df524f39be728c8882.jpg')).buffer(), //Gambarnye
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
await conn.sendButtonVid(m.chat, json.result.nowm, `Nih Kak @${m.sender.split`@`[0]}`, wm, 'Audio', `.tiktokmp3 ${text}`, m, {
    quoted: ftroli, contextInfo: { forwardingScore: 99999, isForwarded: true,
         externalAdReply: { 
             title: global.wm,
             body: 'Subscribe Channel YouTubeKu Kak>_<',
             description: 'Apa Benar Ini Yang Ada Cari?', 
             mediaType: 2, 
           thumbnail: await (await fetch('https://telegra.ph/file/700df524f39be728c8882.jpg')).buffer(), 
          mediaUrl: `https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ` 
         } 
      } 
   })
}
handler.help = ['tiktok2 <keyword>'] 
handler.limit = true
handler.premium = true
handler.tags = ['downloader'] 
handler.command = /^(tiktok2)$/i 
  
module.exports = handler
