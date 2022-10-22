let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
	const sections = [
   {
	title: `${dmenub} LIST OPTIONS`,
	rows: [
        {title: "👋 | AutoCloseGroup", rowId: `${usedPrefix + command} autoclosegroup`},
	{title: "✨ | Welcome", rowId: `${usedPrefix + command} welcome`},
        {title: "🚫 | Delete", rowId: `${usedPrefix + command} delete`},
        {title: "❌ | autodelvn", rowId: `${usedPrefix + command} autodelvn`},
	{title: "🌎 | Public", rowId: `${usedPrefix + command} public`},
        {title: "✅ | AutoSticker", rowId: `${usedPrefix + command} stiker`},
	{title: "🗣️ | Simi", rowId: `${usedPrefix + command} simi`},
        {title: "🗣️ | Auto Vn (simi-simi)", rowId: `${usedPrefix + command} autovn`},
	{title: "🔞 | Nsfw", rowId: `${usedPrefix + command} nsfw`},
        {title: "😤 | AntiSpam", rowId: `${usedPrefix + command} antispam`},
        {title: "😤 | AntiCall", rowId: `${usedPrefix + command} anticall`},
	{title: "🌟 | AntiBuleAll", rowId: `${usedPrefix + command} antibuleall`},
        {title: "🌟 | AntiBule", rowId: `${usedPrefix + command} antibule`},
	{title: "🔗 | Antilink", rowId: `${usedPrefix + command} antilink`},
        {title: "🔗 | AntilinkBitly", rowId: `${usedPrefix + command} antilinkbitly`},
        {title: "🔗 | AntilinkTIK", rowId: `${usedPrefix + command} antilinktik`},
        {title: "🔗 | AntilinkYT", rowId: `${usedPrefix + command} antilinkyt`},
        {title: "🔗 | AntilinkTEL", rowId: `${usedPrefix + command} antilinktel`},
        {title: "🔗 | AntilinkFB", rowId: `${usedPrefix + command} antilinkfb`},
        {title: "🔗 | AntilinkIG", rowId: `${usedPrefix + command} antilinkig`},
        {title: "🔗 | AntilinkWA", rowId: `${usedPrefix + command} antilinkwa`},
        {title: "🔗 | AntiHttp", rowId: `${usedPrefix + command} antihttp`},
	{title: "🚫 | Antidelete", rowId: `${usedPrefix + command} antidelete`},
	{title: "📛 | Antitoxic", rowId: `${usedPrefix + command} antitoxic`},
	{title: "⏏️ | Autolevelup", rowId: `${usedPrefix + command} autolevelup`},
        {title: "⏩ | AutoDownload", rowId: `${usedPrefix + command} autodownload`},
	{title: "🔎 | Detect", rowId: `${usedPrefix + command} detect`},
        {title: "📃 | Desc Update", rowId: `${usedPrefix + command} desc`},
        {title: "🚫 | AntiViewonce", rowId: `${usedPrefix + command} viewonce`},
        {title: "❌ | AntiBadword", rowId: `${usedPrefix + command} antibadword`},
	{title: "📑 | Document", rowId: `${usedPrefix + command} document`},
        {title: "✅ | BackUp", rowId: `${usedPrefix + command} backup`},
	{title: "👤 | WhiteListMyContact", rowId: `${usedPrefix + command} whitelistmycontact`},
	{title: "❕ | Restrict", rowId: `${usedPrefix + command} restrict`},
	{title: "😈 | AntiBugGc", rowId: `${usedPrefix + command} antibuggc`},
        {title: "😈 | AntiVirtex", rowId: `${usedPrefix + command} antivirtex`},
        {title: "😈 | AntiVirus", rowId: `${usedPrefix + command} antivirus`},
	{title: "☑️ | Autoread", rowId: `${usedPrefix + command} autoread`},
	{title: "🗿 | Ephemeral", rowId: `${usedPrefix + command} ephemeral`},
        {title: "🎭 | Jadibot", rowId: `${usedPrefix + command} jadibot`},
        {title: "💢 | Clear", rowId: `${usedPrefix + command} clear`},
	{title: "🏢 | GcOnly", rowId: `${usedPrefix + command} gruponly`},
	{title: "😳 | Anon", rowId: `${usedPrefix + command} anon`},
        {title: "❎ | AntiTag", rowId: `${usedPrefix + command} antitag`},
	]
    },
]

const listMessage = {
  text: '',
  footer: wm,
  title: `*${htki} OPTIONS ${htka}*`,
  buttonText: "CLICK HERE!",
  sections
}

  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat = db.data.chats[m.chat]
  let user = db.data.users[m.sender]
  let setting = db.data.settings[conn.user.jid]
  let set = db.data.settings[conn.user.jid]
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  switch (type) {
    case 'sholat':
    case 'closegroup':
    case 'autoclosegroup':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.closeGroup = isEnable
      break
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.detect = isEnable
      break
    case 'desc':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.descUpdate = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'viewonce':
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.viewonce = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'antibadword':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBadword = !isEnable
      break
    case 'autodelvn':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.autodelvn = isEnable
      break
    case 'document':
      chat.useDocument = isEnable
      break
    case 'publik':
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      setting.self = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'antilinkbitly':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkBitly = isEnable
      break
      case 'antilinktik':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTik = isEnable
      break
      case 'antilinkyt':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkYt = isEnable
      break
      case 'antilinktel':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkTel = isEnable
      break
      case 'antilinkfb':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkFb = isEnable
      break
      case 'antilinkig':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkIg = isEnable
      break
      case 'antilinkwa':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkWa = isEnable
      break
      case 'antihttp':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinkHttp = isEnable
      break
    case 'antibuleall':
    case 'only':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.antiBuleAll = isEnable
      break
    case 'antibule':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antibule = isEnable
      break
    case 'stiker':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.stiker = isEnable
      break
    case 'autolevelup':
    case 'levelup':
      isUser = true
      user.autolevelup = isEnable
      break
    case 'mycontact':
    case 'mycontacts':
    case 'whitelistcontact':
    case 'whitelistcontacts':
    case 'whitelistmycontact':
    case 'whitelistmycontacts':
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      conn.callWhitelistMode = isEnable
      break
    case 'antitag':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      setting.antitag = isEnable
      break
    case 'grup':
    case 'gruponly':
    case 'grouponly':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.groupOnly = isEnable
      break
    case 'backup':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.backup = isEnable
      break
    case 'anticall':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.anticall = isEnable
      break
    case 'antitroli':
    case 'antibuggc':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antitroli = isEnable
      break
    case 'antivirtex':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antivirtex = isEnable
      break
    case 'antivirus':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiVirus = isEnable
      break
    case 'antispam':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antispam = isEnable
      break
    case 'anon':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.anon = isEnable
      break
    case 'nsfw':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.nsfw = isEnable
      break
    case 'jadibot':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      setting.jadibot = isEnable
      break
    case 'clear':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      chat.clear = isEnable
      break
    case 'autoread':
    case 'read':
      isAll = true
      if (!isOwner) {
      	global.dfail('owner', m, conn)
      	throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'epe':
    case 'ephe':
    case 'ephemeral':
      isAll = true
      if (!isOwner) {
      	global.dfail('owner', m, conn)
      	throw false
      }
      setting.epe = isEnable
      break
    case 'simi':
    case 'simsimi':
	if (m.isGroup) {
	if (!(isAdmin || isOwner)) {
	global.dfail('admin', m, conn)
	throw false
	}
   }
	if (chat.simi && isEnable) {
	throw "simsimi telah aktif di chat ini"
	} else if (!chat.simi && isEnable == false) {
	   throw "simsimi belum aktif di chat ini"
	} else {
	   chat.simi = isEnable
    }
    break
    case 'autodownload':
    case 'autodl':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn,)
          throw false
        }
      }
      chat.autoDownload = isEnable
      break
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
      throw false
  }
  conn.sendButt(m.chat, `*${htki} OPTIONS ${htka}*
🗂️ *Type:* ${type} 
📊 *Status:* Succes ✅
🎚️ *Options:* ${isEnable ? 'Enable' : 'Disable'}
📣 *For:* ${isAll ? 'This Bot' : isUser ? '' : 'This Chats'}
`, `${imgr + 'SUCCES AKTIF'}`, wm '\n\n' run, null, [[`${isEnable ? '✖️ Disable' : '✔️ Enable'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['💌MENU', '.menu']],m)
}
handler.help = ['on', 'off'].map(v => v + 'table <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

module.exports = handler
