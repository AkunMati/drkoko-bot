const fetch = require('node-fetch')
let axios = require('axios')
let fs = require('fs')
const moment = require('moment-timezone')

let handler = async (m, { conn, args }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date('Februari 21 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  if (!args[0]) throw 'Uhm...url nya mana?'
 m.react('⏱️')
  let chat = global.db.data.chats[m.chat]
  m.reply(wait)
  await conn.reply(m.chat, `Lain Kali Download Sendiri`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ',
        mediaType: 2,
        description: sgc,
        title: wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ',
        thumbnail: fs.readFileSync('./thumbnail.jpg')
      }
    }
  })
  let bear = '9b95802c6f20'
  let bearr = 'danzz'
  let url = await fetch(`https://saipulanuar.ga/api/download/tiktok?apikey=${bear}&url=${args[0]}`)
  let json = await url.json()
    if (url.status !== 200) throw await url.text()
    if (!json.status) throw json
  let txt = `🚀 *Link:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  await conn.sendFile(m.chat, json.result.audio, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *TIKTOK MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul:* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ',
                        mediaType: 2,
                        description: 'anu',
                        title: `💌 Ultah Koko : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Subscribe My Channel`,                                       previewType: 0,
                        thumbnail: await (await fetch(`https://telegra.ph/file/63d157733afce65388504.jpg`)).buffer(),
                        sourceUrl: 'https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ'
            }
        }
    })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
