let limit = 30
let fetch = require('node-fetch')
/* const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `contoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`
  let chat = db.data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : data.wait)
  if (!isLimit) conn.sendMedia(m.chat, dl_link, m, {
    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: false, contextInfo: {
        externalAdReply: {
            showAdAttribution: true,
            mediaUrl: `${args}`,
            title: `${title}`, 
            body: wm,
            description: wm,
            mediaType: 2,
          thumbnail: await (await fetch(thumb)).buffer(),
         mediaUrl: `${args}`
        }
     }
  })
} */
let fs = require('fs')
let fetch = require ('node-fetch')
let { youtubeSearch } = require ('@bochilteam/scraper')
let handler = async (m, { conn, text, args, isPrems, isOwner, command }) => {
  m.react('⏱️')
  let vid = (await youtubeSearch(text)).video[0]
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://botcahx2.ddns.net/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
handler.limit = true
module.exports = handler


/*let limit = 5
let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (args && /(?:https?:\/{2})?(?:w{3}|m|music)?\.?youtu(?:be)?\.(?:com|be)(?:watch\?v=|\/)([^\s&]+)/i.test(args[0])) {
    let res = await fetch(`https://yt-downloader.akkun3704.repl.co/yt?url=${args[0]}`)
    res = await res.json()
    if (!res) res = ''
    let { description, ownerChannelName, viewCount, uploadDate, likes, dislikes } = res.result.videoDetails
    let { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
    m.react('⏱️')
    await m.reply('_In progress, please wait..._')
    let limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
    let audio, quality, link, lastError, isLimit //,source
    for (let i in _audio) {
      try {
        audio = _audio[i]
        quality = audio.quality
        console.log(audio)
        isLimit = audio.fileSize > limitedSize
        // if (isLimit) return conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: `*Title:* ${title}\n*Link:* ${await shortUrl(`https://yt-downloader.akkun3704.repl.co/?url=${args[0]}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`)}\n\n_Filesize too big_` }, { quoted: m })
        link = await audio.download()
        if (link) break
        // if (link) source = await (await fetch(link)).arrayBuffer()
        // if (source instanceof ArrayBuffer) break
      } catch (e) {
        audio = link = null
        lastError = e
        continue
      }
    }
    if (!link) throw 'Error: ' + (lastError || 'Can\'t download audio')
    await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || isLimit ? 'document' : 'audio']: { url: link }, fileName: `${title}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m }).then(async (msg) => {
      let caption = `*Title:* ${title}\n*Quality:* ${quality}\n*Channel:* ${ownerChannelName || ''}\n*Views:* ${viewCount}\n*Upload Date:* ${uploadDate}${likes ? `\n*Likes:* ${likes}` : ''}${dislikes ? `\n*Dislikes*: ${dislikes}` : ''}${description ? `\n*Description:*\n${description}` : ''}`.trim()
      await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption }, { quoted: msg })
    })
  } else throw 'Invalid URL'
}
handler.help = ['ytmp3']
handler.tags = ['downloader']
handler.alias = ['yta', 'ytmp3']
handler.command = /^yt(a|mp3)$/i
handler.limit = true
handler.premium = true

module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}*/
