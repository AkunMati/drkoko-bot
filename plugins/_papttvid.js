let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {
let vid = papttvid[Math.floor(Math.random() * papttvid.length)]
conn.sendFile(m.chat, vid, `asupan.mp4`, 'Tch, dasar sangean lu om:v\n\nJangan Lupa Donasi Mek😤\nKetik .donasi', m)
}
handler.command = /^(papttvid)$/i
handler.limit = true
handler.register = true
handler.premium = true
module.exports = handler

global.papttvid = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/477e37be3e2765251b177.mp4",
 "https://telegra.ph/file/ab95efb0073d9a0b1634e.mp4",
 "https://telegra.ph/file/6f8e433abb3c3373957a9.mp4",
 "https://telegra.ph/file/ad6f7028b355ae4e59dbe.mp4",
 "https://telegra.ph/file/a4b0e2cdeef4f8742f3e9.mp4",
 "https://telegra.ph/file/d5edba9c8f540807a19c4.mp4",
 "https://telegra.ph/file/e4ac908970efbf136e989.mp4",
 "https://telegra.ph/file/fbd7496c0bcd041718f3e.mp4",
 "https://telegra.ph/file/a1ada427f751bccfce08b.mp4",
 "https://telegra.ph/file/a4979ad8d5dd82ad75e40.mp4",
 "https://telegra.ph/file/b8b2bd6c35ebfaf9682e8.mp4",
 "https://telegra.ph/file/d85f528ecdb881627a8a8.mp4",
 "https://telegra.ph/file/79e5e96a2ae6adee8b284.mp4",
 "https://telegra.ph/file/c7c3f49b239514b5e766a.mp4",
 "https://telegra.ph/file/851c1ff0c221f446a6fc8.mp4",
 "https://telegra.ph/file/84e6fcac905e76072d787.mp4",
 "https://telegra.ph/file/e0de1f35da6243851ed20.mp4",
 "https://telegra.ph/file/defebfd24a63643cdf412.mp4",
 "https://telegra.ph/file/bd3c0046ac7061a9b8633.mp4",
 "https://telegra.ph/file/59b43d5bcd1026f238db6.mp4",
 "https://telegra.ph/file/0afe72d111a1bcc16fd55.mp4",
 "https://telegra.ph/file/a44a8822c49e2472a52f8.mp4",
 "https://telegra.ph/file/2f61cf33533a648c09404.mp4",
 "https://telegra.ph/file/f940e630ac189ba839e66.mp4",
 "https://telegra.ph/file/ad9c9fe088226965fc260.mp4",
 "https://telegra.ph/file/3b7722ffa3b27bd6396e1.mp4",
 "https://telegra.ph/file/46c17399905b2bcbaa186.mp4",
 "https://telegra.ph/file/71c0c63e84dec3be3188e.mp4",
 "https://telegra.ph/file/3b08743d0bf6a928fd3aa.mp4",
 "https://telegra.ph/file/21d0afb1e8f54af72f303.mp4"
 ]
