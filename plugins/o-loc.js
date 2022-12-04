let fetch = require('node-fetch')
const { generateWAMessageFromContent } = require('@adiwajshing/baileys')

let handler  = async (m, { conn }) => {

 let pp = 'https://telegra.ph/file/700df524f39be728c8882.jpgg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: `ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×`,
  address: wm,
  url: `https://github.com/MendingTuru`,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: fpay })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ["loc1"]
handler.tags = ["owner"]
handler.command = /^loc1$/
handler.owner = true
module.exports = handler
