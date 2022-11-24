let handler = async (m, { conn, command }) => {

	let ne = await (await fetch('https://raw.githubusercontent.com/NdaaXD/database/main/nsfw/hentaivid.json')).json()

    

    let neko = conn.pickRandom(ne)

	conn.sendFile(m.chat, neko, 'hentai.mp4', '_*©By: ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×*_',m)

}

handler.command = /^(hentaivt)$/i

handler.premium = true

//By Koko Pangeran

module.exports = handler
