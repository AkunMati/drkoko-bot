const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, name, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .menfess nomor|name|pesan untuknya\nContoh : .menfess 628xxxxxxxxxx|Jessica|Hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6287832147584?text=.menfess 6287740530274|Jessica|Hi Pangeran Hehehe 🌹', body: 'KokoMD By Pangeran', thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),}}})
    if (!name) return conn.reply(m.chat, 'Silahkan masukan namamu', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6287832147584?text=.menfess 6287740530274|Jessica|Hi Pangeran Hehehe 🌹', body: 'KokoMD By Pangeran', thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6287832147584?text=.menfess 6287740530274|Jessica|Hi Pangeran Hehehe 🌹', body: 'KokoMD By Pangeran', thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),}}})
    if (text > 900) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6287832147584?text=.menfess 6287740530274|Jessica|Hi Pangeran Hehehe 🌹', body: 'KokkMD By Pangeran', thumbnail: await (await fetch('https://telegra.ph/file/0f9e2cc2de5389f9d80e2.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
⬡──⬡─────────⬡──⬡
👤 Nama : ${name}
💌 Pesan : ${pesan}
⬡──⬡─────────⬡──⬡
Maaf Anda Belum Bisa Membalas ke Pengirim`

let koko = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .menfess nomor|name|pesan untuknya
Contoh: #menfess 628xxxxxxxxxx|Jessica|hai owner`

    conn.send2ButtonImg(chat + '@s.whatsapp.net', await(await fetch('https://telegra.ph/file/aa06b2e4067f6a6387b75.jpg')).buffer(), chat1, koko, '🎭Sewa🎭', '.sewabot', '💌Balas Pesan💌', 'Balas Pesan', m)
    
    let logs = `BOT AKAN BLOKIR KONTAKMU?
    
≫ Spam
≫ Chat Aneh Aneh
≫ Berantem`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}
⬡──⬡─────────⬡──⬡
Nama Seseorang : ${name}
Isi Pesan : ${pesan}
⬡──⬡─────────⬡──⬡`
    conn.sendButtonImg(m.chat, await (await fetch('https://telegra.ph/file/9ceda8d2274e97bad5bca.jpg')).buffer(), logs, haori1, 'Terimakasih Ganteng:v', 'terimakasih', m)
}
handler.help = ['menfess <nomor|name|pesan>']
handler.tags = ['main']
handler.command = /^(menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
