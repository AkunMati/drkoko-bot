let img = 'https://telegra.ph/file/6433c5e9e7710aeeffeb5.jpg'

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, img, `
╭─「 Donasi • Dana 」
│ • MyXL [087832147584]
│ • Gopay  [087832147584]
│ • Dana  [087832147584]
│ • Saweria  [https://saweria.co/kokopangeran]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6283863727744
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, '👦KOKO', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
