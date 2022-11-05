let handler = m => m
const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	console.log({ text: m.text, type: m.quoted?.mtype })
	if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("Silahkan Kirim Pesan Balasan Kamu.\nKetik Pesan Sesuatu Lalu Kirim, Maka Pesan Otomatis Masuk Ke Target Balas Pesan.");
	else {
		let imgr = flaaa.getRandom()
		let txt = `Hai kak @${mf.dari.split('@')[0]}, Kamu Menerima Balasan Nih.\n\nPesan Yang Kamu Kirim Sebelumnya:\n${mf.pesan}\n\nPesan Balasannya:\n${m.text}\n`.trim();
		await this.sendButton(mf.dari, bottime, txt, `${imgr + 'MENFESS BALASAN'}`, [['BALAS PESAN', '.balasmenfess']], null).then(() => {
			m.reply('Berhasil Mengirim Balasan.')
			delay(1500)
			delete this.menfess[mf.id]
			return !0
		})
	}
	return !0
}

module.exports = handler

/* Made By MendingTuru (Koko Pangeran)
 * https://github.com/MendingTuru
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6283863727744
*/
