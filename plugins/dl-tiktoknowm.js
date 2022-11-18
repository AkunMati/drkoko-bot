let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args }) => {
  pangeran = `5d1197db351b`;
  if (!args[0]) throw 'Uhm...url nya mana?'
 m.react('⏱️')
let res = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=${pangeran}&url=${args[0]}`)
    let json = await res.json()
    
await conn.reply(m.chat, 'Tunggu Sayang!', 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: `https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ`,
    mediaType: 2,
    description: `Subscribe Channel YT Ku Kak>_<`, 
    title: run,
    body: wm, //`${fileSizeH}`,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: `https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ`
     }}
  })
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.sendButtonVid(m.chat, json.result.nowm, txt, wm, `Audio`, `.tiktokaudio ${args[0]}`, m)
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tt|tiktok)nowm(dl)?(download(er)?)?$/i

handler.premium = true

module.exports = handler
