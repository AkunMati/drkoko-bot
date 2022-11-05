let handler = async (m, { conn, text, usedPrefix, command }) => {
    conn.menfess = conn.menfess ? conn.menfess : {}
    if (!text) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    let [jid, name, pesan] = text.split('|');
    if ((!jid || !name || !pesan)) throw `*Cara penggunaan :*\n\n${usedPrefix + command} nomor|nama pengirim|pesan\n\n*Note:* nama pengirim boleh nama samaran atau anonymous.\n\n*Contoh:* ${usedPrefix + command} ${m.sender.split`@`[0]}|Anonymous|Hai.`;
    jid = jid.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    let data = (await conn.onWhatsApp(jid))[0] || {};
    if (!data.exists) throw 'Nomer tidak terdaftar di whatsapp.';
    if (jid == m.sender) throw 'tidak bisa mengirim pesan menfess ke diri sendiri.'
    let mf = Object.values(conn.menfess).find(mf => mf.status === true)
    if (mf) return !0
    try {
    	let id = + new Date
        let tek = `Hai @${data.jid.split('@')[0]}, Kamu Menerima Pesan _*Menfess*_ Nih.\n\nDari: *${name}*\nPesan: \n${pesan}\n\nMau Balas Pesan Ini Kak? Bisa Kok Kak. Tinggal Ketik Pesan Kakak Lalu Kirim, Nanti Saya Sampaikan Ke *${name}*.`.trim();
        let imgr = flaaa.getRandom()
        await conn.sendButton(data.jid, run, tek, `${imgr + 'MENFESS'}`, [['BALAS PESAN', '.balasmenfess']], fake)
        .then(() => {
            m.reply('Berhasil Mengirim Pesan Menfess.')
            conn.menfess[id] = {
                id,
                dari: m.sender,
                nama: name,
                penerima: data.jid,
                pesan: pesan,
                status: false
            }
            return !0
        })
    } catch (e) {
        console.log(e)
        m.reply('eror');
    }
}
handler.tags = ['main']
handler.help = ['menfess', 'menfes'].map(v => v + ' <nomor|nama pengirim|pesan>')
handler.command = /^(menfess|menfes)$/i
handler.private = true

module.exports = handler

/* Made By MendingTuru (Koko Pangeran)
 * https://github.com/MendingTuru
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6283863727744
*/
