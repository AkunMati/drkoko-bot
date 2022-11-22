let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text, command, usedPrefix }) => {
const frep = { contextInfo: { externalAdReply: {title: global.wm, body: 'Simple Bot Esm', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')}}}
const fdoc = {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${command}`}}}}

if (command == 'dec32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&decode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButt(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc32 ${text}`]
    ], m, fdoc)
}

if (command == 'enc32') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base32&encode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButt(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec32 ${text}`]
    ], m, fdoc)
}

if (command == 'dec64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&decode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.enc}\nString: ${data.result.string}
    `.trim()
        await conn.sendButt(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}enc64 ${text}`]
    ], m, fdoc)
}

if (command == 'enc64') {
if (!text) throw `Contoh penggunaan ${usedPrefix}${command} anjing`
    let res = await fetch(`https://yog-apikey.herokuapp.com/api/base?apikey=YogGanz&type=base64&encode=${text}`)
    let data = await res.json()
    
    let caption = `Enc: ${data.result.encode}\nString: ${data.result.string}
    `.trim()
        await conn.sendButt(m.chat, caption, author, null, [
        ['Next', `${usedPrefix}dec64 ${text}`]
    ], m, fdoc)
  }
}
handler.help = ['enc32', 'dec32', 'enc64', 'dec64']
handler.tags = ['tools']
handler.command = /^(enc32|dec32|enc64|dec64)$/i

module.exports = handler
