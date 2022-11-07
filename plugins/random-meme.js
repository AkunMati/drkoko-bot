let handler = async (m, { conn, command }) => {
let tioapikey = `https://xteam.xyz/randomimage/meme2?APIKEY=8872c3ff7452002c`
    conn.sendButtonImg(m.chat, tioapikey, '*Nih Kak>_<*\n\n_*Jangan Lupa Subscribe YT OwnerKu Kak:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ', wm, 'Next', `.${command}`, m) 
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler
