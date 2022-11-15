let fetch = require('node-fetch')
const { savefrom, youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x) {
	let l = 0, n = parseInt(x, 10) || 0;
	while(n >= 1024 && ++l){
		n = n/1024;
	}
	return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Invalid Youtube URL.`)
        let fimg
        let fimgb
	let za = command.includes('480') ? '480' : command.includes('720') ? '720' : '1080'
	try {
		const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
		let video, source, res, link, lastError
		video = _video[`${za}p`]
		if (video.fileSize > 200000) return m.reply(`Filesize: ${video.fileSizeH}\nTidak dapat mengirim, maksimal file 200 MB`)
		link = await video.download()
		if (link) res = await fetch(link)
		if (res) source = await res.arrayBuffer()
		let ini_txt = `*${title}*\n\n`
		ini_txt += `⭔ Watch : ${text}\n`
		ini_txt += `⭔ Resolution : ${video.quality}\n`
		ini_txt += `⭔ Size : ${video.fileSizeH}`
		fimg = await fetch(link)
		fimgb = Buffer.from(await fimg.arrayBuffer())
		if (Buffer.byteLength(fimgb) < 22000) throw new e()
		await conn.sendMessage(m.chat, { video: fimgb, caption: ini_txt }, { quoted: fkontak2 })
	} catch (e) {
		try {
			let anu = await savefrom(text)
			var x = anu.url.findIndex(y => y.quality ===za && y.ext==="mp4")
			if (anu.url[x].filesize > 209715200) return m.reply(`Filesize: ${niceBytes(anu.url[x].filesize)}\nTidak dapat mengirim, maksimal file 200 MB`)
			fimg = await fetch(anu.url[x].url)
			fimgb = Buffer.from(await fimg.arrayBuffer())
			if (Buffer.byteLength(fimgb) < 22000) throw new e()
			let ini_txt = `*${anu.meta.title}*\n\n`
			ini_txt += `⭔ Watch : ${anu.meta.source}\n`
			ini_txt += `⭔ Resolution : ${anu.url[x].quality}p\n`
			ini_txt += `⭔ Size : ${niceBytes(anu.url[x].filesize)}`
			await conn.sendMessage(m.chat, { video: fimgb, caption: ini_txt }, { quoted: fkontak2 })
		} catch (e) {
			m.reply(`[!] ${za}p tidak tersedia / terjadi kesalahan.`)
		}
	}
}

handler.help = ['ytvideo480','ytvideo720','ytvideo1080'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(yt(v(ideo)?|mp4)(480|720|1080)p?)$/i

handler.premium = true
handler.limit = true

module.exports = handler
