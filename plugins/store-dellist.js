let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `gunakan *${usedPrefix}liststore* untuk melihat daftar pesan yg tersimpan.`
	let msgs = db.data.msgs
	if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan.`
	delete msgs[text]
	m.reply(`\n  [💬] berhasil menghapus pesan di daftar List dengan nama '${text}'.\n`)
}
handler.help = ['store'].map(v => 'del' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^delstore$/i
handler.group = true
handler.admin = true
module.exports = handler
