let handler = async (m, { conn, text, args, usedPrefix, command }) => {

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
if (!b[1]) throw 'Format\n' + usedPrefix + command + ' halo |ya|gak'
if (b[12]) throw 'Kebanyakan pilihan, Format\n' + usedPrefix + command + ' halo |ya|gak'

for (let c = 1; c < b.length; c++) {
a.push([b[c]])
			}
			
			let cap = `*Polling Request By* ${name}\n*Pesan:* ${text.split('|')[0]}`
			return conn.sendPoll(m.chat, cap, a, m)

}
handler.help = ['poll pertanyaan|pilihan|pilihan']
handler.tags = ['group'] 
handler.command = /^po(l((l?ing|ls)|l)|ols?)$/i
handler.admin = true
module.exports = handler
