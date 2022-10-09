//import { sticker } from '../lib/sticker.js'
//import fs from 'fs'
//import path from 'path'
//import fetch from 'node-fetch'
let { sticker } = require('../lib/sticker.js')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
global.fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}

//m.reply(`Wait ${command} sedang proses🐦`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`https://telegra.ph/file/d34b2ab2cb233c749776c.png`), global.packname, global.author)
 conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: data.sc,
    mediaType: 2,
    description: '©ᵈʳкσкσ-ᴍᴅ 𝑿 ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ', 
    title: `${command} Sedang Di Proses`,
    body: run,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: data.sc
     }}
  })
  
let audio = `https://raw.githubusercontent.com/WH-MODS-BOT/Soundskane/master/${command}.mp3`

await conn.sendFile(m.chat, audio, 'error.mp3', null, fkontak, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'http://instagram.com/kokopangeran_',
    mediaType: 2, 
    description: 'http://instagram.com/kokopangeran_',
    title: "Now Playing...",
    body: wm,
    thumbnail: await (await fetch('https://ibb.co/X5P52fM')).buffer(),
    sourceUrl: 'http://instagram.com/kokopangeran_'
 	  }
     }
    })
}

handler.command = /^(mangkane1|mangkane2|mangkane3|mangkane4|mangkane5|mangkane6|mangkane7|mangkane8|mangkane9|mangkane10|mangkane11|mangkane12|mangkane13|mangkane14|mangkane15|mangkane16|mangkane17|mangkane18|mangkane19|mangkane20|mangkane21|mangkane22|mangkane23|mangkane24)$/i

handler.limit = true

module.exports = handler
