let limit = 10
let fetch = require('node-fetch')
/*let handler = async(m, { conn, args, isPrems, isOwner }) => {
    if (!args || !args[0]) return conn.reply(m.chat, 'Uhm... urlnya mana?', m)
    let chat = db.data.chats[m.chat]
    let server = (args[1] || servers[0]).toLowerCase()
    let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
    let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
    conn.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : data.wait, m)
    let _thumb = {}
    try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
    m.reply(data.wait)
    if (!isLimit) await conn.sendButtonVid(m.chat, dl_link, `*Title:* ${title}\n*Filesize:* ${filesizeF}`.trim(), wm, 'Audio', `.yta ${args}`, m, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: data.deslink , 
    title: run,
    body: wm,
    thumbnail: bg,
    sourceUrl: data.sc
     }}
  })
}*/
/*[download via module di atas]*/
let { youtubeSearch } = require ('@bochilteam/scraper')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm... urlnya mana?'
  m.react('⏱️')
  m.reply('_Sedang Diproses..._')
  let vid = (await youtubeSearch(text)).video[0]
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://botcahx2.ddns.net/?url=${url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
  conn.sendMessage(m.chat, { video: { url: ytLink }, mimetype: 'video/mp4' }, { quoted: m })
}
/*[supaya suport Railway jadi make module lain]*/
handler.help = ['ytmp4 <query>']
handler.tags = ['downloader']
handler.command = /^yt(v(idi?e?o)?|mp4)?$/i
handler.limit = true
handler.premium = true
module.exports = handler





/*let limit = 10
let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (args && /(?:https?:\/{2})?(?:w{3}|m|music)?\.?youtu(?:be)?\.(?:com|be)(?:watch\?v=|\/)([^\s&]+)/i.test(args[0])) {
    let opt = args[1] && args[1].isNumber() ? args[1].replace(/\D/g, '') : ''
    let res = await fetch(`https://yt-downloader.akkun3704.repl.co/yt?url=${args[0]}`)
    res = await res.json()
    if (!res) res = ''
    let { description, ownerChannelName, viewCount, uploadDate, likes, dislikes } = res.result.videoDetails
    let { thumbnail, video: _video, title } = await youtubedlv2(args[0]).catch(async _ => await youtubedl(args[0])).catch(async _ => await youtubedlv3(args[0]))
    m.react('⏱️')
    await m.reply('_In progress, please wait..._')
    let limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
    let video, quality, link, lastError, isLimit //, source
    for (let i in _video) {
      try {
        video = _video[i]
        quality = video.quality
        console.log(video)
        isLimit = video.fileSize > limitedSize
        if (isLimit && /1080p/.test(quality) || !quality.includes(opt)) continue
        link = await video.download()
        // if (isLimit) return conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: `*Title:* ${title}\n*Link:* ${await shortUrl(link)}\n\n_Filesize too big_` }, { quoted: m })
        if (link) break
        // if (source instanceof ArrayBuffer) break
      } catch (e) {
        video = quality = link = null
        lastError = e
        continue
      }
    }
    if (!link) throw 'Error: ' + (lastError || 'Can\'t download video')
    let _thumb = {}
    try { _thumb = { jpegThumbnail: await (await fetch(thumbnail)).buffer() } }
    catch (e) { }
    await conn.sendMessage(m.chat, { [/^(?:-|--)doc$/i.test(args[1]) || isLimit ? 'document' : 'video']: { url: link }, fileName: `${title}.mp4`, mimetype: 'video/mp4', ..._thumb }, { quoted: m }).then(async (msg) => {
      let caption = `*Title:* ${title}\n*Quality:* ${quality}\n*Channel:* ${ownerChannelName || ''}\n*Views:* ${viewCount}\n*Upload Date:* ${uploadDate}${likes ? `\n*Likes:* ${likes}` : ''}${dislikes ? `\n*Dislikes*: ${dislikes}` : ''}${description ? `\n*Description:*\n${description}` : ''}`.trim()
      await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption }, { quoted: msg })
    })
  } else throw 'Invalid URL'
}
handler.help = ['ytmp4']
handler.tags = ['downloader']
handler.alias = ['yt', 'ytv', 'ytmp4']
handler.command = /^yt(v|mp4)?$/i
handler.limit = true
handler.premium = true

module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}*/
