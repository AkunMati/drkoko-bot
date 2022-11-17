let fs = require('fs')
let handler = async (m, {conn, usedPrefix}) => {
    let salah = `Penggunaan salah!\n\n• Contoh ${usedPrefix}pakesaldo15k <link group>`
    
    conn.send2Button(m.chat, salah, wm, 'menu', '.menu', 'owner', '.owner', m)
}
handler.command = /^(salahsu)$/i

module.exports = handler
