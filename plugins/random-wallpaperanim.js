let handler = async (m, { conn, command }) => {
let nyenye = `http://hadi-api.herokuapp.com/api/walpaperanime`
    conn.sendButtonImg(m.chat, nyenye, '*Nih Kak^_^*\n\n_*Jangan Lupa Subscribe YT OwnerKu Kak:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ', wm, 'Next', `.wallpaperanime`, m) 
}
handler.help = ['wallpaperanime']
handler.tags = ['internet']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true
module.exports = handler
