let handler = m => m

const delay = time => new Promise(res => setTimeout(res, time))
handler.before = async function (m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	if ((m.text === 'Mau Balas?Ketik teks nya!' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan kirim pesan balasan kamu.");
	let txt = `Hai kak @${mf.dari.split('@')[0]}, kamu menerima balasan nih.\n\nPesan yang kamu kirim sebelumnya:\n${mf.pesan}\n\nPesan balasannya:\n${m.text}\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('Berhasil Mengirim balasan.')
		delay(2000)
		delete this.menfess[mf.id]
		return !0
	})
}

module.exports = handler
