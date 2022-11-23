const scraper = require('@bochilteam/scraper')

let handler = async (m, { args }) => {
    if (!args[0]) throw 'Input URL'
    let res = await scraper.instagramdl(args[0])
        .catch(async _ => await scraper.instagramdlv2(args[0]))
        .catch(async _ => await scraper.instagramdlv3(args[0]))
        .catch(async _ => await scraper.instagramdlv4(args[0]))
    if (!res) throw 'Can\'t download the post'
    await m.reply('_In progress, please wait..._')
    for (let { url } of res) await conn.sendFile(m.chat, url, 'instagram.mp4', 
`
_©Bʏ: ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×_
`.trim(), m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i
handler.premium = true
handler.limit = true
module.exports = handler
