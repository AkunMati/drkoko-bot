const { createHash } = require('crypto')
const fetch = require('node-fetch')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {	
let imgr = flaaa.getRandom()
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: htjava + "Select Your Age Here !" + htjava,
	rows: [
	    {title: "👧Random Tahun", rowId: '.daftarce ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " O L D " + htka,
	rows: [
	    {title: "👧30 Tahun", rowId: '.daftarce ' + namae + '.30 '},
	    {title: "👧29 Tahun", rowId: '.daftarce ' + namae + '.29 '},
	    {title: "👧28 Tahun", rowId: '.daftarce ' + namae + '.28 '},
	{title: "👧27 Tahun", rowId: '.daftarce ' + namae + '.27 '},
	{title: "👧26 Tahun", rowId: '.daftarce ' + namae + '.26 '},
	{title: "👧25 Tahun", rowId: '.daftarce ' + namae + '.25 '},
	{title: "👧24 Tahun", rowId: '.daftarce ' + namae + '.24 '},
	{title: "👧23 Tahun", rowId: '.daftarce ' + namae + '.23 '},
	{title: "👧22 Tahun", rowId: '.daftarce ' + namae + '.22 '},
	{title: "👧21 Tahun", rowId: '.daftarce ' + namae + '.21 '}
	]
    },
    {
	title: htki + " Y O U N G " + htka,
	rows: [
	    {title: "👧20 Tahun", rowId: '.daftarce ' + namae + '.20 '},
	    {title: "👧19 Tahun", rowId: '.daftarce ' + namae + '.19 '},
	    {title: "👧18 Tahun", rowId: '.daftarce ' + namae + '.18 '},
	{title: "👧17 Tahun", rowId: '.daftarce ' + namae + '.17 '},
	{title: "👧16 Tahun", rowId: '.daftarce ' + namae + '.16 '},
	{title: "👧15 Tahun", rowId: '.daftarce ' + namae + '.15 '},
	{title: "👧14 Tahun", rowId: '.daftarce ' + namae + '.14 '},
	{title: "👧13 Tahun", rowId: '.daftarce ' + namae + '.13 '},
	{title: "👧12 Tahun", rowId: '.daftarce ' + namae + '.12 '},
	{title: "👧11 Tahun", rowId: '.daftarce ' + namae + '.11 '},
	{title: "👧10 Tahun", rowId: '.daftarce ' + namae + '.10 '},
	{title: "👧9 Tahun", rowId: '.daftarce ' + namae + '.9 '}
	]
    },
]
  
 const listMessage = { 
   text: `┏━━━〔 ıll 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 llı 〕━━㉿
⬡ 👧Hallo ${conn.getName(m.sender)} 👋
⬡ 👧Sebelum Melihat Fitur ᵈʳкσкσ-ᴍᴅ×፝֟͜×, Lebih Baik _*Verify*_ Dulu.
⬡ 👧Kalau Tidak Kelihatan Button nya, Contohnya Dibawah!.
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll CONTOH llı 〕━㉿
⬡ #daftar namamu.umurmu
⬡ #daftar ${conn.getName(m.sender)}.17
┗━━━━━━━━━━㉿ 
⫹⫺ 
⫹⫺`, 
   footer: `*┗ ©ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜× × Qᴜᴇᴇ፝֟፝֟ɴ×፝֟͜×*`, 
   title: "", 
   buttonText: "CLICK HERE!", 
   sections 
 } 
  
   let user = global.db.data.users[m.sender] 
   if (user.registered === true) throw `Kamu sudah ter daftar di Database, Apakah mau unreg? ketik *#unreg*` 
   if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m }) 
   let [_, name, splitter, age] = text.match(Reg) 
   if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)' 
   if (!age) throw 'Umur tidak boleh kosong (Angka)' 
   age = parseInt(age) 
   if (age > 30) throw 'WOI TUA LU TANTE (。-`ω´-)' 
   if (age < 8) throw 'Halah Dasar Lu Tante Bocil Epep' 
   user.name = name.trim() 
   user.age = age 
   user.regTime = + new Date 
   user.registered = true
   let prefix = usedPrefix 
   let sn = createHash('md5').update(m.sender).digest('hex') 
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender 
   conn.sendButt(m.chat, ` 
 ╭━━━━「 *BERHASIL* 」
 ❖ Terima kasih ${name} Sudah Mendaftar
Di Database Kami
 ❖ © ᵈʳкσкσ-ᴍᴅ×፝֟͜× || ALL RESERVED

 ╭━━━━「 *DATA CEWE* 」
 ┊➥👧 *SUCCES ☑️* 】STATUS
 ┊➥👧 *${name}* 】NAME
 ┊➥👧 *${age}* 】AGE                                          
 ╰═┅═━––––––๑

*SYARAT*
➥ Gunakan ᵈʳкσкσ-ᴍᴅ×፝֟͜× Ini Dengan Bijak.
➥ Dilarang Menelepon ᵈʳкσкσ-ᴍᴅ×፝֟͜× Ini.
➥ Dilarang Spam Button/Chat.
➥ Dilarang Toxic.

_*Jika Owner Mengetahui Hal Di Atas, Maka Tidak Segan² Nomor Akan Di Banned!*_

*SN* (Serial Number) Di Kirim Di Chat Pribadi Dan Digunakan Untuk Daftar Ulang, Jika Lupa *SN* Silahkan Ketik *${usedPrefix}sn* Untuk Mengecek *SN* Kamu! 
`.trim(), wm, `${imgr + 'SUCCES'}`, [['✔️MENU','.menu'],['SEWA💰','.sewain']], m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, { quoted:fpay}, m)
//conn.sendMessage(m.chat, buttonMessage, { quoted:fpay}) 
} 
handler.help = ['daftarce', 'verifyce'].map(v => v + ' <nama>.<umur>') 
handler.tags = ['xp'] 
handler.command = /^(daftarce|verifyce)$/i 

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
