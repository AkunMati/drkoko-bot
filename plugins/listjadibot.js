async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  m.reply(`*🌟Bot Utama* \n\n• https://wa.me/${global.conn.user.jid.split('@')[0]}?text=${usedPrefix}menu *${namabot}* \n\n *🤖JadiBot* \n\n` + users.map(v => '• https://wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
}
handler.command = handler.help = ['listjadibot']
handler.tags = ['jadibot']
module.exports = handler


/*async function handler(m, { usedPrefix }) {

  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

  m.reply(users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))

}

handler.command = /^(listjadibot)$/i

handler.help = ['listjadibot']

handler.tags = ['jadibot']

module.exports = handler*/
