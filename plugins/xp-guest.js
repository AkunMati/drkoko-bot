const { promises } = require('fs')
const { join } = require('path')
const { xpRange } = require('../lib/levelling.js')
const moment = require('moment-timezone')
let os = require('os')
let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ \n`,acguest + '\n\n' + titlebot, guest, [['👤GUEST','.daftar playerXD_accses.0']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: data.linkig,
                        mediaType: 2,
                        description: 'nothing',
                        title: run,
                        body: wm,          previewType: 0,
                        sourceUrl: data.linkig
                      }}
})
}

handler.command = /^abaikan$/i
module.exports = handler
