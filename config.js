let fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://api.neoxr.eu.org',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.neoxr.eu.org': 'yntkts',
  'https://api.xteam.xyz': 'apikeyaine',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://api.lolhuman.xyz': '60b1eeb58eb87814b50d2082',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
global.packname = data.namabot
global.author = data.owner
global.wm = 'Cʀᴇᴀᴛᴇᴅ Bʏ' + ' ©ᵈʳкσкσ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×'

global.asing = `*Ciee Orang Asing Join, Dadah Saya Kick👋*`
global.wait = `*Tunggu Sebentar Dungu!*`


/*============== NOMOR ==============*/
global.nomorbot = '6287832147584'
global.nomorown = '6287740530274'
global.namebot = 'ᵈʳкσкσ-ᴍᴅ×፝֟͜×'
global.nameown = 'ᵈʳᴋᴏᴋᴏ ᴘᴀ፝֟፝֟ɴɢᴇʀᴀɴ×፝֟͜×'

/*============== Github Thanks To ==============*/
global.namagithub = 'MendingTuru' // nama github lu
global.linkgithub = 'https://github.com/MendingTuru' // tarok link github lu
global.thumb = 'https://i.ibb.co/XZrK6yQ/transformers.jpg' //Main Thumbnail
// klau kgk ada github kasih tanda '-' aja biar kgk error

/*============== APIKEY SIMPEL ==============*/
global.zenzkey = 'b8040941f7'
global.lolkey = 'e54205a4ca2caa368cc067bb' // PUNYA WAHID  8e66d0934cf741bfd2182c16
//======FAKE REPLY=======//
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬',
      limit: '🌌',
      healt: '❤️',
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythi: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      fishingrod: '🎣',
      pickaxe: '⛏️',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      iron: '⛓️',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      makananpet: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
