const qrku = "https://i.ibb.co/1LF6QHQ/pangeran.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
*──── 「 LIST SEWA 」 ────*
Hai Kak 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡
┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Premium : 10k/Bulan
┣★ミ Premium : 15k/2Bulan
┣★ミ Sewabot + Running : 10k/Bulan
┣★ミ Sewabot + Running : 20k/2Bulan
┣★ミ Undang bot ke grup : 10k/Bulan
┣➲ ILove You Beby🤗
┗━━━•❅•°•❈
┏━━━•❅•°•❈𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐮𝐬𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Unlock Fitur Premium
┣➲ Limit Didapat Tiap Hari Dengan Claim
┣➲ Bisa Invite Bot Ke Group
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6287740530274 (Owner)
`.trim(), wm, '🧒KOKO', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'sewain']
handler.tags = ['main']
handler.command = /^sewa(bot|in)$/i

module.exports = handler
