let handler = m => m

const isLinkTik = /tiktok.com/i // tambahin sendiri
const isLinkYt = /youtube.com|youtu.be/i // tambahin sendiri
const isLinkTel = /t.me/i // tambahin sendiri
const isLinkFb = /facebook.com|fb.me/i // tambahin sendiri
const isLinkIg = /instagram.com/i // tambahin sendiri
const isLinkWa = /wa.me/i // tambahin sendiri
const isLinkHttp = /http|https/i // tambahin sendiri
const isLinkBitly = /bit.ly/i // tambahin sendiri

handler.before = async function (m, { conn, args, usedPrefix, command, isAdmin, isBotAdmin }) => {
    let imgr = flaaa.getRandom()
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isAntiLinkTik = isLinkTik.exec(m.text)
    const isAntiLinkYt = isLinkYt.exec(m.text)
    const isAntiLinkTel = isLinkTel.exec(m.text)
    const isAntiLinkFb = isLinkFb.exec(m.text)
    const isAntiLinkIg = isLinkIg.exec(m.text)
    const isAntilinkWa = isLinkWa.exec(m.text)
    const isAntiLinkHttp = isLinkHttp.exec(m.text)
    const isAntiLinkBitly = isLinkBitly.exec(m.text)

    if (chat.antiLinkTik && isAntiLinkTik) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktik', '/disable antilinktik'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Tiktok
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Tiktok'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkBitly && isAntiLinkBitly) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkbitly', '/disable antilinkbitly'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Bitly
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Bitly'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }

    if (chat.antiLinkYt && isAntiLinkYt) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkyt', '/disable antilinkyt'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Youtube
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Youtube'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkTel && isAntiLinkTel) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinktel', '/disable antilinktel'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    global.db.data.users[m.sender].joinlimit -= 1
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Telegram
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Tele'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkFb && isAntiLinkFb) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkfb', '/disable antilinkfb'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Facebook
    Ketik *.limit* untuk cek limit`, wm, `${imgr + 'Anti Link Facebook'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkIg && isAntiLinkIg) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkig', '/disable antilinkig'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Instagram
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Facebook'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkWa && isAntiLinkWa) {
        await conn.sendButt(m.chat, run, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antilinkwa', '/disable antilinkwa'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link WhatsApp
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link WhatsApp'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    
    if (chat.antiLinkHttp && isAntiLinkHttp) {
        await conn.sendButt(m.chat, `*Link Terdeteksi!*${isBotAdmin ? '' : '\n\n_Bot bukan atmin_'}`, author, ['off antihatetepe', '/disable antihatetepe'], m)
        if (isBotAdmin && bot.restrict) {
            // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    global.db.data.users[m.sender].limit = 0
    global.db.data.users[m.sender].warn += 1
    global.db.data.users[m.sender].banned = true
    
    await conn.sendButt(m.chat, run, `*Limit anda di reset ke 0*\n*WARN +1*\n*+ Banned Pengirim*
    Karena Mengirim Link Http
    Ketik *.limit* untuk cek limit`, `${imgr + 'Anti Link Https'}`, [
        ['THNKS KOKO GANTENG:v', `terimakasih`]
    ], m)
        } else if (!bot.restrict) return m.reply('Gk bisa gw kick!')
    }
    return !0
}

module.exports = handler
