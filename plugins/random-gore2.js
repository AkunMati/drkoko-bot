let handler = async(m, { conn, text, usedPrefix, command }) => {
        let res = `https://api-xcoders.xyz/api/random/gore?apikey=${global.xckey}`
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['🔄 Next 🔄', `/${command}`]], m)
}
handler.help = ['gore2']
handler.tags = ['random']
handler.command = /^(gore2)$/i
handler.premium = true
handler.limit = true
module.exports = handler
