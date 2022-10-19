let handler = async (m, { conn }) => {
    conn.tebakgombal = conn.tebakgombal ? conn.tebakgombal : {}
    let id = m.chat
    if (!(id in conn.tebakgombal)) throw false
    let json = conn.tebakgombal[id][1]
    let clue = json.jawaban.replace(/[AIUEOaiueo]/ig, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', wm, conn.tebakgombal[id][0])
}
handler.command = /^hgom$/i
handler.limit = true
module.exports = handler
