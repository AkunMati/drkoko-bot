let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
conn.reply(global.owner[0] + `@s.whatsapp.net`, ` *Boss Ada Yang Bilang Terimakasih Nih:v*`, m)

    let a = "https://telegra.ph/file/fd9936b824e0295417453.png"
  conn.sendStimg(m.chat, a, m, {packname: clg1, author: clg2, 
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    showAdAttribution: true,
    mediaUrl: sc,
    mediaType: 2,
    description: deslink, 
    title: bodlink,
    body: wm,
    thumbnail: await(await fetch(img)).buffer(),
    sourceUrl: sc
     }}
  })
    
  /*conn.reply(m.chat, `
Ngapain lu manggil owner ku dek?
kalau mau sewa chat pribadi aja
Gak usah Malu-malu
`.trim(), m)
    let mentionedJid = [m.sender]*/
}
handler.customPrefix = /^terimakasih$/i
handler.command = new RegExp

module.exports = handler
