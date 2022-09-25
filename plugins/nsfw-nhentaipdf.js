let fetch = require('node-fetch')
let { extractImageThumb } = require('@adiwajshing/baileys')

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw 'Input code' 
	await m.reply('_In progress, please wait..._')
	let res = await fetch('https://mxmxk.herokuapp.com/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let v = await fetch('https://mxmxk.herokuapp.com/nhentai/' + code)
	let json2 = await v.json()
	let buffer = await (await fetch(json.result.images.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: json2.result }, jpegThumbnail, fileName: json.result.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = handler.alias = ['nhpdf']
handler.tags = ['nsfw']
handler.command = /^(nhpdf)$/i
handler.limit = true
handler.nsfw = true
handler.register = true
module.exports = handler
