//import fetch from 'node-fetch'
//import yts from 'yt-search'
let fetch = require('node-fetch')
let yts = require('yt-search')
let handler = async (m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
if (!text) throw `Example : ${usedPrefix + command} Koko Pangeran`
m.react('⏱️')
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `${usedPrefix} yta ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `${usedPrefix} ytv ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: wm,
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(y((outube|((utu|t)b|t))play|tp)|play(yt)?)$/i

handler.exp = 0
handler.limit = false

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
