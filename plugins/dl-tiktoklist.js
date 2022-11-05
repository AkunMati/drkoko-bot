let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!args[0]) return m.reply('Link?')
	
let tiktok = `
${htki}  📺 Tiktok Downloader 🔎  ${htka}
⚡ Silakan pilih Tiktok Downloader di tombol di bawah...
*Teks yang anda kirim:* ${args[0]}
Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi
🚀 : Kalau error berarti scrape / limit apikey free nya abis asw :v
🚀 : Makanya bantu donasi buat support + beli apikey unlimited bjir :v
Donasi :
Nomor Developer : wa.me/6283863727744
Nomor Owner Bot : wa.me/6283863727744`

// yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} Tiktok Downloader Work✦-------`,
	rows: [
        {title: "Api Malesin", rowId: `.malesin ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api Neoxr", rowId: `.ttkneoxr ${args[0]}`, description: 'Apikey Limit Free' },
        {title: "Api Adiixyz", rowId: `.ttkadiixyz ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api Anabot", rowId: `.ttkanabot ${args[0]}`, description: 'Apikey Limit Unlimited' },
        {title: "Api X-Team", rowId: `.ttkxteam ${args[0]}`, description: 'Apikey Limit Free' },
	{title: "Api ZenzApis", rowId: `.ttkzenzapis ${args[0]}`, description: 'Apikey Limit Free' },
    ]
    },{
        title: `${htjava} Tiktok Downloader Error / 50% Work ✦-------`,
        rows: [
        {title: "BochilTeam V1 (Error)", rowId: `.ttkbocilteam1 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V2 (Error)", rowId: `.ttkbocilteam2 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "BochilTeam V3 (Error)", rowId: `.ttkbocilteam3 ${args[0]}`, description: 'Scrape Bochilteam' },
        {title: "TikTok Social (Error)", rowId: `.ttksocial ${args[0]}`, description: 'Scrape Social' },
        {title: "Api BetaBotz (Error)", rowId: `.ttkbetabotz ${args[0]}`, description: 'Apikey Limit Unlimited' },
	{title: "Api Xcoders (Error)", rowId: `.ttkxcoders ${args[0]}`, description: 'Apikey Limit Unlimited' },
        ]
    },
]

const listMessage = {
  text: tiktok,
  footer: 'Jangan Spm!',
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fake, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['tiktoklist', 'tiktoklistdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktoklist|tiktoklistdl)$/i
handler.register = true
module.exports = handler
