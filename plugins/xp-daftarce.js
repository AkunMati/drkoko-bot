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
	    {title: "π§Random Tahun", rowId: '.daftarce ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: htki + " O L D " + htka,
	rows: [
	    {title: "π§30 Tahun", rowId: '.daftarce ' + namae + '.30 '},
	    {title: "π§29 Tahun", rowId: '.daftarce ' + namae + '.29 '},
	    {title: "π§28 Tahun", rowId: '.daftarce ' + namae + '.28 '},
	{title: "π§27 Tahun", rowId: '.daftarce ' + namae + '.27 '},
	{title: "π§26 Tahun", rowId: '.daftarce ' + namae + '.26 '},
	{title: "π§25 Tahun", rowId: '.daftarce ' + namae + '.25 '},
	{title: "π§24 Tahun", rowId: '.daftarce ' + namae + '.24 '},
	{title: "π§23 Tahun", rowId: '.daftarce ' + namae + '.23 '},
	{title: "π§22 Tahun", rowId: '.daftarce ' + namae + '.22 '},
	{title: "π§21 Tahun", rowId: '.daftarce ' + namae + '.21 '}
	]
    },
    {
	title: htki + " Y O U N G " + htka,
	rows: [
	    {title: "π§20 Tahun", rowId: '.daftarce ' + namae + '.20 '},
	    {title: "π§19 Tahun", rowId: '.daftarce ' + namae + '.19 '},
	    {title: "π§18 Tahun", rowId: '.daftarce ' + namae + '.18 '},
	{title: "π§17 Tahun", rowId: '.daftarce ' + namae + '.17 '},
	{title: "π§16 Tahun", rowId: '.daftarce ' + namae + '.16 '},
	{title: "π§15 Tahun", rowId: '.daftarce ' + namae + '.15 '},
	{title: "π§14 Tahun", rowId: '.daftarce ' + namae + '.14 '},
	{title: "π§13 Tahun", rowId: '.daftarce ' + namae + '.13 '},
	{title: "π§12 Tahun", rowId: '.daftarce ' + namae + '.12 '},
	{title: "π§11 Tahun", rowId: '.daftarce ' + namae + '.11 '},
	{title: "π§10 Tahun", rowId: '.daftarce ' + namae + '.10 '},
	{title: "π§9 Tahun", rowId: '.daftarce ' + namae + '.9 '}
	]
    },
]
  
 constΒ listMessageΒ =Β { 
 Β Β text:Β `ββββγ Δ±ll ππππππππ llΔ± γββγΏ
β¬‘ π§Hallo ${conn.getName(m.sender)} π
β¬‘ π§Sebelum Melihat Fitur α΅Κ³ΠΊΟΠΊΟ-α΄α΄ΓαΦΝΓ, Lebih Baik _*Verify*_ Dulu.
β¬‘ π§Kalau Tidak Kelihatan Button nya, Contohnya Dibawah!.
βββββββββββββββββββγΏ
βββγ Δ±ll CONTOH llΔ± γβγΏ
β¬‘ #daftarce namamu.umurmu
β¬‘ #daftarce ${conn.getName(m.sender)}.17
βββββββββββγΏ 
β«Ήβ«Ί 
β«Ήβ«Ί`, 
 Β Β footer:Β `*βΒ Β©α΅Κ³ΠΊΟΠΊΟ α΄α΄αΦαΦΙ΄Ι’α΄Κα΄Ι΄ΓαΦΝΓ*`, 
 Β Β title:Β "", 
 Β Β buttonText:Β "CLICK HERE!", 
 Β Β sections 
 } 
  
 Β Β letΒ userΒ =Β global.db.data.users[m.sender] 
 Β Β ifΒ (user.registeredΒ ===Β true)Β throwΒ `Kamu sudah ter daftar di Database, Apakah mau unreg? ketik *#unreg*` 
 Β Β ifΒ (!Reg.test(text))Β returnΒ conn.sendMessage(m.chat,Β listMessage,Β {Β quoted:Β mΒ }) 
 Β Β letΒ [_,Β name,Β splitter,Β age]Β =Β text.match(Reg) 
 Β Β ifΒ (!name)Β throwΒ 'NamaΒ tidakΒ bolehΒ kosongΒ (Alphanumeric)' 
 Β Β ifΒ (!age)Β throwΒ 'UmurΒ tidakΒ bolehΒ kosongΒ (Angka)' 
 Β Β ageΒ =Β parseInt(age) 
 Β Β ifΒ (ageΒ >Β 30)Β throwΒ 'WOIΒ TUA LU TANTEΒ (γ-`ΟΒ΄-)' 
 Β Β ifΒ (ageΒ <Β 8)Β throwΒ 'HalahΒ Dasar Lu TanteΒ Bocil Epep' 
 Β Β user.nameΒ =Β name.trim() 
 Β Β user.ageΒ =Β age 
 Β Β user.regTimeΒ =Β +Β newΒ Date 
 Β Β user.registeredΒ =Β true
   let prefix = usedPrefix 
 Β Β letΒ snΒ =Β createHash('md5').update(m.sender).digest('hex') 
  Β letΒ whoΒ =Β m.mentionedJidΒ &&Β m.mentionedJid[0]Β ?Β m.mentionedJid[0]Β :Β m.quotedΒ ?Β m.quoted.senderΒ :Β m.fromMeΒ ?Β conn.user.jidΒ :Β m.sender 
 Β Β conn.sendButt(m.chat,Β ` 
 β­ββββγ *BERHASIL* γ
 β Terima kasih ${name} Sudah Mendaftar
Di Database Kami
 β Β© α΅Κ³ΠΊΟΠΊΟ-α΄α΄ΓαΦΝΓ || ALL RESERVED

 β­ββββγ *DATA CEWE* γ
 ββ₯π§ *SUCCES βοΈ* γSTATUS
 ββ₯π§ *${name}* γNAME
 ββ₯π§ *${age}* γAGE                                          
 β°ββββββββββΰΉ

*SYARAT*
β₯ Gunakan α΅Κ³ΠΊΟΠΊΟ-α΄α΄ΓαΦΝΓ Ini Dengan Bijak.
β₯ Dilarang Menelepon α΅Κ³ΠΊΟΠΊΟ-α΄α΄ΓαΦΝΓ Ini.
β₯ Dilarang Spam Button/Chat.
β₯ Dilarang Toxic.

_*Jika Owner Mengetahui Hal Di Atas, Maka Tidak SeganΒ² Nomor Akan Di Banned!*_

*SN* (Serial Number) Di Kirim Di Chat Pribadi Dan Digunakan Untuk Daftar Ulang, Jika Lupa *SN* Silahkan Ketik *${usedPrefix}sn* Untuk Mengecek *SN* Kamu! 
`.trim(), wm, `${imgr + 'SUCCES'}`, [['βοΈMENU','.menu'],['SEWAπ°','.sewabot']], m) 
conn.sendMessage(m.sender, {text: `*SN:* ${sn}`}, {Β quoted:fpay}, m)
//conn.sendMessage(m.chat, buttonMessage,Β {Β quoted:fpay}) 
} 
handler.helpΒ =Β ['daftarce',Β 'verifyce'].map(vΒ =>Β vΒ +Β 'Β <nama>.<umur>') 
handler.tagsΒ =Β ['xp'] 
handler.commandΒ =Β /^(daftarce|verifyce)$/i 

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
