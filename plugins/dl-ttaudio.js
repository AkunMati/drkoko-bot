let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let bear = `9b95802c6f20`
  if (!args[0]) throw 'Uhm...url nya mana?'
 let chat = global.db.data.chats[m.chat]
await conn.reply(m.chat, data.wait, 0, {
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
    let url = await fetch(`https://zenzapis.xyz/downloader/musically?apikey=${bear}&url=${args[0]}`)
  let json = await url.json()
    if (url.status !== 200) throw await url.text()
    if (!json.status) throw json
let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
    await conn.sendFile(m.chat, json.result.audio, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *YOUTUBE MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
   document: { url: `https://zenzapis.xyz/downloader/musically?apikey=${bear}&url=${args[0]}`}, mimetype: 'audio/mpeg', fileName: 'tiktok.mp3', conntextInfo: {
        externalAdReply: {
            title: `▶︎━━━━━━━•──────────────────`, 
            body: `Subscribe Channel YT Ku Kak>_<`,
            description: `Now Playing...`,
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/700df524f39be728c8882.jpg')).buffer(),
         mediaUrl: `https://youtu.be/E1nLzgkOH8A`
        }
     }
  })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

module.exports = handler
