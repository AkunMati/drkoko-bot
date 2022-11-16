let handler = async function (m, { conn, text, args, usedPrefix, command }) {
  let norek = conn.pickRandom(require('../src/norek.json'))
  let user = global.db.data.users[m.sender]
  
  if (user.bca === true) throw `Kamu sudah terdaftar di database bca`
  if (!args[0]) throw `Pengunaan salah contoh ${usedPrefix}setakun nama|password|pin`
  
  let urut = text.split`|`

  let text1 = urut[0]

  let text2 = urut[1]
  
  let text3 = urut[2]
  
  if (!text1) throw `Pengunaan salah contoh ${usedPrefix}setakun nama|password|pin`
  if (!text2) throw `Pengunaan salah contoh ${usedPrefix}setakun nama|password|pin`
  if (!text3) throw `Pengunaan salah contoh ${usedPrefix}setakun nama|password|pin`

  user.bca = true
  user.bcapw = text2
  user.bcaname = text1
  user.bcanorek = norek
  user.bcapin = text3

  conn.sendButton(m.chat, `
┌─「 *daftar berhasil* 」
├ Nama BCA: ${text1}
├ Password BCA: ${text2}
├ Pin BCA: ${text3}
└────  
`.trim(), wm, `Cek ATM`, `/cekakun`, m) 
await conn.reply(m.chat, 'Selamat Kamu Mendapatkan 5K Saldo Gratis, Karena Sudah Mendaftar Sebagai Pengguna Bank Di ᵈʳкσкσ-ᴍᴅ×፝֟͜×!!', fkontak)
    global.db.data.users[m.sender]. saldo += 5000
}

handler.help = ['setakun'].map(v => v + ' <nama>|<password>')
handler.tags = ['bca']
handler.command = /^(setakun|daftarbca)$/i

module.exports = handler
