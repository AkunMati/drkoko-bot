let handler = m => m
handler.all = async function (m) {
	let chat = global.db.data.chats[m.chat]
	if (chat.autoPesence) {
    if (m.text) {
    /* Mengetik */
    let ran = ['composing', 'recording']
	return this.sendPresenceUpdate(ran.getRandom(), m.chat)
    }
  }
}
module.exports = handler
