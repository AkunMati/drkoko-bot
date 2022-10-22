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
	    {title: "👦Random Tahun", rowId: '.daftarco ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " O L D " + htka,
	rows: [
	    {title: "👦30 Tahun", rowId: '.daftarco ' + namae + '.30 '},
	    {title: "👦29 Tahun", rowId: '.daftarco ' + namae + '.29 '},
	    {title: "👦28 Tahun", rowId: '.daftarco ' + namae + '.28 '},
	{title: "👦27 Tahun", rowId: '.daftarco ' + namae + '.27 '},
	{title: "👦26 Tahun", rowId: '.daftarco ' + namae + '.26 '},
	{title: "👦25 Tahun", rowId: '.daftarco ' + namae + '.25 '},
	{title: "👦24 Tahun", rowId: '.daftarco ' + namae + '.24 '},
	{title: "👦23 Tahun", rowId: '.daftarco ' + namae + '.23 '},
	{title: "👦22 Tahun", rowId: '.daftarco ' + namae + '.22 '},
	{title: "👦21 Tahun", rowId: '.daftarco ' + namae + '.21 '}
	]
    },
    {
	title: htki + " Y O U N G " + htka,
	rows: [
	    {title: "👦20 Tahun", rowId: '.daftarco ' + namae + '.20 '},
	    {title: "👦19 Tahun", rowId: '.daftarco ' + namae + '.19 '},
	    {title: "👦18 Tahun", rowId: '.daftarco ' + namae + '.18 '},
	{title: "👦17 Tahun", rowId: '.daftarco ' + namae + '.17 '},
	{title: "👦16 Tahun", rowId: '.daftarco ' + namae + '.16 '},
	{title: "👦15 Tahun", rowId: '.daftarco ' + namae + '.15 '},
	{title: "👦14 Tahun", rowId: '.daftarco ' + namae + '.14 '},
	{title: "👦13 Tahun", rowId: '.daftarco ' + namae + '.13 '},
	{title: "👦12 Tahun", rowId: '.daftarco ' + namae + '.12 '},
	{title: "👦11 Tahun", rowId: '.daftarco ' + namae + '.11 '},
	{title: "👦10 Tahun", rowId: '.daftarco ' + namae + '.10 '},
	{title: "👦9 Tahun", rowId: '.daftarco ' + namae + '.9 '}
	]
    },
]
  
 const listMessage = { 
   text: `┏━━━〔 ıll 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 llı 〕━━㉿
⬡ 👦Hallo ${conn.getName(m.sender)} 👋
⬡ 👦Sebelum Melihat Fitur Bot, Lebih Baik _*Verify*_ Dulu
⬡ 👦Kalau Tidak Kelihatan Button nya, Contohnya Dibawah!
┗━━━━━━━━━━━━━━━━━━㉿
┏━━〔 ıll CONTOH llı 〕━㉿
⬡ #daftar namamu.umurmu
⬡ #daftar ${conn.getName(m.sender)}.17
┗━━━━━━━━━━㉿ 
⫹⫺ 
⫹⫺`, 
   footer: `*┗ ©ᵈʳкσкσ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×*`, 
   title: "", 
   buttonText: "CLICK HERE!", 
   sections 
 } 
  
   let user = global.db.data.users[m.sender] 
   if (user.registered === true) throw `Kamu Sudah Terdaftar Di Database, Apakah Mau Unreg? Ketik *#unreg*` 
   if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m }) 
   let [_, name, splitter, age] = text.match(Reg) 
   if (!name) throw 'Nama Tidak Boleh Kosong (Alphanumeric)' 
   if (!age) throw 'Umur tidak Boleh Kosong (Angka)' 
   age = parseInt(age) 
   if (age > 30) throw 'WOI TUA LU OM (。-`ω´-)' 
   if (age < 8) throw 'Halah Dasar Lu Om Bocil Epep' 
   user.name = name.trim() 
   user.age = age 
   user.regTime = + new Date 
   user.registered = true
   let prefix = usedPrefix 
   let sn = createHash('md5').update(m.sender).digest('hex') 
   let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender 
   conn.sendButt(m.chat, ` 
 ╭━━━━「 *BERHASIL* 」
 ❖ Terima Kasih ${name} Sudah Mendaftar
Di Database Kami
 ❖ © ᵈʳкσкσ-ᴍᴅ×፝֟͜× || ALL RESERVED

 ╭━━━━「 *DATA COWO* 」
 ┊➥👦 *SUCCES ☑️* 】STATUS
 ┊➥👦 *${name}* 】NAME
 ┊➥👦 *${age}* 】AGE                                          
 ╰═┅═━––––––๑

*SYARAT*
➥ Gunakan ᵈʳкσкσ-ᴍᴅ×፝֟͜× Ini Dengan Bijak
➥ Dilarang Menelepon ᵈʳкσкσ-ᴍᴅ×፝֟͜× Ini
➥ Dilarang Spam Button/Chat
➥ Dilarang Toxic

_*Jika Owner Mengetahui Hal Di Atas, Maka Tidak Segan² Nomor Akan Di Banned!*_

*SN* (Serial Number) Di Kirim Di Chat Pribadi Dan Digunakan Untuk Daftar Ulang, Jika Lupa *SN* Silahkan Ketik *${usedPrefix}sn* Untuk Mengecek *SN* Kamu! 
`.trim(), wm, `${imgr + 'SUCCES'}`, [['✔️MENU','.menu'],['SEWA💰','.sewain']], m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, { quoted:fpay}, m)
//conn.sendMessage(m.chat, buttonMessage, { quoted:fpay}) 
} 
handler.help = ['daftarco', 'verifyco'].map(v => v + ' <nama>.<umur>') 
handler.tags = ['xp'] 
handler.command = /^(daftarco|verifyco)$/i 

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
