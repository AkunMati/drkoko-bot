const { createRequire } = require("module")
const fs = require('fs')
const jimp_1 = require('jimp')

let handler = async (m, { conn, command, usedPrefix, participants }) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			let media = await q.download()
			let pporang = m.sender
			let { img } = await this.profilePictureUrl(media)
			await conn.query({
				tag: 'iq',
				attrs: {
					to: pporang,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			m.reply(`Sukses Mengganti Pepe Full Anda`)
		} catch (e) {
			console.log(e)
			m.reply(`Terjadi kesalahan, coba lagi nanti.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}

handler.help = ['setppsayafull']
handler.tags = ['main']
handler.command = /^(setppsayafull)$/i
handler.owner = false
handler.botAdmin = false
handler.admin = false
handler.premium = true
module.exports = handler

async function profilePictureUrl(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
