let handler = async (m, { conn, text, usedPrefix, command }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    if (!text) throw `Kalo Kamu Nemu Pesan Error, Lapor Pake Perintah ini\n\ncontoh:\n${usedPrefix + command} Selamat Siang Owner, Saya Menemukan Error Seperti Berikut <copy/tag pesan erornya>`
    if (text.length < 1 ) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*ORDER SEWA*\n *ORDER :* ${text}\n* NAME :* @${m.sender.split`@`[0]}`
    conn.reply('6283863727744' + `@s.whatsapp.net`, m.quoted ? teks + m.quoted.text : teks, m, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`✅ Pesan Telah Terkirim Ke Owner!\n_*Menunggu Confirmasi Dari Owner Kak...*_`)
}
handler.command = /^(orsewa)$/i

module.exports = handler
