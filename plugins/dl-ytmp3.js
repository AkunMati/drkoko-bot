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
}*/

let limit = 10
let fetch = require('node-fetch')
const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  m.react('⏱️')
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let audio, source, res, link, lastError, isLimit
  for (let i in _audio) {
    try {
      audio = _audio[i]
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isY && !isLimit) await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', `
*${htki} YOUTUBE ${htka}*
*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}
*L O A D I N G. . .*
`.trim(), m)
  if (!isLimit) await conn.sendFile(m.chat, source, title + '.mp3', `
*${htki} YOUTUBE ${htka}*
*${htjava} Title:* ${title}
*${htjava} Type:* mp3
*${htjava} Filesize:* ${audio.fileSizeH}
*L O A D I N G. . .*
`.trim(), m, null, {
    asDocument: chat.useDocument
  })
}

handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i
handler.limit = true
handler.premium = true

module.exports = handler

/*async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://is.gd/create.php?format=simple&url=${url}`)
  if (!res.ok) throw false
  return await res.text()
}*/
