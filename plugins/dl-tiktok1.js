const fs = require ('fs')
const fetch = require ('node-fetch')
const axios = require ('axios')
const { tiktokdl, tiktokdlv2 } = require ('@bochilteam/scraper')

let handler = async (m, { conn, args, usedPrefix, command }) => {
global.ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
    try {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
m.reply('Mohon Ditunggu yah Bro')
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendButtonVid(m.chat, url, `              *「 🇹 ᴛ ɪ ᴋ ᴛ ᴏ ᴋ 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
───── ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻ ──────
*Nickname:* ${nickname}
*Description:* ${description}
_©By ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×_
`.trim(), wm, `Audio`, `.ttmp31 ${args[0]}`, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 3596400,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ',
    mediaType: 2, 
    description: 'Subscribe My Channel YouTube',
    title: "⌫     ⌨︎     ☏︎",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/700df524f39be728c8882.jpg')).buffer(),
    sourceUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ'
  }
  } })
} catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm1 ${args[0]}`, `Audio`, `.tta1 ${args[0]}`, m)
    }
}
handler.help = ['tiktok1', 'tt1', 'tiktokdl1'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok1|tt1|tiktokdl1|tiktoknowm1)$/i
handler.premium = true
handler.limit = true

module.exports = handler
