let handler = async(m, { conn, usedPrefix, command, args, text, }) => {

    let ras = `Halo Kak @${m.sender.split('@')[0]}`

    let sel = `*New System*
• System saldo ( beta coy )
Jadi nanti ada system saldo yang dmn nanti kalian bisa dapetin saldonya dari owner ya, nah saldo nya itu sendiri bisa di pake buat apa aja?
- Add Bot To Group
- Jadiin lu premium
Contoh aja nih 
Saldo gw 25k
ntar 25k bisa lu jadiin bot sewa perma ke group ya & saldo yang 25k ilang tapi bot bisa masuk ke group lu karena lu dah pake tu saldo
special thanks to :
@ᵈʳкσкσᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×
@⁨ᵈʳˢYᴜɴɪ-ᴍᴅ 
@⁨Radhin123 
@⁨TioXD`

    let rs = `Klik Cuy`

const sections = [ {

	title: `Silahkan Pilih List Type Saldo Dibawah!`,

	rows: [

	{title: `Pakai Saldo 15K`, rowId: `.salahsu`, description: `Pakai 15K saldo mu`},
    {title: `Pakai Saldo 25k`, rowId: `.salahsu`, description: `Pakai 25k Saldo Mu`},
    {title: `Pakai Saldo 7K`, rowId: `.salahsu`, description: `Pakai 7K Saldo Mu`},
    {title: `Pakai Saldo 1K`, rowId: `.salahsu`, description: `Pakai 1K Saldo Mu`},

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

    await conn.sendMessage(m.chat, listMessage, { quoted: fpay })
}
handler.help = ['pakaisaldo']
handler.tags = ['saldo']
handler.command = /^(pakaisaldo|pakesaldo)$/i

module.exports = handler
