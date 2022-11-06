   let axios = require('axios')
const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok2', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    
conn.sendFile(m.chat, res.audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: sig,
    mediaType: 2, 
    description: 'Follow IG Pangeran',
    title: "Nɪʜ...",
    body: wm,
    thumbnail: await (await fetch('https://telegra.ph/file/63d157733afce65388504.jpg')).buffer(),
    sourceUrl: sig}}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
hanlder.limit = true 
module.exports = handler
