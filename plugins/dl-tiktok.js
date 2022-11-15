let axios = require('axios')
let handler = async (m, {conn, args, usedPrefix, command }) => {
	if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
        m.react('⏱️')
	if (!args[0].match(/tiktok/gi)) throw `url salah`
	try {
		let a = await axios.get('https://rest-beni.herokuapp.com/api/tiktok?url=' + args[0])
		if (!a.data.result.video_original) {
		await conn.sendFile(m.chat, a.data.result.video, '', '\n\nKOKO PANGERAN', m)
		} else {
		await conn.sendFile(m.chat, a.data.result.video_original, '', '\n\nKOKO PANGERAN', m)
		}
	} catch (e) {
log(e)
		conn.reply(m.chat, "error memek", m)
	}
}
handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i
handler.premium = true
handler.limit = true
module.exports = handler
