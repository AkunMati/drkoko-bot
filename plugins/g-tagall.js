let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let replace = { 
     readmore: readMore 
  }
  let teks = `┌─「 TAG ALL 」\n\n@${m.sender.split('@')[0]} : ${text ? text : ''} %readmore\n\n`
  for (let mem of participants) {
  teks += `├✪➢ @${mem.id.split('@')[0]}\n`}
  teks += `└────\n`
  text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i
handler.botAdmin = true
handler.admin = true
handler.group = true

module.exports = handler
