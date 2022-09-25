let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─•·–––『 *BIODATA KOKO* 』–––·•
│ ❑ *Nama* : ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×
│ ❑ *Umur* : 20 Tahun
│ ❑ *Kelas* : Lulus
│ ❑ *Ulang Tahun* : 21 Februari 2002
│ ❑ *Alamat* : JawaBarat, Jakarta, Depok2
│ ❑ *Status* : Selalu Di Jadikan Pelampiasan Wanita
│ ❑ *WhatsApp* : wa.me/6287740530274
│ ❑ *Instagram* : https://instagram.com/kokopangeran_
│ ❑ *YouTube* : https://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ
│ ❑ *GroupBot* : https://chat.whatsapp.com/JOTpyCQIWcC6wr17Ki7L0n
╰─•·–––『 *BIODATA KOKO* 』–––·•
`.trim(), m)
}

handler.help = ['biodata']
handler.tags = ['main', 'utama']
handler.command = /^(biodata)$/i

handler.exp = 100

module.exports = handler
