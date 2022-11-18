let handler  = async (m, { conn, text }) => {

let p = '```'

let users = global.db.data.users

	let row = []

  var text = ""

  var i = 1

  for (let jid in users){

    if (users[jid].afkl){

      // text += `\nNama : ${conn.getName(jid)}\nNomor : wa.me/${jid.split('@')[0]}\nAlasan : ${users[jid].afkReason}\nSelama : ${clockString(new Date - users[jid].afk)}`

      i += 1

      row.push({

	title: `Nama : ${conn.getName(jid)}`,

	description: `Nomor : wa.me/${jid.split('@')[0]}\nAlasan : ${users[jid].afkReason}\nSelama : ${clockString(new Date - users[jid].afk)}`,

	rowId: ''

       

       }

    )

    }

	button = {

		buttonText: `Klik!`,

		description: `List Afk\nTotal Users Afk : ${i-1}`,

		footerText: botdate

	}

      }

    

  

	return conn.sendListM(m.chat, button, row, m)  

		

/* return conn.reply(m.chat, `*「 👥 」› List Helper*
Total Helper : *${i-1} Users*\n${text}
*/

// `, m)

}

handler.help = ['listafk']

handler.tags = ['info']

handler.command = /^(listafk|afklist)$/i

module.exports = handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')

}
