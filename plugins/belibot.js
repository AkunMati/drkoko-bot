let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://github.com/MendingTuru'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'FILE BOKEP SEMUA BTW',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Follow Github Gua',
'body':'© MendingTuru',
'thumbnail':await(await fetch('https://telegra.ph/file/63d157733afce65388504.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan Pilih Opsi Di Bawah Ini.\n*Payment*\n\n*x* Dana: 087832147584\n*x* Pulsa: 087832147584',
'footer':'©ᵈʳкσкσ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['belibot']
handler.tags = ['main']
handler.command = /^(belibot)$/i

module.exports = handler
