let handler = async (m, { conn, text, usedPrefix, command }) => {
   let ar = ['Owner', 'Donasi']
   let ras = `Halo @${m.sender.split('@')[0]}`
    let sel = `Silahkan Pilih Sub Menu Di Bawah Ini`
    let rs = `Click Here`
const sections = [ {
	title: `Pilih Salah Satu Menu `,
	rows: [
	   {title: `Ping Pong`, rowId: `#ping `, description: `KECEPATAN KIDZ`},
        {title: `Speedtest`, rowId: `#speedtest `, description: `KECEPATAN KE 2 KIDZ`},
        {title: `Script`, rowId: `#sc `, description: `SCRIPT BOT KIDZ`},
         {title: `Thanks`, rowId: `#tqto `, description: `CONTRIBUTORS KIDZ`},
         {title: `Group Official`, rowId: `#gcbot `, description: `GROUP BOT KIDZ`},
         {title: `Biodata Pangeran`, rowId: `#biodata `, description: `BIODATA OWNER KIDZ`},
        ]
 } ]

const listMessage = {
  text: sel,
  mentions: [m.sender],
  footer: wm,
  title: ras,
  buttonText: rs,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: fpay })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: fpay })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['info'].map((v) => v + ' <opsi>')
handler.tags = ['main']
handler.command = /^(Info)$/i

module.exports = handler
