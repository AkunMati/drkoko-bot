const kontol = "https://telegra.ph/file/6433c5e9e7710aeeffeb5.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, kontol, `
Silahkan scan barcode di atas untuk melakukan transaksi, wajin menyertakan bukti transfer
`.trim(), wm, 'Owner', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.command = /^(bayar)$/i
module.exports = handler
