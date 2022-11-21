let instagramGetUrl = require('instagram-url-direct')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    const results = (await instagramGetUrl(args[0])).url_list[0]

    conn.sendFile(m.chat, results, 'ig.mp4', `*Nih Kak>_<*\n_Lain Kali Download Sendiri Kak😖_\n\n_*Jangan Lupa Subscribe My Channel:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ`, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(instagram|ig|igdl)$/i
handler.limit = true
handler.premium = true

module.exports = handler
