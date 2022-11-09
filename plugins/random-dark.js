let handler = async (m, { conn, command }) => {
let nyenye = `https://api.xteam.xyz/randomimage/${command}?APIKEY=8872c3ff7452002c`
    conn.sendButtonImg(m.chat, nyenye, '*Nih Kak>_<*\n\n_*Jangan Lupa Subscribe YT OwnerKu Kak:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ', wm, 'Next', `.${command}`, m) 
}
handler.help = ['dark']
handler.tags = ['random']
handler.command = /^(dark)$/i
handler.limit = true
module.exports = handler
