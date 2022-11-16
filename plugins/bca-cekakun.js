let handler = async (m, { conn }) => {
    /*if (user.bca == false) throw `Boom! Kamu belum terdaftar di dalam database BCA! daftar dengan mengetik /setakun Nama Bca|Password`*/
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    let txtnya = `${global.ucapan} ${name}\nInfo Bank BCA mu\n\nNama BCA : ${user.bcaname}\n\nPassword BCA : ${user.bcapw}\n\nSaldo Kamu : ${user.saldo}\n\nPin BCA : ${user.bcapin}\n\nNo Rekening : ${user.bcanorek}\n\n${global.botdate}`
    if (user.bca == false) throw `Boom! Kamu belum terdaftar di dalam database BCA! daftar dengan mengetik /setakun Nama Bca|Password`
    //conn.reply(m.chat, txtnya, fkontak)
    conn.send2Button(m.chat, txtnya, wm, 'Pakai Saldo', '.pakesaldo', 'Isi Saldo', '.owner Silahkan Chat Owner Untuk Mengisi Saldo', fkontak)
}
handler.tags = ['bca']
handler.help = ['cekakun']
handler.command = /^cek(akun|saldo)$/i

module.exports = handler
