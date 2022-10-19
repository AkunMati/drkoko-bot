const { promises } = require('fs')
const { join } = require('path')
const { xpRange } = require('../lib/levelling.js')
const moment = require('moment-timezone')
let os = require('os')
let fs = require('fs')
const fetch = require('node-fetch')
const { createHash } = require('crypto')

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')
 await conn.sendButt(m.chat, `*SN:* ${sn}\n`, wm + '\n\n' + titlebot, serialimg, [['THANKS','Ok'],['SALIN SN','.sn']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: sig,
                        mediaType: 2,
                        description: 'anu',
                        title: 'CEK SN',
                        body: hiasan,          previewType: 0,
                        sourceUrl: sig
                      }}
})
}

handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
module.exports = handler
