let { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, command, args, usedPrefix:p, isOwner, DevMode }) => {

    if (!isOwner) throw 'Ngapain Make Cheat ???'

    let type = (args[0] || '').toLowerCase()

    let cht = (args[0] || '').toLowerCase()

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

    let mentionedJid = [who]

    let cok = `
*[ Warning Gunakan Dengan Bijak!! ]*
• Example = ${p}addsaldo saldo 100 @tag
• gunakan dengan bijak! dan jangan bagikan saldo dengan sembarangan
`.trim()

try {

       if (/addsaldo/i.test(command)) {

            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)

            switch (type) {

            	case 'saldo':

                            if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam database'

                            db.data.users[who].saldo += count * 1

                            conn.reply(m.chat, `Berhasil menambahkan ${count * 1} ${type} kedalam database target`, m)

break                       // Perhatian Cheat exp bisa membuat database kalian error!!

                            // Minimal cheat exp 1000000000000 Batas cheat exp tidak boleh lebih!!

                default:

                    return conn.reply( m.chat, cok, m)

            }

        }

    } catch (e) {

        conn.reply(m.chat, cok, m)

        console.log(e)

    }

}

handler.help = ['addsaldo <type> <jumlah> @user']

handler.tags = ['bca']

handler.command = /^(add|tambah|\+)(saldo)?$/i

handler.fail = null

handler.rowner = true

module.exports = handler

function pickRandom(list) {

    return list[Math.floor(Math.random() * list.length)]

}

function no(number){

    return number.replace(/\s/g,'').replace(/([@+-])/g,'')

  }
