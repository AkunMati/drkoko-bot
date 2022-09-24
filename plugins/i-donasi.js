let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Dana 」
│ • MyXL [087832147584]
│ • Gopay  [087832147584]
│ • Dana  [087832147584]
│ • Saweria  [https://saweria.co/kokopangeran]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6287740530274
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
