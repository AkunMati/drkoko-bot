let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih Kak^_^\n\n_*Jangan Lupa Subscribe YT OwnerKu Ya:*_\nhttps://youtube.com/channel/UC_nKNU3Htf4Bp_wkhj3pVXQ', wm, 'Next', `.${command}`, m) 
}
handler.help = ['blush', 'cringe', 'dance', 'poke', 'wink', 'happy', 'slap', 'kill', 'glomp', 'bite', 'nom', 'handhold', 'highfive', 'wave', 'smile', 'yeet', 'bonk', 'smug', 'pat', 'lick', 'kiss', 'awoo', 'hug', 'cry', 'cuddle', 'bully']
handler.tags = ['random']
handler.command = /^(blush|cringe|dance|poke|wink|happy|slap|kill|glomp|bite|nom|handhold|highfive|wave|smile|yeet|bonk|smug|pat|lick|kiss|awoo|hug|cry|cuddle|bully)$/i
//buatan hyzer, jgn hapus atuh 😊
handler.limit = true
module.exports = handler
