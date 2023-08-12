// Base Ori By DzHostingID
// Jan lupa subrek chanel gwehj🗿👌  https://youtube.com/@DzOfcc
// Wts? cet wa.me/6285624116425

const fs = require('fs')
const chalk = require('chalk')
// EDIT NYA DISINI BANHJ
//=================================================//
global.owner = ['62877333984890', '6285728472426', '62857284724266'] // no own
global.nomerOwner = '6287733984890', '6285728472426', '62857284724266'
global.owners = '+62 857-2847-2426'
global.namebot = 'Zenn.HostingID - Bot Orders' // Nama Bot Lu
global.nameowner = 'ZennHostingID' // Nama Lu
global.packname = 'Made With Zenn.Offc' // nama pack sticker
global.author = '@Zenn.HostingID'// nama author 
global.ig = 'https://instagram.com/zennhostingid' // Link ig lu
global.gcwa = 'https://chat.whatsapp.com/' // Gc Lu
global.version = '14' // Gosah Diubah
global.themeemoji = '🥀'
global.domain = '-' // Isi Domain Panel Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs bot yang dipake
global.eggspmmp = '17' // id eggs PocketmineMP
global.eggsbedrock = '18' // id eggs bedrock
global.eggsjava = '3' // id eggs paper
global.location = '1' // id location

//=================================================//

global.logo = { url: 'https://telegra.ph/file/2da1340f29c77f7eb5098.jpg'}
global.qrisdana = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg'}
global.qrisgopay = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg'}
global.qrislinkaja = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg'}
global.jasapanel = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg'}
global.anjay = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg'}
global.qrisdonate = { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg' } // Gosah dignti

//=================================================//
// Terserah mau diganti apa kaga, ini teks cumn buat nerima perintah khusus
// Tapi Bakalan Keubah Semua Dalam 1 Kata Ke Perintah Lain

global.mess = {
    wait: '🚩 Wait A Minute!..',
    succes: '🚩 Succes!',
    publics: '🚩 Succes changed to public!',
    selfs: '🚩 Succes changed to self!',
    admin: '🚩 Admin Only!',
    botAdmin: '🚩 Bot is not Admin!',
    owner: '🚩 Owner Only!',
    group: '🚩 Group Only!',
    private: '🚩 Private Only!',
    seller: '🚩 Reseller Only!',
    premium: '🚩 Premium Only!',
    error: '🚩 Error 404',
    jpmm: `*MASUK, 500 MEM BAGI² ADMIN PANEL*\n${gcwa}`, // Custom Text Autojpm Disini Ya Mek
    
//=================================================//
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Updating New File At ${__filename}`))
delete require.cache[file]
require(file)
})