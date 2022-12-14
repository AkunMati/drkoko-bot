const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hgom/i.test(m.quoted.text) || /.*hgom/i.test(m.text))
        return !0
    this.tebakgombal = this.tebakgombal ? this.tebakgombal : {}
    if (!(id in this.tebakgombal))
        return conn.sendButt(m.chat, 'Soal itu telah berakhir', author, null, buttontebakgombal, m)
    if (m.quoted.id == this.tebakgombal[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
            return conn.sendButt(m.chat, '*Yah Menyerah :( !*', author, null, buttontebakgombal, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgombal[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgombal[id][2]
            conn.sendButt(m.chat, `*Benar!*\n+${this.tebakgombal[id][2]} XP`, author, null, buttontebakgombal, m)
            clearTimeout(this.tebakgombal[id][3])
            delete this.tebakgombal[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            conn.sendButt(m.chat, `*Salah!*`, author, null, [
                ['Hint', '.hgom'],
                ['Nyerah', 'menyerah']
            ], m)
    }
    return !0
}
handler.exp = 0

module.exports = handler

const buttontebakgombal = [
    ['tebakgombal', '.tebakgombal']
]
