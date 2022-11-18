let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command }) => {
    let json = JSON.parse(fs.readFileSync(`./src/iklan.json`))
    let row =  []
for (let i of json) {
	      row.push({
	title: `${i.name}\n`,
		description: `🎟Nama Iklan : ${i.name}\n:👤Pemilik Iklan : wa.me/${i.no}\n🖼Deskripsi : ${i.desc}`,
		rowId: ' '
       }
    )
    }
	let button = {
		buttonText: 'LIST IKLAN',
		description: 'Berikut daftar iklan yang terdaftar di database',
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)

}
handler.help = ['iklan'].map(v => 'list' + v)
handler.tags = ['info']
handler.command = /^(listiklan|iklan)$/i

module.exports = handler
