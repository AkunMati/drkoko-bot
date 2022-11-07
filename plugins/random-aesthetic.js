let handler = async (m, { conn }) => {
let api-hyzer = `https://api.lolhuman.xyz/api/random/estetic?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, api-hyzer, '*Nih Kak^_^*\n\n_*Jangan Lupa Subscribe YT OwnerKu Kak:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ', wm, 'NEXT', '.aesthetic', m)
}
handler.help = ['aesthetic']
handler.tags = ['random']
handler.command = /^(aesthetic)$/i
handler.limit = true
module.exports = handler
