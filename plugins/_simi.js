/*let fetch = require('node-fetch')
let handler = m => m

handler.before = async (m) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned && !m.fromMe) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(global.API('https://api-sv2.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "id" }, ''))
        if (!res.ok) throw 'maaf simi lagi sibuk'
        let json = await res.json()
        if (json.success == 'lu ngomong apa sih') await m.reply("gapaham cok :'v")
        await m.reply(`${json.success}`)
   // m.reply(`${json.success}`)
        return !0
    }
    return true
}
module.exports = handler*/


let fetch = require('node-fetch')
let handler = m => m
handler.all = async function(m) {
	if (m.isBaileys)
		return
	if (!m.message)
		return
	var isIdMessage = false,
		usedPrefix
	for (let name in global.plugins) {
		let plugin = global.plugins[name]
		if (!plugin)
			continue
		if (plugin.disabled)
			continue
		if (typeof plugin !== 'function')
			continue
		if (!plugin.command)
			continue
		let str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		let _prefix = plugin.customPrefix ? plugin.customPrefix : this.prefix ? this.prefix : global.prefix
		let match = (_prefix instanceof RegExp ? // RegExp Mode?
			[
				[_prefix.exec(m.text), _prefix]
			] :
			Array.isArray(_prefix) ? // Array?
			_prefix.map(p => {
				let re = p instanceof RegExp ? // RegExp in Array?
					p :
					new RegExp(str2Regex(p))
				return [re.exec(m.text), re]
			}) :
			typeof _prefix === 'string' ? // String?
			[
				[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]
			] : [
				[
					[], new RegExp
				]
			]
		).find(p => p[1])
		if ((usedPrefix = (match[0] || '')[0])) {
			let noPrefix = m.text.replace(usedPrefix, '')
			let [command] = noPrefix.trim().split` `.filter(v => v)
			command = (command || '').toLowerCase()
			let isId = plugin.command instanceof RegExp ? // RegExp Mode?
				plugin.command.test(command) :
				Array.isArray(plugin.command) ? // Array?
				plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
					cmd.test(command) :
					cmd === command
				) :
				typeof plugin.command === 'string' ? // String?
				plugin.command === command :
				false
			if (!isId)
				continue
			isIdMessage = true
		}
	}

	let chat = db.data.chats[m.chat]
	let user = db.data.users[m.sender]
	let serror = "simi error :("
	if (chat.simi && !chat.isBanned && !user.banned && !m.fromMe && !isIdMessage && m.text) {
		try {
			a = (await axios.get(API('ghst', 'api/simsimi', {
				pesan: m.text
			}, 'key'))).data
			log(a.count)
			let respon = a.respSentence.trim()
			m.reply(`${respon}`)
		} catch (e) {
			if (e.response) {
				log(e.response.data)
				m.reply(serror)
			} else {
				log(e)
				m.reply(serror)
			}
		}
		return !0
	}
	return true
}
module.exports = handler
