let levelling = require('../lib/levelling')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let jimp = require('jimp')
let PhoneNumber = require('awesome-phonenumber')
const defaultMenu = {
  before: ` *┄┄┄┅┅❑ ᵈʳкσкσ-ᴍᴅ×፝֟͜× ❑┅┅┄┄┄*
┏─────────────────⬣
┆ 𝑯𝒂𝒊, *${ucapan()} %name*👋
┗┬──────────────┈ ⳹
┏┆♠︎ *Limit:* %limit
┆┆♠︎ *Role:* %role
┆┆♠︎ *Level:* %level
┆┆♠︎ *XP:* (%exp / %maxexp) [%xp4levelup]
┗┬──────────────┈ ⳹
┏┤   *𝐊𝐚𝐥𝐞𝐧𝐝𝐞𝐫*
┆┗──────────────┈ ⳹
┆♠︎ *Hari:* %week
┆♠︎ *Tanggal:* %weton, %date
┆♠︎ *Tanggal Islam:* %dateIslamic
┆♠︎ *Waktu:* %time
┗┬──────────────┈ ⳹
┏┤ *𝐁𝐨𝐭 𝐈𝐧𝐟𝐨*
┆┗──────────────┈ ⳹
┆♠︎ *Limit* : Ⓛ 
┆♠︎ *Premium* : Ⓟ
┆♠︎ *Uptime:* : %uptime (%muptime)
┆♠︎ *Database:* %rtotalreg dari %totalreg
┆♠︎ *Penulis Ulang:* ᵈʳкσкσ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×
┆♠︎ *Script Ini:* Private!
┗─────────────────⬣
%readmore`.trim(),
  header: '╔═❖〔 %category 〕❖════╗\n┃',
  body: '┃➺ %cmd %islimit %isPremium',
  footer: '┃\n╚══════════❖\n', 
  after: `*%admen*

*Made By ♡ %npmname* | %version
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  m.react('⏱️')
  let bzz = './mp3/tmp.mp3'
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'store', 'shortlink', 'game', 'rpg', 'xp', 'sticker', 'sound', 'soundanime', 'change', 'kerangajaib', 'quotes', 'admin', 'group', 'anime', 'logo', 'nsfw', 'premium', 'virus', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'asupan', 'bokep', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'UTAMA',
    'store': 'Store',
    'shortlink': 'Short Link',
    'game': 'Game',
    'rpg': 'RPG',
    'xp': 'Exp & Limit',
    'sticker': 'Sticker',
    'sound': 'Sound/Musik',
    'soundanime': 'Sound Anime',
    'change': 'Pengubah Suara',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'group': 'Group',
    'anime': 'Anime',
    'logo': 'Logo Menu',
    'nsfw': 'Nsfw',
    'premium': 'Premium',
    'virus': 'Virus',
    'internet': 'Internet',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'asupan': 'Asupan',
    'bokep': '22+ Bokep',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Al Qur\an',
    'audio': 'Vidio To Audio',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'store') tags = {
    'store': 'Store'
  }
  if (teks == 'shortlink') tags = {
    'shortlink': 'Short Link'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'RPG'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Sticker'
  }
  if (teks == 'sound') tags = {
    'sound': 'Sound/Musik'
  }
  if (teks == 'soundanime') tags = {
    'soundanime': 'Sound Anime'
  }
  if (teks == 'change') tags = {
    'change': 'Pengubah Suara'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'logo') tags = {
    'logo': 'Logo Menu'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
    'asupan': 'Asupan'
  }
  if (teks == 'bokep') tags = {
    'bokep': '22+ Bokep'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'Vidio To Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, age, money, level, role, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let umur = `*${age == '-1' ? 'Belum Daftar*' : age + '* Thn'}`
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 21, 2023 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('Februari 21, 2023 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let pe = '```'
    let { premium, premiumTime } = global.db.data.users[m.sender]
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    global.jam = time
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      let judul = `${ucapan()}, ${name}`.trim()
      const sections = [
      {
        title: 'List Menu ' + data.namabot,
        rows: [
          { title: 'Semua Perintah', rowId: `${_p + command} all`, description: `ALL MENU KIDZ` },
          { title: 'Koko Store', rowId: `${_p + command} store`, description: `FITUR STORE KIDZ` },
          { title: 'Short Link', rowId: `${_p + command} shortlink`, description: `FITUR SHORTLINK KIDZ` },
          { title: 'Game', rowId: `${_p + command} game`, description: `FITUR GAMES KIDZ` },
          { title: 'Rpg', rowId: `${_p + command} rpg`, description: `FITUR RPG KIDZ` },
          { title: 'XP', rowId: `${_p + command} xp`, description: `FITUR XP KIDZ` },
          { title: 'Sticker', rowId: `${_p + command} sticker`, description: `FITUR STICKER KIDZ` },
          { title: 'Sound/Musik', rowId: `${_p + command} sound`, description: `FITUR SOUND KIDZ` },
          { title: 'Sound Anime', rowId: `${_p + command} soundanime`, description: `FITUR SOUND ANIME KIDZ` },
          { title: 'Pengubah Suara', rowId: `${_p + command} change`, description: `FITUR PENGUBAH SUARA KIDZ` },
          { title: 'Kerang Ajaib', rowId: `${_p + command} kerangajaib`, description: `FITUR KERANG AJAIB KIDZ` },
          { title: 'Quotes', rowId: `${_p + command} quotes`, description: `FITUR QUOTES KIDZ` },
          { title: 'Group', rowId: `${_p + command} group`, description: `FITUR GROUP KIDZ` },
          { title: 'Anime', rowId: `${_p + command} anime`, description: `FITUR ANIME KIDZ` },
          { title: 'Logo Menu', rowId: `${_p + command} logo`, description: `FITUR LOGO KIDZ` },
          { title: 'Nsfw', rowId: `${_p + command} nsfw`, description: `FITUR NSFW KIDZ` },
          { title: 'Premium', rowId: `${_p + command} premium`, description: `FITUR PREMIUM KIDZ` },
          { title: 'Virusss', rowId: `${_p + command} virus`, description: `FITUR VIRUS KIDZ` },
          { title: 'Internet', rowId: `${_p + command} internet`, description: `FITUR INTERNET KIDZ` },
          { title: 'Anonymous', rowId: `${_p + command} anonymous`, description: `FITUR ANONYMOUS KIDZ` },
          { title: 'Nulis & Logo', rowId: `${_p + command} nulis`, description: `FITUR NULIS KIDZ` },
          { title: 'Downloader', rowId: `${_p + command} downloader`, description: `FITUR DOWNLOAD KIDZ` },
          { title: 'Tools', rowId: `${_p + command} tools`, description: `FITUR TOOLS KIDZ` },
          { title: 'Fun', rowId: `${_p + command} fun`, description: `FITUR FUN KIDZ` },
          { title: 'Asupan', rowId: `${_p + command} asupan`, description: `FITUR ASUPAN KIDZ` },
          { title: '22+ Bokep', rowId: `${_p + command} bokep`, description: `FITUR BOKEP KIDZ` },
          { title: 'Database', rowId: `${_p + command} database`, description: `FITUR DATABASE KIDZ` },
          { title: 'Vote & Absen', rowId: `${_p + command} vote`, description: `FITUR VOTE KIDZ` },
          { title: 'Al-Qur\an', rowId: `${_p + command} quran`, description: `FITUR AL-QUR/AN KIDZ` },
          { title: 'Vidio To Audio', rowId: `${_p + command} audio`, description: `FITUR AUDIO KIDZ` },
          { title: 'Jadi Bot', rowId: `${_p + command} jadibot`, description: `FITUR JADIBOT KIDZ` },
          { title: 'Info', rowId: `${_p +command} info`, description: `FITUR INFO KIDZ` },
          { title: 'Thks To', rowId: `${_p} tqto`, description: `TERIMAKSIH BUAT CONTRIBUTORS` },
          { title: 'Owner', rowId: `${_p + command} owner`, description: `NGAPAIN BUKA FITUR OWNER` }
        ]
      }
    ]
    const listMessage = {
      text: `
❏ *U S E R   I N F O*
• Nama    : *${name}*
• Limit   : *${limit}*
• Status  : *${global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) ? 'Owner 🗿' : 'Users ⚔️'}*
• Premium : *${premium ? `${conn.msToDate(premiumTime - new Date() * 1)}` : 'Gratisan'}*

❏ *S T A T U S   I N F O*
• Total User : *${rtotalreg} dari ${totalreg}*
• Tersisa    : *${limit} Limit*
• Role       : *${role}*
• Level      : *${level}*

❏ 𝙏𝙄𝙈𝙀
» Wib : *${time}*
» Tanggal : *${week} ${weton} ${date}*

❏ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
_*${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik*_

❏ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
_*${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik*_

❏ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍
_*${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik*_

${pe}Note: Jika ada Fitur yg Error Lapor ke owner${pe}`,
      footer: wm,
      title: judul,
      buttonText: "Tap Sayang!",
      sections
    }
    await conn.reply(m.chat, `_*Mau Pesan Apa Kak?*_`, m)
    return conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(judul), contextInfo: { forwardingScore: 99999, isForwarded: true }})
    
    }

    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? ' *Ⓛ* ' : '')
                .replace(/%isPremium/g, menu.premium ? ' *Ⓟ* ' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, umur, money, age, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role, admen,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.send3TemplateButtonImg(m.chat, await genProfile(conn, m), text.trim(), wm, `🏅KOKO`, `${_p}owner`, `💰SEWA`, `${_p}sewabot`, `🎗  RULES  🎗`, `${_p}rules`, m)
    await conn.sendFile(m.chat, bzz, 'audio.opus', null, m, true, { duration: 999999999 })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(m(enu)?|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}

//By fahri adison = https://github.com/FahriAdison

 async function genProfile(conn, m) {
    font = await jimp.loadFont('./name.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    res = JSON.parse(fs.readFileSync('./api/thumb.json')),
    welcome = await jimp.read(res.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
