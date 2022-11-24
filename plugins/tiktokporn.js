//by AsuKidal

let fetch = require('node-fetch')

let fs = require('fs')

let { porno } = require('../lib/scrape')

let handler = async(m, { conn, usedPrefix, text, command }) => {

  let json = await fetch('../lib/scrape').porno('')

  conn.sendButtonVid(m.chat, json.video, `Title : ${json.title}\nDesc : ${json.desc}`, `${json.upload}`, `Next`, `${ usedPrefix + command }`, fkontak)

}

handler.command = /^tiktokporn$/i

handler.register = true

handler.premium = true

handler.limit = true

module.exports = handler
