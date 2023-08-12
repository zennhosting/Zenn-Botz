// Kalo Mau Recode, Kasih Credit DzHostingID
// Kalo Mau Dijual Lagi, Jangan Dipake Penipuan, Dipake Penipuan
// Proyek Script Ga Dilanjut+G Disell Lgi
// Base Ori By DzHostingID
require('../config/settings')
require('../basedz/listmenu')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const { jadibot, conns } = require("../jadibot");
const fs = require("fs");
const { modul } = require('../module');
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { addSaldo, minSaldo, cekSaldo } = require('../basedz/database/deposit');
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { uptotelegra } = require('./lib/upload')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
module.exports = Dzhost = async (Dzhost, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const qtod = m.quoted? "true":"false"
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antihttps = JSON.parse(fs.readFileSync('./database/antihttps.json'));
const antihttp = JSON.parse(fs.readFileSync('./database/antihttp.json'));
const antibitly = JSON.parse(fs.readFileSync('./database/antibitly.json'));
const autojpm = JSON.parse(fs.readFileSync('./database/autojpm.json'));
const botNumber = await Dzhost.decodeJid(Dzhost.user.id)
const isDzOwn = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const owner = JSON.parse(fs.readFileSync('./basedz/seller.json').toString())
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const premium = JSON.parse(fs.readFileSync('./basedz/premium.json').toString())
const isPremiums = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Dzhost.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntiLink = antilink.includes(from) ? true : false
const isAntiLink2 = antilink2.includes(from) ? true : false
const isAntiWame = antiwame.includes(from) ? true : false
const isAntiHttps = antihttps.includes(from) ? true : false
const isAntiHttp = antihttp.includes(from) ? true : false
const isAntiBitly = antibitly.includes(from) ? true : false
const isAutoJpm = autojpm.includes(from) ? true : false
const senderName = m.pushName
const senderNumber = sender.split('@')[0]
const contacts = JSON.parse(fs.readFileSync("./basedz/data/database/contacts.json"))
const isContacts = contacts.includes(sender)
const datuser = JSON.parse(fs.readFileSync("./basedz/data/user.json"))
const dzimages = fs.readFileSync ('./basedz/logo.jpg')
const ffstalk = require('./lib/ffstalk')
const githubstalk = require('./lib/githubstalk')
const npmstalk = require('./lib/npmstalk')
const mlstalk = require('./lib/mlstalk')
const scp1 = require('./lib/scraper')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./lib/yt')
const db_saldo = JSON.parse(fs.readFileSync('./basedz/database/saldo.json'))
const banned = JSON.parse(fs.readFileSync('./basedz/database/banned.json'))
const isBan = banned.includes(m.sender)
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${namebot} By ${nameowner}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DzBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/1b1b7ace5a98eef2cfde9.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const ftext = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `*Hi ${pushname}👋*\n  ${moment().utcOffset('+0700').format('HH:mm:ss')} ${moment.tz('Asia/Jakarta').format('DD/MM/YYYY')}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./basedz/logo.jpg')}}}
const ftoko = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./basedz/logo.jpg`)},"title": `DzHostingID`,"description": "DzHostingID", "currencyCode": "IDR","priceAmount1000": "999999","retailerId": "DzHostingID","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const pler = JSON.parse(fs.readFileSync('./basedz/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false	

const downloadMp4 = async (Link) => {
let gHz = require("./lib/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Dzhost.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Dzhost.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./lib/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Dzhost.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Dzhost.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

if (!Dzhost.public) {
if (!m.key.fromMe) return
} //  Autojpm By DzHostingID
//=================================================//
if (isGroup && isAutoJpm){
if (budy.match(`chat.whatsapp.com`))
m.reply(mess.jpmm)
}
// AntiLink (No Kick) - By DzHostingID
//=================================================//
if (isGroup && isAntiLink && isBotGroupAdmins){            
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`🚩 Link Group Detected!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/` + await Dzhost.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`🚩 Sorry, You Send Link This Group`)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
Dzhost.sendMessage(m.chat, { delete: m.key })
}
} // Antilink (With Kick) - By DzHostingID
//=================================================//
if (isGroup && isAntiLink2 && isBotGroupAdmins){            
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`🚩 Link Group Detected!\n\nSorry, You will be kicked from this group, byee!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let gclink = (`https://chat.whatsapp.com/` + await Dzhost.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`🚩 Sorry, You Send Link This Group`)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
Dzhost.sendMessage(m.chat, { delete: m.key })
await sleep(500)
Dzhost.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
} // AntiHttps - By DzHostingID
//=================================================//
if (isGroup && isAntiHttps && isBotGroupAdmins){            
if (budy.match(`https://`)) {
m.reply(`🚩 Link Detected!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
Dzhost.sendMessage(m.chat, { delete: m.key })
}
} // AntiWame - By DzHostingID
//=================================================//
if (isGroup && isAntiWame && isBotGroupAdmins){
if (budy.match(`wa.me/`)){
m.reply(`🚩 Link Wame Detected!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
await Dzhost.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.sender
}
}).then((res) => m.reply('🚩 Link deleted')).catch((err) => m.reply(mess.error))
}
} // Antihttp - By DzHostingID
//=================================================//
if (isGroup && isAntiHttp && isBotGroupAdmins){
if (budy.match(`http://`)){
m.reply(`🚩 Link Detected!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
await Dzhost.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.sender
}
}).then((res) => m.reply('🚩 Link deleted')).catch((err) => m.reply(mess.error))
}
} // Antibitly + By DzHostingID
//=================================================//
if (isGroup && isAntiBitly && isBotGroupAdmins){
if (budy.match(`bit.ly`)){
m.reply(`🚩 Link Bit.ly Detected!`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`🚩 Sorry, You're Admin`)
await Dzhost.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.key.id,
participant: m.sender
}
}).then((res) => m.reply('🚩 Link deleted')).catch((err) => m.reply(mess.error))
}
} // Auto Block No +212 + +92 - By DzHostingID
//=================================================//
if (sender.startsWith('212')) {
m.reply(`Sorry Sir ${pushname}, your number has been blocked\nBecause your number is +212🙏`)
setTimeout( () => {
Dzhost.updateBlockStatus(sender, 'block')
}, 500)
}
//=================================================//
if (sender.startsWith('92')) {
m.reply(`Sorry Sir ${pushname}, your number has been blocked\nBecause your number is +92🙏`)
setTimeout( () => {
Dzhost.updateBlockStatus(sender, 'block')
}, 500)
}
// Reading Console Logs
//=================================================//
Dzhost.readMessages([m.key])
if (!isGroup && !isCmd) console.log(color(`[ ${wib} ]`, 'white'), color('[ PRIVATE ]', 'aqua'), color(body.slice(0, 50), 'white'), 'From', color(senderNumber, 'yellow'))
if (isGroup && !isCmd) console.log(color(`[ ${wib} ]`, 'white'), color('[  GROUP  ]', 'aqua'), color(body.slice(0, 50), 'white'), 'From', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'))
if (!isGroup && isCmd) console.log(color(`[ ${wib} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'From', color(senderNumber, 'yellow'))
if (isGroup && isCmd) console.log(color(`[ ${wib} ]`, 'white'), color('[ COMMAND ]', 'aqua'), color(body, 'white'), 'From', color(senderNumber, 'yellow'), 'in', color(groupName, 'yellow'));
//=================================================//

async function loading () {
var dejett = [
"10%",
"30%",
"50%",
"80%",
"100%",
"Processing.."
]
let { key } = await Dzhost.sendMessage(from, {text: 'Load..'})

for (let i = 0; i < dejett.length; i++) {
/*await delay(10)*/
await Dzhost.sendMessage(from, {text: dejett[i], edit: key });
}
}

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: {
"cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
}
}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
}
resolve(result)
})
})
}

switch (command) {
//=================================================//
case 'owner': case 'creator': {
const vcard =
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
`FN:${nameowner}\n` +
`ORG:${namebot};\n` +
`TEL;type=CELL;type=VOICE;waid=${nomerOwner}:+${owners}\n` +
'END:VCARD'
Dzhost.sendMessage(m.chat, {
contacts: {
displayName: nameowner,
contacts: [{ vcard }],
},
}, { quoted: fkontak})
}
break
//=================================================//
case 'antilink2':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink2) return m.reply('🚩 Antilink (with kick) previously active')
antilink2.push(from)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return m.reply('🚩 Antilink (with kick) not yet active')
let anu = antilink2.indexOf(from)
antilink2.splice(anu, 1)
fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
break
//=================================================//
case 'antihttp':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiHttp) return m.reply('🚩 Antihttp previously active')
antihttp.push(from)
fs.writeFileSync('./database/antihttp.json', JSON.stringify(antihttp, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiHttp) return m.reply('🚩 Antihttp not yet active')
let anu = antihttp.indexOf(from)
antihttp.splice(anu, 1)
fs.writeFileSync('./database/antihttp.json', JSON.stringify(antihttp, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
break
//=================================================//
case 'antibitly':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiBitly) return m.reply('🚩 Antibitly previously active')
antibitly.push(from)
fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiBitly) return m.reply('🚩 Antibitly not yet active')
let anu = antibitly.indexOf(from)
antibitly.splice(anu, 1)
fs.writeFileSync('./database/antibitly.json', JSON.stringify(antibitly, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
break
//=================================================//
case 'buyakn':{
if (cekSaldo(sender,db_saldo) < 3000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp3.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!q.split(',')[0]) return m.reply(`🚩 Example : ${prefix+command} email,username\n\n*NOTE:* Harap Isi Email Yang Aktif Dengan Akun Anda, Supaya Bisa Mereset Password Akun Anda Lewat Gmail.`)
if (!q.split(',')[1]) return m.reply(`🚩 Example : ${prefix+command} email,username\n\n*NOTE:* Harap Isi Email Yang Aktif Dengan Akun Anda, Supaya Bisa Mereset Password Akun Anda Lewat Gmail.`)
let d = (await Dzhost.onWhatsApp(sender.split('@')[0]))[0] || {}
let psswd = d.exists ? require("crypto").randomBytes(5).toString('hex') : username+'7739'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": q.split(',')[0],
"username": q.split(',')[1],
"first_name": q.split(',')[1],
"last_name": "Memb",
"language": "en",
"password": psswd
})
})
let res = await f.json();
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
Dzhost.sendMessage(from, { text: `*SUCCESSFULLY BUY ACCOUNT*\n\n*TYPE:* user\n\n*ID:* ${res.attributes.id}\n*UUID:* ${res.attributes.uuid}\n*USERNAME:* ${res.attributes.username}\n*EMAIL:* ${res.attributes.email}\n*FIRST NAME/LAST NAME:* ${res.attributes.first_name}/${res.attributes.last_name}\n*CREATED AT:* ${res.attributes.created_at}\n\n*Password has been sended to @${sender.split('@')[0]}*`, mentions: [sender]}, { quoted: m })
Dzhost.sendMessage(sender, { text: `HAI KAK, INI ADALAH AKUNMU\n\n*EMAIL:* ${res.attributes.email}\n*USERNAME:* ${res.attributes.username}\n*PASSWORD:* ${psswd}\n*LOGIN:* ${domain}\n\n*📮 Terms Of Service From DzHostingID*\n\n- Jangan Dijual Kembalikan Akun Panel!\n- Jangan Menyebar Domain Panel!\n- Jangan Dibiarkan Tidak Dipakai!\n\n*NOTE:* Jika Ingin Buy Servers, Silahkan Ketik .buysrv Ya Kak:)`,})
}           
minSaldo(sender, 3000, db_saldo)
break
//=================================================//
case 'user':  {
if (!isDzOwn) return m.reply(mess.owner)
if (!args[0]) return m.reply(`🚩 Example : ${prefix + command} add 6285624116425`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('🚩 This User Has Been Banned.')
banned.push(orgnye)
m.reply(mess.succes)
} else if (args[0] === "del") {
if (!isBane) return m.reply('🚩 This User Has Been Unbanned.')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
m.reply(mess.succes)
} else {
m.reply(mess.error)
}
}
break
//=================================================//
case 'listprem': case 'listpremium': {
const premiumdz = `🚩 LIST BUY PREMIUM WITH BALANCE
▬▭▬▭▬▭▬▭▬▭▬▭▬
- ${prefix}buyprem7days
- ${prefix}buyprem14days
- ${prefix}buyprem18days
- ${prefix}buyprem30days
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Dzhost.sendMessage(from, { text:premiumdz }, {quoted:fkontak})
}
break
//=================================================//
case "buysrv": {
const textsrv = `*Hi, @${sender.split("@")[0]}*

• *Saldo:* _Rp${toRupiah(cekSaldo(sender, db_saldo))}_
• *Name:* ${pushname}
• *ID*: _${sender.replace("@s.whatsapp.net", "")}_
▬▭▬▭▬▭▬▭▬▭▬▭▬
*LIST SERVERS CAN CREATE WITH BALANCE*

- ${prefix}srv1gb *RAM 1GB/1GB VCPU 80%*
- ${prefix}srv2gb *RAM 2GB/2GB VCPU 100%*
- ${prefix}srv4gb *RAM 4GB/4GB VCPU 140%*
- ${prefix}srv6gb *RAM 6GB/6GB VCPU 155%*
- ${prefix}srv8gb *RAM 8GB/8GB VCPU 175%*
- ${prefix}srv10gb *RAM 10GB/10GB VCPU 200%*

*NOTE:* 
Pilih Salah Satu Saldo Yang Mencukupi Dengan Akunmu
Transaksi Hanya 1×, Tidak Bisa Di Reffund/Ganti!
▬▭▬▭▬▭▬▭▬▭▬▭▬`
Dzhost.sendMessage(from, { text: textsrv, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak })
}
break
//=================================================//
case "srv1gb": {
if (cekSaldo(sender,db_saldo) < 5000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp5.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "1024"
let disk = "80"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "1gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 1GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 5000, db_saldo)
break
//=================================================//
case "srv2gb": {
if (cekSaldo(sender,db_saldo) < 8000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp8.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "2048"
let disk = "100"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "2gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 2GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 8000, db_saldo)
break
//=================================================//
case "srv4gb": {
if (cekSaldo(sender,db_saldo) < 14000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp14.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4096"
let cpu = "4096"
let disk = "140"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "4gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 4GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 14000, db_saldo)
break
//=================================================//
case "srv6gb": {
if (cekSaldo(sender,db_saldo) < 20000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp20.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "6144"
let disk = "155"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "6gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 6GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 20000, db_saldo)
break
//=================================================//
case "srv8gb": {
if (cekSaldo(sender,db_saldo) < 27000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp27.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "8192"
let disk = "175"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "8gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 8GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 27000, db_saldo)
break
//=================================================//
case "srv10gb": {
if (cekSaldo(sender,db_saldo) < 30000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp30.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example : ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "10240"
let disk = "200"
let email = username + "@gmail.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "10gb"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Panel 10GB!\nServer ID: ${user.id}`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panelmnu

○ USERNAME : ${user.username}
○ PASSWORD : ${password}
○ LOGIN : ${domain}

*📮 Terms Of Service From DzHostingID*
- Jangan Membiarkan Panel Tidak Digunakan Selama 5 Hari Lebih!
- Jangan Digunakan Sampai Overload!
- Jangan Menyebarkan Domain Panel!
- Jangan Dijual Kembali Akun Panel! (Owner Tidak Bertanggung Jawab)
- Jangan Multi Login! (Jika Sudah Izin Dengan Owner)`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succes! Silahkan Cek Akun Panel Tersebut\nJika Errror, Silahkan Chat Customer Service Untuk Di Fix.`)
}
minSaldo(sender, 30000, db_saldo)
break
//=================================================//
case "buyprem7days":{
if (cekSaldo(sender,db_saldo) < 15000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp15.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`🚩 Example : ${prefix+command} number`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Dzhost.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`🚩 Invalid Number!`)
premss.push(prrkek)
fs.writeFileSync("./basedz/premium.json", JSON.stringify(premss))
m.reply(`Congratulations! *${pushname}*
_You Have Successfully Buy Premium Acces For 7 Days._`)
}
minSaldo(sender, 15000, db_saldo)     
break
//=================================================//
case "buyprem14days":{
if (cekSaldo(sender,db_saldo) < 19000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp19.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`🚩 Example : ${prefix+command} number`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Dzhost.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`🚩 Invalid Number!`)
premss.push(prrkek)
fs.writeFileSync("./basedz/premium.json", JSON.stringify(premss))
m.reply(`Congratulations! *${pushname}*
_You Have Successfully Buy Premium Acces For 14 Days._`)
}
minSaldo(sender, 19000, db_saldo)     
break
//=================================================//
case "buyprem18days":{
if (cekSaldo(sender,db_saldo) < 26000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp26.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`🚩 Example : ${prefix+command} number`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Dzhost.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`🚩 Invalid Number!`)
premss.push(prrkek)
fs.writeFileSync("./basedz/premium.json", JSON.stringify(premss))
m.reply(`Congratulations! *${pushname}*
_You Have Successfully Buy Premium Acces For 18 Days._`)
}
minSaldo(sender, 26000, db_saldo)     
break
//=================================================//
case "buyprem30days":{
if (cekSaldo(sender,db_saldo) < 35000) return Dzhost.sendMessage(from, { text: `Maaf Kak, *@${sender.split('@')[0]}*\nSepertinya Saldo Kamu Kurang Dari Rp35.000 Untuk Melakukan Pembelian, Silahkan Melakukan Deposit Terlebih Dahulu Sebelum ${command}`, mentions: [sender]}, { quoted: m })
if (!args[0]) return m.reply(`🚩 Example : ${prefix+command} number`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Dzhost.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`🚩 Invalid Number!`)
premss.push(prrkek)
fs.writeFileSync("./basedz/premium.json", JSON.stringify(premss))
m.reply(`Congratulations! *${pushname}*
_You Have Successfully Buy Premium Acces For 30 Days._`)
}
minSaldo(sender, 35000, db_saldo)     
break
//=================================================//
case 'minsaldo':
if (!isDzOwn) m.reply(mess.owner) 
if (!q.split(",")[0]) return m.reply(`🚩 Example : ${prefix+command} number,jumlah`)
if (!q.split(",")[1]) return m.reply(`🚩 Example : ${prefix+command} number,jumlah`)
if (cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) < q.split(",")[1] && cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo) !== 0) return m.reply(`Dia saldonya ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)}, jadi jangan melebihi ${cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo)} yah kak🙏`)
minSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
await sleep(50)
m.reply(`「 *SALDO USERS* 」
- Tag: ${q.split(",")[0]}
- Number: @${q.split(",")[0]}
- Date: ${tanggal}
- Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
break
//=================================================//
case 'acc':{
if (!isDzOwn) return m.reply(mess.owner)
if (!q.split(",")[0]) return m.reply(`🚩 Example : ${prefix+command} number,amount`)
if (!q.split(",")[1]) return m.reply(`🚩 Example : ${prefix+command} number,amount`)
addSaldo(q.split(",")[0]+"@s.whatsapp.net", Number(q.split(",")[1]), db_saldo)
m.reply(`「 *SALDO USERS* 」

- Tag: @${sender.split("@")[0]}
- Nomer: @${q.split(",")[0]}
- Date: ${tanggal}
- Saldo: Rp${toRupiah(cekSaldo(q.split(",")[0]+"@s.whatsapp.net", db_saldo))}, `)
}
//=================================================//
case 'kirim': {
let messageText = `Hai Kak, *${pushname}*\nDeposit Sebesar *${q.split(",")[1]}* Sudah Diterima Oleh Owner Dan Masuk Ke Akun Kamu\nSilahkan Cek Saldo Dengan .saldo`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;
Dzhost.sendMessage(targetNumber, {
text: `${messageText}`,
mentions: [sender]
}, {
quoted: fkontak
}).then(() => {
m.reply('Confirmed Deposit Succes!');
}).catch(() => {
m.reply(mess.error);
});
}
break;
//=================================================//
case 'bukti':{
let jumlah = args[0]
if (!jumlah) return m.reply('Jumlah?')
m.reply(`Oke Kak ${pushname}, Deposit Terkirim Ke ${nameowner}\nSilahkan Menunggu Untuk Menerima Deposit Dari Owner.`)
Dzhost.sendMessage('6285624116425@s.whatsapp.net', { text: `Ada Yang Mau Deposit Kak, Sejumlah *${jumlah}*\nDari *@${sender.split('@')[0]}*\nIngin Confirm Deposit?, Ketik ${prefix}acc\nIngin Menolak? Biarkan Saja.`, mentions: [sender]}, { quoted: fkontak })
}
break
//=================================================//
case 'saldo':{
m.reply(`*━━ CHECK YOUR BALANCE ━━*

 • *Name:* ${pushname}
 • *Number:* ${sender.split('@')[0]}
 • *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}

*Note :*
_Saldo hanya bisa untuk beli di bot_
_Tidak bisa ditarik atau transfer_!`)
}
break
//=================================================//
case "deposit":
depo = `Hi, @${sender.split("@")[0]}
📌 Choose Payment And Send Evidence Of Transfer

${prefix}dana - Active ✓
${prefix}ovo - Active ✓
${prefix}gopay - Active ✓
${prefix}linkaja - Active ✓
${prefix}qris - Active ✓

*NOTE:* Setelah Melakukan Transfer, Harap Kirim Bukti Dengan Foto\nLalu Kirim Foto Dengan Caption ${prefix}bukti *nominal yg ditransfer*`
Dzhost.sendMessage(from, {text : depo, mentions:[sender]}, {quoted : fkontak}) 
break      
//=================================================//  
case "listusr": {
if (!isDzOwn) return m.reply(mess.owner)
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "🚩 List User Panel DzHostingID\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `📮 ID: ${u.id} - 🚩 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `📌 Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `👤 Total Users: ${res.meta.pagination.count}`;
await Dzhost.sendMessage(m.chat, { text: messageText }, { quoted: fkontak });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`🚩 Example: ${prefix}listusr ${res.meta.pagination.current_page + 1} for next page.`);
}
}
break;
//=================================================//
case "listsrv": {
if (!isDzOwn) return m.reply(mess.owner);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
let sections = [];
let messageText = "🚩 List Servers Of Panel DzHostingID:\n\n";
for (let server of servers) {
let s = server.attributes;    
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});    
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;    
messageText += `📮 ID Servers: ${s.id}\n`;
messageText += `👤 Name Servers: ${s.name}\n`;
messageText += `🚩 Status: ${status}\n\n`;
}
messageText += `📌 Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `⚡ Total Server: ${res.meta.pagination.count}`;
await Dzhost.sendMessage(m.chat, { text: messageText }, { quoted: fkontak });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`🚩 Example: ${prefix}listsrv ${res.meta.pagination.current_page + 1} for next page.`);
}
}
break;
//=================================================//
case "listadmin": {
if (!isDzOwn) return m.reply(mess.owner);
let page = args[0] ? args[0] : '1';
let f = await fetch(domain + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "🚩 List Admin Panel DzHostingID\n\n";
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `👤 ID: ${u.id} - 🚩 Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
}
messageText += `📌 Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `👤 Total Admin: ${res.meta.pagination.count}`;
await Dzhost.sendMessage(m.chat, { text: messageText }, { quoted: fkontak });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`🚩 Example: ${prefix}listusr ${res.meta.pagination.current_page + 1} for next page.`);
}
}
break;
//=================================================//
case 'autojpm':{
if (!isGroup) return m.reply(mess.group)
if (!isDzOwn) return m.reply(mess.owner)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAutoJpm) return m.reply('🚩 Autojpm previously active')
autojpm.push(from)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(autojpm, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAutoJpm) return m.reply('🚩 Autojpm not yet active')
let anu = autojpm.indexOf(from)
autojpm.splice(anu, 1)
fs.writeFileSync('./database/autojpm.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
}
break
//=================================================//
case 'reinstall': case 'rein': {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
await loading()
if (!srv) return m.reply('ID?')
await loading()
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply(`🚩 Succes Reinstall!`)
}
break
//=================================================//
case "removeall": case "kickall": case "kudeta": {
if (!isDzOwn) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin) (from)
let data = participants.map((x) => x.id)
for (let x of data) {
if (x !== botNumber && x !== groupMetadata.owner && x !== owner[0] + "@s.whatsapp.net") {
Dzhost.groupParticipantsUpdate(m.chat, [x], "remove")
await sleep(1000) 
}}}
break
//=================================================//
case'demoteall':
if (!isDzOwn) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
var groupe = await Dzhost.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Dzhost.groupParticipantsUpdate(from, mems, 'demote')
break
//=================================================//
case'promoteall':
if (!isDzOwn) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
var groupe = await Dzhost.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
Dzhost.groupParticipantsUpdate(from, mems, 'promote')
break
//=================================================//
case 'suspend': case 'sus': {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply(`🚩 Succes Suspend!`)
}
break
//=================================================//
case 'unsuspend': case 'unsus': {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply(`🚩 Succes Unsuspend!`)
}
break
// Menu List By DzHostingID
//=================================================//
case 'help': case 'list': case 'menu': {
let owners1 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dztime = `Time ${wib}`
let dzcom = `Hi, @${sender.split("@")[0]} Choose The Menu.
Runtime: ${runtime(process.uptime())}
Creator: @${owners1.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
❏${prefix}allmenu
❏${prefix}resellermenu
❏${prefix}depositmenu
❏${prefix}domainmenu
❏${prefix}panelmenu
❏${prefix}hostingmenu
❏${prefix}pushkontakmenu
❏${prefix}storemenu
❏${prefix}jadibotmenu
❏${prefix}downloadermenu
❏${prefix}stalkermenu
❏${prefix}groupmenu
❏${prefix}ownermenu
❏${prefix}animemenu
❏${prefix}payment
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners1],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners1],
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: true,
title: `${namebot}`,
body: dztime,
containsAutoReply: true,
mediaType: 1, 
thumbnail: dzimages,
mediaUrl: `${gcwa}`,
sourceUrl: `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'jadibotmenu': {
owners2 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners2.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${jadibotmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners2],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners2],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'payment': {
owners3 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners3.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${payment(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners3],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners3],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'resellermenu': {
owners4 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners4.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${resellermenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners4],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners4],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'domainmenu': {
owners5 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners5.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${domainmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners5],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners5],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'panelmenu': case 'panel': {
owners6 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners6.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${panelmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners6],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners6],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'pushkontakmenu': case 'pkmenu': {
owners7 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners7.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${pushkontakmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners7],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners7],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'storemenu': case 'store': {
owners8 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners8.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${storemenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners8],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender,owners8],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'groupmenu': case 'gcmenu': {
owners9 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners9.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${groupmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners9],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners9],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'othermenu': {
owners10 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners10.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${othermenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners10],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners10],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'ownermenu': case 'dzmenu': {
owners11 = `${nomerOwner}@s.whatsapp.net`
var dejet = await getBuffer('Owner Menu')
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners11.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${ownermenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners11],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners11],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'animemenu': {
owners12 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners12.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${animemenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners12],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners12],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'hostingmenu': case 'hosting': {
owners13 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners13.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${hostingmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners13],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners13],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'stalkermenu': {
owners14 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners14.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${stalkermenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners14],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners14],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'allmenu': {
owners15 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]} This Is Allmenu.
Runtime: ${runtime(process.uptime())}
Creator: @${owners15.split("@")[0]}
Time: ${wib}
Version: ${version}
${allmenu(prefix)}`
mentions:[sender, me, owners15],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners15],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'downloadmenu': case 'downloadermenu': case 'dmenu': {
owners16 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners16.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${downloadermenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners16],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners16],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'depositmenu': {
owners17 = `${nomerOwner}@s.whatsapp.net`
let me = m.sender
let dzcom = `Hi, @${sender.split("@")[0]}
Runtime: ${runtime(process.uptime())}
Creator: @${owners17.split("@")[0]}
Time: ${wib}
Version: ${version}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
${depositmenu(prefix)}
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
mentions:[sender, me, owners17],
Dzhost.sendMessage(from, { 
text: dzcom,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender, owners17],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${namebot}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": dzimages,
"mediaUrl": `${gcwa}`,
"sourceUrl": `${gcwa}`
}
}
}, { quoted: fkontak })
}
break
//=================================================//
case 'play':  case 'song': case 'ytmp3': {
if (!text) return m.reply(`🚩 Example : ${prefix + command} Night Changes`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const dzplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
let search = await yts(text)
let anup3k = search.videos[0]
const pl= await dzplaymp3.mp3(anup3k.url)
await Dzhost.sendMessage(m.chat,{
audio: fs.readFileSync(pl.path),
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4', ptt: true,
contextInfo:{
externalAdReply:{
title:anup3k.title,
body: namebot,
thumbnail: await fetchBuffer(pl.meta.image),
mediaType:2,
mediaUrl:anup3k.url,
}
},
},{quoted:fkontak})
await fs.unlinkSync(pl.path)
}
break
//=================================================//
case 'mediafire':
if (!q) return m.reply(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('The link you sent is not a mediafire link or the link is invalid!')
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
let medfr = await scp1.mediafire(q)
await Dzhost.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : dzimages, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:fkontak})
break
//=================================================//
case "tqto": case "thanksto":{ // Napa Di Enc? Enc Buat Naroh Credit Aja, Gosah Dihapus
(function(_0x1118c5,_0x3a4e25){function _0x52c57e(_0x7074fa,_0x2efa20,_0x171da7,_0x193854){return _0x1ce7(_0x2efa20-0x355,_0x7074fa);}function _0x8ed0bc(_0x15e9fd,_0xbd868f,_0x33d300,_0x4fc071){return _0x1ce7(_0x33d300- -0x278,_0xbd868f);}var _0x2c5a09=_0x1118c5();while(!![]){try{var _0x1e9f9d=-parseInt(_0x8ed0bc(-0x137,-0x160,-0x151,-0x12d))/(-0x1*0x14d9+-0x5d6+0x1ab0)+-parseInt(_0x52c57e(0x4f4,0x4cb,0x4e9,0x4b8))/(0x1712+0x64c+-0x2*0xeae)*(parseInt(_0x8ed0bc(-0xff,-0x140,-0x114,-0x12d))/(0x3d*-0x3e+-0x35e+0x1227))+parseInt(_0x52c57e(0x4dd,0x4c5,0x4df,0x4bd))/(0x16a8+-0x3*0x1c5+-0x1155)+-parseInt(_0x52c57e(0x494,0x4b6,0x4b9,0x4a8))/(-0x24*-0x9b+0x1*-0x2333+0x2*0x6b6)+-parseInt(_0x8ed0bc(-0x14f,-0x114,-0x130,-0x143))/(-0x4f5+-0x1fa7+0x24a2)+parseInt(_0x8ed0bc(-0x11f,-0x114,-0x11e,-0x103))/(0xb0*0x1+0x1*0xb3+-0x15c)+-parseInt(_0x8ed0bc(-0x11a,-0x115,-0x141,-0x122))/(-0x2*-0xf4d+-0x259a*-0x1+-0x442c)*(-parseInt(_0x52c57e(0x47c,0x49b,0x499,0x495))/(-0x3*-0x6dd+-0xdfa*-0x1+-0x2288));if(_0x1e9f9d===_0x3a4e25)break;else _0x2c5a09['push'](_0x2c5a09['shift']());}catch(_0xe58d61){_0x2c5a09['push'](_0x2c5a09['shift']());}}}(_0x144c,0xd*0x3059+-0x2b52a+0x2*0x1bd81));function _0x1ce7(_0x1405e8,_0x69c80e){var _0x14eefa=_0x144c();return _0x1ce7=function(_0x2c7a20,_0x46da9e){_0x2c7a20=_0x2c7a20-(-0x7c9*0x1+0x2427+-0x1b3a);var _0xf91ffa=_0x14eefa[_0x2c7a20];if(_0x1ce7['YioLWw']===undefined){var _0x58c990=function(_0x5317d9){var _0x58205d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x36fd08='',_0x2a1b8f='',_0x1999cf=_0x36fd08+_0x58c990;for(var _0x1fb714=0xdc5+0x204a+-0x2e0f,_0x5686d2,_0x4df078,_0x1fdca9=0x1ff8+0x170e+-0x1*0x3706;_0x4df078=_0x5317d9['charAt'](_0x1fdca9++);~_0x4df078&&(_0x5686d2=_0x1fb714%(0x1*-0x15dd+0xcc*-0x4+0x1911)?_0x5686d2*(-0x118b+-0x81*-0x33+0xb8*-0xb)+_0x4df078:_0x4df078,_0x1fb714++%(0x54d+0x19f*-0x1+-0x3aa*0x1))?_0x36fd08+=_0x1999cf['charCodeAt'](_0x1fdca9+(-0x166e+0xbcf*0x1+-0x1*-0xaa9))-(0x3*0x223+-0x1*-0x2653+-0x773*0x6)!==0x15a1+-0x8d0+0xcd1*-0x1?String['fromCharCode'](0x2224*-0x1+-0x1*0x1613+0x3936&_0x5686d2>>(-(0xdcc+-0x1*-0x179b+0x1*-0x2565)*_0x1fb714&-0xb79*0x1+-0x975+0x14f4)):_0x1fb714:0x2140+-0x14be+-0xc82){_0x4df078=_0x58205d['indexOf'](_0x4df078);}for(var _0x471d2e=-0x25*-0x1+0x5e3+-0x4*0x182,_0x356c5b=_0x36fd08['length'];_0x471d2e<_0x356c5b;_0x471d2e++){_0x2a1b8f+='%'+('00'+_0x36fd08['charCodeAt'](_0x471d2e)['toString'](0x23*-0x1a+0x5*0x6e1+-0x1*0x1ec7))['slice'](-(0x2556+0x1*-0x134f+0x293*-0x7));}return decodeURIComponent(_0x2a1b8f);};_0x1ce7['ageAKa']=_0x58c990,_0x1405e8=arguments,_0x1ce7['YioLWw']=!![];}var _0x556190=_0x14eefa[0x2*-0x4e4+-0x1*-0xbff+-0x237],_0x2e90ea=_0x2c7a20+_0x556190,_0x220ad7=_0x1405e8[_0x2e90ea];if(!_0x220ad7){var _0xf53847=function(_0x25cf1e){this['jultMO']=_0x25cf1e,this['gJBxXW']=[-0x1*-0x123b+0x3e*-0xd+0x78a*-0x2,-0x7c*-0x3e+0x4ef*0x1+-0x22f7,0x229f+-0x1d80+-0x51f],this['iswcQC']=function(){return'newState';},this['WkqxgH']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['RKqsAy']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0xf53847['prototype']['uqmMbJ']=function(){var _0x29a057=new RegExp(this['WkqxgH']+this['RKqsAy']),_0x4adca3=_0x29a057['test'](this['iswcQC']['toString']())?--this['gJBxXW'][0x1*0x1949+-0x2581+0x7*0x1bf]:--this['gJBxXW'][0x369*-0xa+-0x1bba+0x3dd4];return this['FhJcjZ'](_0x4adca3);},_0xf53847['prototype']['FhJcjZ']=function(_0x11fad0){if(!Boolean(~_0x11fad0))return _0x11fad0;return this['bLAFiF'](this['jultMO']);},_0xf53847['prototype']['bLAFiF']=function(_0x1d6a42){for(var _0x5c8664=0x2*-0x1075+-0x20*0x94+0x336a,_0x2f1fa8=this['gJBxXW']['length'];_0x5c8664<_0x2f1fa8;_0x5c8664++){this['gJBxXW']['push'](Math['round'](Math['random']())),_0x2f1fa8=this['gJBxXW']['length'];}return _0x1d6a42(this['gJBxXW'][0x1*0x16bb+0xfec+-0x26a7]);},new _0xf53847(_0x1ce7)['uqmMbJ'](),_0xf91ffa=_0x1ce7['ageAKa'](_0xf91ffa),_0x1405e8[_0x2e90ea]=_0xf91ffa;}else _0xf91ffa=_0x220ad7;return _0xf91ffa;},_0x1ce7(_0x1405e8,_0x69c80e);}function _0x264815(_0x5a81d8,_0x265252,_0x1df393,_0x45cc2e){return _0x1ce7(_0x1df393-0x35,_0x265252);}var _0x16a86e=(function(){var _0x76f3c8={};function _0x44591d(_0x57f72b,_0x249e53,_0x15bdc7,_0x3ad044){return _0x1ce7(_0x249e53-0x175,_0x3ad044);}_0x76f3c8[_0x44591d(0x2c1,0x29e,0x2ca,0x295)]=function(_0x7fc9ca,_0x2990d6){return _0x7fc9ca!==_0x2990d6;},_0x76f3c8[_0x36fb74(0x176,0x15c,0x18d,0x17a)]=_0x36fb74(0x179,0x187,0x178,0x14d);function _0x36fb74(_0xccd2a4,_0x1e4dc6,_0xbbca05,_0x111840){return _0x1ce7(_0xccd2a4- -0x6,_0x111840);}_0x76f3c8[_0x44591d(0x2d3,0x2ec,0x300,0x318)]=function(_0x1dafa2,_0x10f60c){return _0x1dafa2===_0x10f60c;};var _0x84b23=_0x76f3c8,_0x3c0b76=!![];return function(_0x54e1fc,_0x3e701b){function _0x52da77(_0x4cbe68,_0x9cc448,_0x297730,_0x2d4551){return _0x36fb74(_0x2d4551- -0x1b2,_0x9cc448-0x9a,_0x297730-0x1a4,_0x9cc448);}function _0x4546cf(_0x21d25e,_0xdd0228,_0x24dcf4,_0x146c32){return _0x44591d(_0x21d25e-0x5,_0xdd0228- -0x468,_0x24dcf4-0x8e,_0x21d25e);}if(_0x84b23[_0x52da77(-0x1e,-0x48,-0x15,-0x41)](_0x4546cf(-0x17e,-0x181,-0x154,-0x18d),_0x52da77(-0x4d,-0x53,-0x6d,-0x76))){var _0xd9a58f=_0x1b22fd?function(){function _0x5079a1(_0x4ed51d,_0x18e833,_0x57cc10,_0x283ba9){return _0x4546cf(_0x57cc10,_0x283ba9-0x380,_0x57cc10-0x3a,_0x283ba9-0x10c);}if(_0x4474f7){var _0x5e2fc2=_0x135ea3[_0x5079a1(0x1eb,0x1e1,0x1c4,0x1c2)](_0x31edbd,arguments);return _0x5a3e7a=null,_0x5e2fc2;}}:function(){};return _0x16f82b=![],_0xd9a58f;}else{var _0x297197=_0x3c0b76?function(){function _0x4f3d41(_0x209143,_0x46e497,_0x200a79,_0x274f9e){return _0x4546cf(_0x200a79,_0x46e497-0x4f0,_0x200a79-0x150,_0x274f9e-0x146);}function _0x48aac0(_0x5848f0,_0x12170e,_0x5c4a61,_0x5c1e8b){return _0x52da77(_0x5848f0-0x120,_0x12170e,_0x5c4a61-0x13e,_0x5c1e8b-0x2da);}if(_0x3e701b){if(_0x84b23[_0x48aac0(0x272,0x262,0x24f,0x24b)](_0x48aac0(0x292,0x26e,0x29e,0x27d),_0x84b23[_0x48aac0(0x2b8,0x2a5,0x2c3,0x29e)])){var _0x651d98=_0x3e701b[_0x4f3d41(0x342,0x332,0x322,0x32d)](_0x54e1fc,arguments);return _0x3e701b=null,_0x651d98;}else{var _0x5486e5=_0x4a1637['apply'](_0x24ee2d,arguments);return _0x12f030=null,_0x5486e5;}}}:function(){};return _0x3c0b76=![],_0x297197;}};}()),_0x571966=_0x16a86e(this,function(){function _0x54fbd8(_0x302445,_0x40ac33,_0xddbd0,_0x5a3677){return _0x1ce7(_0x40ac33-0x10c,_0x302445);}function _0x50004a(_0x1a9cc9,_0x215654,_0x211323,_0x4aa5e2){return _0x1ce7(_0x4aa5e2-0x1a4,_0x1a9cc9);}var _0x4d7312={};_0x4d7312[_0x54fbd8(0x228,0x236,0x24e,0x239)]=_0x54fbd8(0x254,0x237,0x254,0x217)+'+$';var _0x32ca10=_0x4d7312;return _0x571966[_0x54fbd8(0x230,0x253,0x229,0x240)]()[_0x54fbd8(0x25c,0x238,0x251,0x221)](_0x32ca10['FoKMs'])[_0x54fbd8(0x26c,0x253,0x26b,0x22e)]()[_0x54fbd8(0x26a,0x27b,0x267,0x259)+'r'](_0x571966)[_0x54fbd8(0x25b,0x238,0x251,0x235)](_0x32ca10[_0x50004a(0x2f1,0x2ba,0x2b1,0x2ce)]);});_0x571966();function _0x144c(){var _0xa04481=['y29UC29Szq','mJu0nZqWnuHRC0jRzW','BhLnAvC','q3zbBLK','t3nfC0i','cI0Gqa','C2vUze1LC3nHzW','E30Uy29UC3rYDq','mta4mdeZmfvfr1r2sG','DcbiAw5Nz2eGqq','Aw5NsuqkcLbYBW','mtC5mdm3u2nNqvfy','u25uvMu','yxqGugfKysbuyq','DMDABuK','ndi1qhmUD2HHDa','mtG5qhmUD2HHDa','CYbczxjSyw5QDq','qNPmBwO','Axb0igH0DhbZoG','zxHJzxb0Aw9U','ifnHEwe6raOkua','y29UC3rYDwn0BW','nZm2nJy4zeLtte9H','icHdCMvHDg9Ykq','CK1eAxu','BMDNywWGkJi1lq','B25HC2KSifnPBa','B25HC2KGrgfUia','nLDxAuLHtW','BNr5rfC','zxjYB3i','uwnOB1G','otK1mebZlNDOyq','DgfIBgu','DhfiALK','qwrHifLHBMCGra','DcbjBMKGrgLIDq','vxPZvfC','yxjHCaPtywPHia','ywHRyw4Grg9Uyq','cLLHBMCGrgL0zq','mJCXmda4BLj1q0Lr','lY95B3v0Ds5Izq','EvLHtMC','rM9ltxm','kcGOlISPkYKRkq','C2vHCMnO','ELLmv0W','C3bSAxq','v0TLDhe','BgvUz3rO','C2KGrgLZAw5PcG','Eujzt3K','EKHVC3rPBMDjra','ufbyr2q','yxbWBhK','AYbnzw1HA3nHla','nZGWntzsAervv00','BNr1A2fUlGPkAq','sLvxugC','nJi4ntyYndeXnG','AMvJDcbty3jPCa','y3rVCIGICMv0Dq','lsba','iefRyw4GvgvYDq','x19WCM90B19F','D2fYBG','ChjVDg90ExbL','D09QCvK','CxvVDgvK','C2fWCc5Uzxq','nJi4mJeYntaWmG','nduWDLjnzhnr','Dg9tDhjPBMC','otq5odCYuxb0AK9c','yMLUza','Bg9N','CMv2Awv3ifnJCG','ALnMsha','CM4GDgHPCYiPka','D2vYAweUy28Vra','nJi4odeWmJyZmG','A2eGsw5NAw4Gra','CwPbsfe','l2zKweroyKT4Ba','44coipcDL6FWNzEB8j2xLpcDL6hWNzEE8j2xPIdWNzEN','iej5ier6sg9ZDa','ifnHEweGqMvYAa','EwvRB3u','icHizwXWzxiPcG','8j2xOIdJGi8GcI0Gqa'];_0x144c=function(){return _0xa04481;};return _0x144c();}function _0x5afef9(_0x3ebd46,_0x46d704,_0x5f2768,_0x50108e){return _0x1ce7(_0x46d704-0x387,_0x5f2768);}var _0x81ee27=(function(){var _0x37bbaf=!![];return function(_0x4621b3,_0xc92055){var _0x5d2650={};function _0x538483(_0x2b08db,_0x42941c,_0x9bf696,_0x48bca6){return _0x1ce7(_0x48bca6- -0x1a4,_0x42941c);}function _0x5ba816(_0x4c890a,_0xcf430e,_0x5018e9,_0x1fd0dc){return _0x1ce7(_0x4c890a- -0x73,_0x1fd0dc);}_0x5d2650[_0x538483(-0x5e,-0x60,-0x31,-0x39)]=_0x538483(-0x3b,-0x36,-0x75,-0x48);var _0x262fbb=_0x5d2650,_0x38c86e=_0x37bbaf?function(){function _0xab7dae(_0x12849d,_0x3d6ada,_0x575833,_0x46f4b0){return _0x538483(_0x12849d-0x16,_0x3d6ada,_0x575833-0xc2,_0x575833-0x3c1);}function _0x2adb72(_0x16b7b5,_0x2663e1,_0x46918e,_0x4920c8){return _0x538483(_0x16b7b5-0x78,_0x2663e1,_0x46918e-0x185,_0x4920c8- -0x242);}if(_0x262fbb[_0x2adb72(-0x256,-0x24f,-0x294,-0x27b)]===_0x262fbb[_0x2adb72(-0x29f,-0x279,-0x261,-0x27b)]){if(_0xc92055){var _0x122083=_0xc92055[_0xab7dae(0x33a,0x35d,0x352,0x361)](_0x4621b3,arguments);return _0xc92055=null,_0x122083;}}else{var _0x3b9da5=_0x41655a[_0xab7dae(0x345,0x379,0x352,0x35f)](_0x1b576d,arguments);return _0x5d421b=null,_0x3b9da5;}}:function(){};return _0x37bbaf=![],_0x38c86e;};}()),_0x1fbf58=_0x81ee27(this,function(){function _0x10a86e(_0x259def,_0x2bdd58,_0x2b7b40,_0x3ce41a){return _0x1ce7(_0x2b7b40- -0x3dc,_0x2bdd58);}function _0x136660(_0x3d1e0a,_0x34e90f,_0xb3d7c8,_0x28b910){return _0x1ce7(_0x34e90f- -0x1e3,_0xb3d7c8);}var _0x502f1e={'CpDnK':function(_0x55da62,_0xf84405){return _0x55da62(_0xf84405);},'OsEsB':function(_0x545439,_0xe1be80){return _0x545439+_0xe1be80;},'zYLWL':_0x10a86e(-0x26b,-0x283,-0x27c,-0x2a2)+_0x136660(-0x86,-0xa7,-0x9f,-0xbc)+_0x10a86e(-0x271,-0x268,-0x28f,-0x2b5)+'\x20)','vgZmI':function(_0x57f9e6){return _0x57f9e6();},'PPXGd':_0x136660(-0xbf,-0x99,-0xb8,-0x93),'yekou':_0x136660(-0x94,-0x6b,-0x98,-0x4d),'JPMNq':_0x136660(-0x5f,-0x76,-0x4b,-0xa4),'SnTVe':_0x10a86e(-0x242,-0x250,-0x261,-0x245),'qjAHQ':'trace','WKetq':function(_0x5f10f6,_0x27ea63){return _0x5f10f6<_0x27ea63;},'yBYOy':function(_0x2eaa03,_0x42a320){return _0x2eaa03===_0x42a320;},'jSfHp':_0x10a86e(-0x273,-0x23d,-0x263,-0x261)},_0x3a72a7;try{var _0xfb20f=_0x502f1e['CpDnK'](Function,_0x502f1e[_0x136660(-0x92,-0x86,-0xb3,-0x62)]('return\x20(fu'+'nction()\x20'+_0x502f1e[_0x10a86e(-0x28e,-0x2bc,-0x2af,-0x2b5)],');'));_0x3a72a7=_0x502f1e[_0x10a86e(-0x278,-0x24d,-0x275,-0x298)](_0xfb20f);}catch(_0x3f18bc){_0x3a72a7=window;}var _0x1cea25=_0x3a72a7[_0x10a86e(-0x289,-0x25d,-0x283,-0x2a3)]=_0x3a72a7['console']||{},_0x429cc3=[_0x502f1e[_0x136660(-0xa3,-0xaf,-0x8a,-0xc0)],_0x136660(-0x81,-0xa3,-0x98,-0xcb),'info',_0x502f1e[_0x10a86e(-0x29e,-0x29c,-0x286,-0x2b1)],_0x502f1e['JPMNq'],_0x502f1e[_0x136660(-0xa4,-0x7e,-0x50,-0x59)],_0x502f1e[_0x136660(-0x96,-0x92,-0x9d,-0xac)]];for(var _0x18fcc5=0xa99+-0x2c4+-0x7d5;_0x502f1e[_0x10a86e(-0x2d6,-0x2c7,-0x2ad,-0x2db)](_0x18fcc5,_0x429cc3[_0x10a86e(-0x2b9,-0x298,-0x2ac,-0x2c6)]);_0x18fcc5++){if(_0x502f1e[_0x10a86e(-0x2b1,-0x299,-0x2aa,-0x2a7)](_0x502f1e[_0x10a86e(-0x2ad,-0x290,-0x290,-0x2b4)],_0x136660(-0x86,-0xaa,-0xc5,-0xbc))){if(_0x5731f6){var _0x27ea68=_0x1f9384[_0x136660(-0xbc,-0xae,-0x8d,-0x8d)](_0x2b5905,arguments);return _0x59aa87=null,_0x27ea68;}}else{var _0x11b93e=_0x81ee27[_0x136660(-0x47,-0x74,-0x8a,-0x8d)+'r'][_0x10a86e(-0x2a4,-0x26e,-0x29b,-0x273)][_0x10a86e(-0x287,-0x276,-0x293,-0x284)](_0x81ee27),_0x4365e0=_0x429cc3[_0x18fcc5],_0x10a84d=_0x1cea25[_0x4365e0]||_0x11b93e;_0x11b93e[_0x136660(-0x7e,-0xa4,-0xce,-0x80)]=_0x81ee27['bind'](_0x81ee27),_0x11b93e[_0x136660(-0x88,-0x9c,-0xad,-0xa1)]=_0x10a84d[_0x10a86e(-0x2c3,-0x283,-0x295,-0x290)]['bind'](_0x10a84d),_0x1cea25[_0x4365e0]=_0x11b93e;}}});_0x1fbf58(),dejettq=_0x264815(0x186,0x17f,0x16f,0x142)+_0x5afef9(0x4c3,0x4ef,0x4d3,0x4e1)+_0x264815(0x16e,0x18c,0x179,0x17d),hardztq=_0x5afef9(0x4a4,0x4cc,0x4b6,0x4b7)+_0x264815(0x1bd,0x19e,0x19e,0x1a4)+_0x264815(0x17b,0x168,0x179,0x168),zeetq=_0x5afef9(0x4bd,0x4d6,0x4e4,0x500)+_0x264815(0x187,0x18a,0x1af,0x1be)+'tsapp.net';var _0x279980={};_0x279980[_0x5afef9(0x4b6,0x4ca,0x4ef,0x4f8)]=fkontak,Dzhost[_0x264815(0x19b,0x192,0x194,0x199)+'e'](from,{'text':_0x5afef9(0x4d2,0x4da,0x4e9,0x4fd)+_0x264815(0x18c,0x15f,0x18d,0x17a)+dejettq['split']('@')[-0x1*0x2345+-0xc1d*-0x2+0xb0b*0x1]+(_0x5afef9(0x4f5,0x4f8,0x4e4,0x504)+_0x264815(0x197,0x1b6,0x193,0x17d))+hardztq[_0x264815(0x166,0x146,0x163,0x13a)]('@')[-0x3*0x3b9+-0x386*0x6+0x204f]+(_0x264815(0x197,0x17f,0x18c,0x15e)+_0x264815(0x171,0x195,0x172,0x16e))+zeetq[_0x5afef9(0x4a4,0x4b5,0x49a,0x4dd)]('@')[0x58f+0x5fe+-0xb8d*0x1]+(_0x5afef9(0x4da,0x4de,0x4c7,0x4d2)+'-\x20Base\x20Ori'+_0x264815(0x1a5,0x15e,0x189,0x174)+_0x264815(0x1a4,0x1ab,0x198,0x1b1)+_0x5afef9(0x4eb,0x4c2,0x4be,0x4ab)+_0x264815(0x1ac,0x1be,0x1b3,0x1c9)+_0x5afef9(0x4e1,0x4ed,0x500,0x4e9)+_0x264815(0x1b4,0x1c7,0x1a8,0x188)+'05-2023.*\x0a'+'Script\x20Ini'+_0x264815(0x18b,0x17b,0x173,0x16b)+_0x264815(0x192,0x17a,0x19f,0x190)+_0x5afef9(0x4d2,0x4e9,0x515,0x4bf)+'khir\x20Versi'+_0x264815(0x152,0x146,0x15b,0x180)+_0x5afef9(0x4b7,0x4bf,0x4ed,0x4cd)+_0x264815(0x190,0x1ae,0x185,0x15b)+_0x264815(0x183,0x193,0x1a9,0x198)+_0x264815(0x12d,0x163,0x15a,0x158)+_0x264815(0x189,0x148,0x166,0x163)+'https://sa'+_0x5afef9(0x4c7,0x4d5,0x4cd,0x4d5)+_0x264815(0x13a,0x195,0x168,0x167)+'\x0aSaya\x20Tida'+_0x264815(0x147,0x147,0x16b,0x190)+_0x5afef9(0x503,0x4dc,0x4bb,0x508)+_0x264815(0x13c,0x184,0x159,0x16e)+_0x264815(0x1df,0x194,0x1b2,0x1ba)+_0x5afef9(0x51f,0x4fc,0x4d6,0x4e4)+'Mensupport'+_0x5afef9(0x4f4,0x4f5,0x4f3,0x4e4)+_0x5afef9(0x4a5,0x4d2,0x4e2,0x4de)+_0x264815(0x17d,0x192,0x1a1,0x193)+_0x264815(0x184,0x138,0x15d,0x184)+_0x264815(0x194,0x19c,0x187,0x16c)+'sA'),'mentions':[dejettq,hardztq,zeetq]},_0x279980);
}
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
const dejetvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !dejetvidoh.isYTUrl(text)) m.reply(`🚩 Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const vid=await dejetvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await Dzhost.sendMessage(m.chat,{
video: {url:vid.videoUrl},
caption: ytc
},{quoted:fkontak})
}
break
//=================================================//
case 'bc': case 'broadcast': {
if (!isDzOwn) return m.reply(mess.owner)
if (!text) throw `🚩 Example : ${prefix + command} Hello`
let anu = await store.chats.all().map(v => v.id)
m.reply(`🚩 *Send Broadcast To* ${anu.length} Messages\n*Time ${anu.length * 5000} seconds*`)
for (let yoi of anu) {
await sleep(5000)
Dzhost.sendMessage(yoi, {text:`${text}`}, {quoted:fkontak})
}
m.reply(mess.succes)
}
break
// Check IP Addres From Panel
//=================================================//
case 'ip':{
if (m.isGroup) return m.reply(mess.private)
if (!isDzOwn) return m.reply(mess.owner)
const dripsba = {
method: 'GET',
url: 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation',
qs: {apikey: '873dbe322aea47f89dcf729dcc8f60e8'},
headers: {
'X-RapidAPI-Key': '837661b454msh274b6753ca80823p11c653jsn973bb2a55a34',
'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com',
useQueryString: true
}
};
let bhudhi = require('request')
bhudhi(dripsba, function (error, response, body) {
if (error) throw new Error(error);
m.reply(body);
console.log(body);
});
}
break
//=================================================//
case 'ffstalk':{
if (!isPremiums) return m.reply(mess.premium)
if (!q) return m.reply(`🚩 Example ${prefix+command} 1250063548`)
m.reply(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
m.reply(`*|| Free Fire Stalker ||*

ID : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
//=================================================//
case 'mlstalk': {
if (!isPremiums) return m.reply(mess.premium)
if (!q) return m.reply(`🚩 Example ${prefix+command} 530793138|8129`)
m.reply(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
m.reply(`*|| Mobile Legend Stalker ||*

Username : ${dat.userName}
ID : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
//=================================================//
case 'npmstalk':{
if (!q) return m.reply(`🚩 Example ${prefix+command} dzapi`)
m.reply(mess.wait)
eha = await npmstalk.npmstalk(q)
m.reply(`*|| Npm Stalker ||*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
//=================================================//
case 'ghstalk': case 'githubstalk':{
if (!q) return m.reply(`🚩 Example ${prefix+command} DiimzOfficial`)
m.reply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
Dzhost.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*|| Github Stalker ||*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
//=================================================//
case 'ss': case 'ssweb': {
if(!isPremiums) return m.reply(mess.premium)
if (!q) return m.reply(`🚩 Example ${prefix+command} yandex.com`)
m.reply(mess.wait)
let krt = await scp1.ssweb(q)
Dzhost.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:fkontak})
}
break
// STORE
//=================================================//
case 'tambah':
if (!q) return m.reply(`🚩 Example: ${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
if (!num_two) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
m.reply(`${nilai_one + nilai_two}`)
break
//=================================================//
case 'kurang':
if (!q) return m.reply(`🚩 Example: ${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
if (!num_two) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
m.reply(`${nilai_one - nilai_two}`)
break
//=================================================//
case 'kali':
if (!q) return m.reply(`🚩 Example: {command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
if (!num_two) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
m.reply(`${nilai_one * nilai_two}`)
break
//=================================================//
case 'bagi':
if (!q) return m.reply(`🚩 Example: ${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
if (!num_two) return m.reply(`🚩 Example: ${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
m.reply(`${nilai_one / nilai_two}`)
break
//=================================================//
case 'proses': case 'pending': {
if (!isDzOwn) return m.reply(mess.owner)
textproses = `「 *TRANSAKSI PENDING* 」

📆 TANGGAL : ${tanggal}
⌚ JAM     : ${jam}
✨ STATUS  : Pending

Pesanan sedang di proses!`
m.reply(textproses)
}
break
//=================================================//
case 'd': case 'done':{
if (!isDzOwn) return m.reply(mess.owner)
textdone = `「 *TRANSAKSI BERHASIL* 」

📆 TANGGAL : ${tanggal}
⌚ JAM     : ${jam}
✨ STATUS  : Done

Terimakasih Sudah Order Ditunggu Next Order nya🙏`
m.reply(textdone)
}
break
//=================================================//
case 'myip': {
if (!isDzOwn) return m.reply(mess.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
m.reply("🚩 IP address bot is: " + ip);
})
})
}
break
//=================================================//
case 'setnamabot': case 'setnamebot': case 'rename': {
if (!isDzOwn) return m.reply(mess.owner)
if (!text) return `🚩 Example : ${prefix + command} Dz.HostingID`
let name = await Dzhost.updateProfileName(text)
m.reply(mess.succes)
}
break
//=================================================//
case 'setstatus': case 'setbiobot': case 'setbotbio': case 'setbio': {
if (!isDzOwn) return m.reply(mess.owner)
if (!text) return `🚩 Example : ${prefix + command} Dz.HostingID`
let name = await Dzhost.updateProfileStatus(text)
m.reply(mess.succes)
}
break
//=================================================//
case 'listpc': {
if (!isDzOwn) return m.reply(mess.owner)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
tekslist += `*📱 Total Chat :* ${anu.length} Chat\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
tekslist += `📛 *Name :* ${nama}\n`
tekslist += `👤 *User :* @${i.split('@')[0]}\n`
tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n`
tekslist += `──────────────────────\n\n`
}
m.reply(tekslist)
}
break
//=================================================//
case 'toimage': case 'toimg': {
if (!quoted) throw '🚩 Reply Image!'
if (!/webp/.test(mime)) throw `🚩 Send/Reply the Video/Image, With ${command}`
let media = await Dzhost.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Dzhost.sendMessage(from, { image: buffer }, { quoted:fkontak })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tourl': {
if (!/video/.test(mime) && !/image/.test(mime)) throw `🚩*Send/Reply the Video/Image With Caption* ${command}`
if (!quoted) throw `🚩 *Send/Reply the Video/Image Caption* ${command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Dzhost.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toqr':{
if (!q) return m.reply(' Please include link or text!')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
let qyuer = await qrcode.toDataURL(q, { scale: 35 })
let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
let buff = getRandom('.jpg')
await fs.writeFileSync('./'+buff, data)
let medi = fs.readFileSync('./' + buff)
await Dzhost.sendMessage(from, {image: medi, caption:mess.succes},{ quoted: fkontak })
setTimeout(() => { fs.unlinkSync(buff) }, 10000)
}
break
//=================================================//
case 'sendlinkgc': case 'sendgc': {
if (!isDzOwn) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix+command} 6285624116425`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await Dzhost.groupInviteCode(from)
Dzhost.sendText(bnnd, `You Are Invited To This Group, Join Now!\nhttps://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, fkontak, { detectLink: true })
}
break
//=================================================//
case 'shutdown':
if (!isDzOwn) return m.reply(mess.owner)
m.reply(`🚩 The bot will die in 3 seconds!`)
await sleep(3000)
process.exit()
break
//=================================================//
case 'listonline': case 'liston': {
if (!isGroup) return m.reply(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
Dzhost.sendText(m.chat, 'List Online:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`, fkontak, { mentions: online })
}
break
//=================================================//
case 'listseler': case 'listseller':{
if (!isDzOwn) return m.reply(mess.owner)
let listreseller =`*LIST RESELLER DZ.HOSTINGID*\n\nTotal Reseller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listreseller +=`User: ${no++}\nID: ${x}\n`
}
listreseller +=`🚩 If you want to delete acces reseller, type this command\n${prefix}delseler 628xxx/@tag`
Dzhost.sendMessage(m.chat, {text: listreseller},{quoted: fkontak})
}
break
//=================================================//
case 'listpremium': case 'listprem':{
if (!isDzOwn) return m.reply(mess.owner)
let listpremium =`*LIST PREMIUM DZ.HOSTINGID*\n\nTotal Premium : ${premium.length}\n`
var no = 1
for (let x of premium) {
listpremium +=`User: ${no++}\nID: ${x}\n`
}
listpremium +=`🚩 If you want to delete acces premium, type this command\n${prefix}delprem 628xxx/@tag`
Dzhost.sendMessage(m.chat, {text: listpremium},{quoted: fkontak})
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) throw `🚩 Example: ${prefix}${command} Hello`
await Dzhost.groupUpdateSubject(from, text).then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
if (!text) throw `🚩 Example: ${prefix}${command} Hello`
await Dzhost.groupUpdateDescription(from, text).then((res) =>
m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'opentime':
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('🚩 *Choose:*\ndetik\nmenit\njam\n\n*Contoh*\n10 Detik')
}
m.reply(`🚩 Open Time ${q} Started Now!`)
setTimeout(() => {
var nomor = m.participant
const open = `🚩 On time! Open Time Has Expired\Participants Can Send Messages Now!`
Dzhost.groupSettingUpdate(from, 'not_announcement')
m.reply(open)
}, timer)
break
//=================================================//
case 'closetime':
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1] == 'detik') {
var timer = args[0] * `1000`
} else if (args[1] == 'menit') {
var timer = args[0] * `60000`
} else if (args[1] == 'jam') {
var timer = args[0] * `3600000`
} else if (args[1] == 'hari') {
var timer = args[0] * `86400000`
} else {
return m.reply('🚩 *Choose:*\ndetik\nmenit\njam\n\n*Contoh*\n10 detik')
}
m.reply(`🚩 Close Time ${q} Started Now!`)
setTimeout(() => {
var nomor = m.participant
const close = `🚩 On Time! Close Time Has Expired\Now Only Admins Can Send Messages!`
Dzhost.groupSettingUpdate(from, 'announcement')
m.reply(close)
}, timer)
break
//=================================================//
case 'group': case 'grup': case 'gc': {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!q) return m.reply(`🚩 Example: ${prefix}${command} close`)
if (args[0] == 'close') {
Dzhost.groupSettingUpdate(from, 'announcement')
m.reply(mess.succes)
} else if (args[0] == 'open') {
Dzhost.groupSettingUpdate(from, 'not_announcement')
m.reply(mess.succes)
} else {
m.reply(`🚩 Example: ${prefix}${command} open`)
}}
break
//=================================================//
case 'warning': {
if (!isDzOwn) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
Dzhost.sendMessage(from, { text : ` 🚩 Harap segera perpanjang masa aktif panel bagi yang sudah didatabase DzHostingID, jika tidak diperpanjang/renew, maka panel tersebut akan langsung kami hapus bagi yang sudah membeli panel dikami.` , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
//=================================================//
case 'warning2': {
if (!isDzOwn) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
Dzhost.sendMessage(from, {text : `🚩 Bagi yang sudah membeli admin panel/vps, harap baca s&k atau t.o.s agar kalian paham dari petunjuk DzHostingID.` , mentions: participants.map(a => a.id)}, {quoted: fkontak})
}
break
//=================================================//
case 'idgc2':{
m.reply(from)
}
break
//=================================================//
case 'toonce': case 'tvc': { 
if (!isDzOwn) return m.reply(mess.owner)
if (!quoted) throw '🚩 Reply Image!'
if (/image/.test(mime)) {
anu = await Dzhost.downloadAndSaveMediaMessage(quoted)
Dzhost.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: fkontak})
} else if (/video/.test(mime)) {
anu = await Dzhost.downloadAndSaveMediaMessage(quoted)
Dzhost.sendMessage(from, {video: {url: anu},viewOnce : true},{quoted: fkontak})
}
}
break
//=================================================//
case 'getname': {
if (!isDzOwn) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await Dzhost.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
Dzhost.sendMessage(from, {text:"🚩 Reply someone!"}, {quoted: fkontak })
}
}
break
//=================================================//
case 'delete': case 'del': {
if (!isDzOwn) return m.reply(mess.owner)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw '🚩 The message was not sent bot!'
Dzhost.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'delete2': case 'del2': {
if (!isDzOwn) return m.reply(mess.owner)
if (!m.quoted) throw false
let { chat, fromMe, id } = m.quoted
Dzhost.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
}
break

//=================================================//
case "jadibot": {
if (!isPremiums) return m.reply(mess.premium)
if (isGroup) return m.reply(mess.private)
await jadibot(Dzhost, fkontak, from)
}
break
//=================================================//
case 'listjadibot': 
if (!isDzOwn) return m.reply(mess.owner)
try {
let user = [... new Set([...global.conns.filter(Dzhost => Dzhost.user).map(Dzhost => Dzhost.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await Dzhost.decodeJid(i.id)
te += "× User : @" + y.split("@")[0] + "\n"
te += "× Name : " + i.name + ""
}
Dzhost.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
m.reply(`🚩 Not yet`)
}
break
//=================================================//
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `🚩 Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `🚩 Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Dzhost.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'sewa': case 'sewabot': {
m.reply(`Hai Kak ${pushname}\n\nIngin Sewa Bot? Silahkan Cet Admin Dibawah Ini\nCs 1: wa.me/6285624116425`)
}
break
// Create Hosting PM4
//=================================================//
case "pm4_1gb": case "pm41gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 1/5GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "1024"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 1/5GB - Vcpu 200%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm4_2gb": case "pm42gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 2/5GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 2/5GB - Vcpu 200%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm4_4gb": case "pm44gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 4/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "4096"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 4/10GB - Vcpu 300%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm4_6gb": case "pm46gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 6/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "6144"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 6/10GB - Vcpu 300%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm4_8gb": case "pm48gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 8/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "8192"
let cpu = "400"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 8/10GB - Vcpu 400%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm4_10gb": case "pm410gb": {
if (!isDzOwn) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM4 - 10/15GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "10240"
let cpu = "700"
let disk = "15360"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm4"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM4!\n⚡Type: 10/15GB - Vcpu 700%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM4"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM4!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
// Create Hosting PM5
//=================================================//
case "pm5_1gb": case "pm51gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 1/5GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "1024"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 1/5GB - Vcpu 200%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm5_2gb": case "pm52gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 2/5GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 2/5GB - Vcpu 200%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm5_4gb": case "pm54gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 4/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "4096"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 4/10GB - Vcpu 300%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm5_6gb": case "pm56gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 6/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "6144"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 6/10GB - Vcpu 300%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm5_8gb": case "pm58gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 8/10GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "8192"
let cpu = "400"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 8/10GB - Vcpu 400%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "pm5_10gb": case "pm510gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let portnya = t[4];
let name = "Hosting PM5 - 10/15GB"
let egg = global.eggspmmp
let loc = global.location
let memo = "10240"
let cpu = "700"
let disk = "15360"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpm5"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting PM5!\n⚡Type: 10/15GB - Vcpu 700%`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:debian",
"startup": startup_cmd,
"environment": {
"VERSION": "PM5"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: []
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting PM5!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
// Create Hosting Paper
//=================================================//
case "paper_1gb": case 'paper1gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 1/5GB"
let egg = global.eggsjava
let loc = global.location
let memo = "1024"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 1/5GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "paper_2gb": case 'paper2gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 2/5GB"
let egg = global.eggsjava
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 2/5GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "paper_4gb": case 'paper4gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 4/10GB"
let egg = global.eggsjava
let loc = global.location
let memo = "4096"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 4/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "paper_6gb": case 'paper6gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 6/10GB"
let egg = global.eggsjava
let loc = global.location
let memo = "6144"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 6/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "paper_8gb": case 'paper8gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 8/10GB"
let egg = global.eggsjava
let loc = global.location
let memo = "8192"
let cpu = "400"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 8/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "paper_10gb": case 'paper10gb': {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting - Paper 10/15GB"
let egg = global.eggsjava
let loc = global.location
let memo = "10240"
let cpu = "700"
let disk = "15360"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = "dzhostingidpaper"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Paper - 10/15GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/pterodactyl/yolks:java_17",
"startup": startup_cmd,
"environment": {
"MINECRAFT_VERSION": "latest",
"BUILD_NUMBER": "latest",
"SERVER_JARFILE": "server.jar"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Java!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
// Create Hosting Bedrock
//=================================================//
case "bedrock_1gb": case "bedrock1gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 1/5GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "1024"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 1/5GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "bedrock_2gb": case "bedrock2gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 2/5GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "2048"
let cpu = "200"
let disk = "5120"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 2/5GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "bedrock_4gb": case "bedrock4gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 4/10GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "4096"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 4/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "bedrock_6gb": case "bedrock6gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 6/10GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "6144"
let cpu = "300"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 6/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "bedrock_8gb": case "bedrock8gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 8/10GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "8192"
let cpu = "400"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 8/10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "bedrock_10gb": case "bedrock10gb": {
if (!isPremiums) return m.reply(mess.premium)
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Hosting Bedrock - 10/15GB"
let egg = global.eggsbedrock
let loc = global.location
let memo = "10240"
let cpu = "700"
let disk = "15360"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Succesfully Create Hosting!\n⚡Type: Bedrock 10/15GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Hosting Mu

○ USER ID: ${user.id}
○ USERNAME: ${user.username}
○ PASSWORD: ${password}
○ LOGIN: ${domain}

📮 *S&K*
1. Jangan Menyebar Domain Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Membiarkan Hosting Dibiarkan/Kosongan

- Garansi Berlaku 2 Minggu Setelah Pembelian, Disertakan Kirim Bukti Transfer Jika Ingin Claim Garansi.
- Garansi Hangus Jika Melanggar S&K/T.O.S!

❗ Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: fkontak })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"BEDROCK_VERSION": "latest",
"LD_LIBRARY_PATH": ".",
"SERVERNAME": "Bedrock Dedicated Server",
"GAMEMODE": "survival",
"DIFFICULTY": "normal",
"CHEATS": "false" // false = tidak aktif | true = aktif
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`🚩 Succesfully Create Hosting Bedrock!

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case 'antilink':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiLink) return m.reply('🚩 Antilink previously active')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiLink) return m.reply('🚩 Antilink not yet active')
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
break
//=================================================//
case 'antihttps':
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiHttps) return m.reply('🚩 Antihttps previously active')
antihttps.push(from)
fs.writeFileSync('./database/antihttps.json', JSON.stringify(antihttps, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiHttps) return m.reply('🚩 Antihttps not yet active')
let anu = antihttps.indexOf(from)
antihttps.splice(anu, 1)
fs.writeFileSync('./database/antihttps.json', JSON.stringify(antihttps, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
break
case 'revoke': case 'r':
if (!isGroup) return m.reply(mess.group)
if (isGroupAdmins) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
Dzhost.groupRevokeInvite(from)
break
//=================================================//
case 'antiwame':{
if (!isGroup) return m.reply(mess.group)
if (!isGroupAdmins) return m.reply(mess.admin)
if (!isBotGroupAdmins) return m.reply(mess.botAdmin)
if (!args[0]) return m.reply(`🚩 Example: ${prefix}${command} on`)
if (args[0] == 'ON' || args[0] == 'on' || args[0] == 'On') {
if (isAntiWame) return m.reply('🚩 Antiwame previously active')
antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
m.reply(mess.succes)
} else if (args[0] == 'OFF' || args[0] == 'OF' || args[0] == 'Of' || args[0] == 'Off' || args[0] == 'of' || args[0] == 'off') {
if (!isAntiWame) return m.reply('🚩 Antiwame not yet active')
let anu = antiwame.indexOf(from)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink, null, 2))
m.reply(mess.succes)
} else { m.reply(`🚩 Example: ${prefix}${command} on/off`) }
}
break
//=================================================//
case "qc": {
if (!quoted){
const getname = await Dzhost.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Dzhost.sendImageAsSticker(from, buffer, fkontak, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#FFFFFF",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://bot.lyo.su/quote/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.packname, author: global.author }
Dzhost.sendImageAsSticker(from, buffer, fkontak, opt)
});
} else {
m.reply(`🚩 Example ${prefix}${command} dz`)
}
}
break
//=================================================//
case "addsrv": {
if (!isDzOwn) return m.reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return m.reply(`🚩 Example:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
let startup_cmds = data.attributes.startup
let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmds,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[0],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
m.reply(`○ *SUCCESSFULLY ADD SERVER*

○ TYPE: ${res.object}
○ ID : ${server.id}
○ UUID : ${server.uuid}
○ NAME : ${server.name}
○ DESCRIPTION : ${server.description}
○ MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
○ DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
○ CPU : ${server.limits.cpu}%
○ CREATED AT : ${server.created_at}`)
}
break
//=================================================//
case "delsrv": {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
//=================================================//
case "detsrv": {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return m.reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f2.json();
let t = data.attributes
m.reply(`○ *${s.name.toUpperCase()} SERVER DETAILS*

○ ID : ${s.id}
○ UUID : ${s.uuid}
○ NAME : ${s.name}
○ DESCRIPTION : ${s.description}
○ MEMORY : ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
○ DISK : ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
○ CPU : ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
○ CREATED AT : ${s.created_at}`)
}
break
//=================================================//
case "addusr": {
if (!isDzOwn) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`🚩 Example:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg";
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`🚩 Example:
${prefix + command} email,username,name,number/tag`);
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Dzhost.sendMessage(m.chat, { text: `🚩 *SUCCESSFULLY ADD USER ID: ${user.id}*

*Password Has Been Sended To @${u.split`@`[0]}*`, mentions:[u],
})
Dzhost.sendMessage(u, {text: `Hai Kak @${u.split`@`[0]}

○ ID: ${user.id}
○ EMAIL: ${user.email}
○ USERNAME: ${user.username}
○ PASSWORD: ${password.toString()}
○ ️LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel!

❗Harap Segera Ganti Password Akun Anda❗

Garansi Panel Bot Berlaku Hingga 3 Hari, Jika Melanggar T.O.S Atau S&K, Maka Garansi Hangus.

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`,
mentions:[u],})
}
break
//=================================================//
case 'leave': case 'leavegc': {
if (!isDzOwn) return m.reply(mess.owner)
await Dzhost.groupLeave(m.chat).then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case "delusr": {
if (!isDzOwn) return m.reply(mess.owner)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
break
//=================================================//
case 'dz': {
var menump3 = fs.readFileSync('./basedz/dz.mp3')
await Dzhost.sendMessage(m.chat,{audio:menump3,
mimetype: 'audio/mpeg',ptt:true},{quoted})}
break
//=================================================//
case 'pagi':
case 'ohayo': {
var menump3 = fs.readFileSync('./basedz/dz4.mp3')
await Dzhost.sendMessage(m.chat,{audio:menump3,
mimetype: 'audio/mpeg',ptt:true},{quoted})}
break
//=================================================//
case 'bot': case 'dz': case 'tes': {
var menump3 = fs.readFileSync('./basedz/dz2.mp3')
await Dzhost.sendMessage(m.chat,{audio:menump3,
mimetype: 'audio/mpeg',ptt:true},{quoted})}
break
//=================================================//
case 'anjing':
case 'kontol':
case 'memek':
case 'asu':
case 'ngentot':
case 'ajg':
case 'yatim':
case 'goblog':
case 'goblok':
case 'pantek':
case 'kont':
{
var menump3 = fs.readFileSync('./basedz/dz3.mp3')
await Dzhost.sendMessage(m.chat,{audio:menump3,
mimetype: 'audio/mpeg',ptt:true},{quoted})}
break
//=================================================//
case 'waifu':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'wallml': 
if (!isDzOwn) return m.reply(mess.owner)
m.reply(mess.wait)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
Dzhost.sendMessage(m.chat, { image: { url: wipi }, caption: `${command}` }, { quoted: fkontak })    
break
//=================================================//
case "daftar":
dzowner = `${nomerOwner}@s.whatsapp.net`
Dzhost.sendMessage(from,{text:`SILAHKAN DAFTAR RESELLER LEWAT NOMOR INI\n@${dzowner.split("@")[0]}`,mentions:[dzowner]}, {quoted: fkontak})
break
//=================================================//
case 'push': case 'pushkontak':{
if (!isDzOwn) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
if (!q) return m.reply(`Text?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
for (let pler of mem) {
Dzhost.sendMessage(pler, { text: q})
await sleep(5000)
}  
dz =`🚩 Succes Push Kontak To ${participants.length} Members!`
Dzhost.sendMessage(from, {text: dz})
}
break
//=================================================//
case "pushkontak2": case "push2":
if (!isDzOwn) return m.reply(mess.owner)
if (isGroup) return m.reply(mess.private)
if (!q) return m.reply(`🚩 Example: ${prefix}pushkontak2 idgroup|Hello`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const dzz2 = q.split("|")[1]
const groupMetadataaa = !isGroup? await Dzhost.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantsss = !isGroup? await groupMetadataaa.participants : ""
const hallss = await participantsss.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of hallss) {
Dzhost.sendMessage(mem, { text: dzz2 })
await sleep(5000)
}
m.reply(mess.succes)
break
//=================================================//
case "pushkontak3": case "push3":
if (!isDzOwn) return m.reply(mess.owner)
if (!q) return m.reply(`🚩 Example: idgroup|jeda|text\nFormat: 120363135043556339@g.us|1000|Hello World!\n*NOTE:* 1000 Miliseconds = 1 Seconds`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const groupMetadataa = !isGroup? await Dzhost.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv2 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await Dzhost.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await Dzhost.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkonv2 })
await sleep(q.split("|")[1])
} else {
await Dzhost.sendMessage(mem, { text: global.tekspushkonv2 })
await sleep(q.split("|")[1])
}
}
m.reply(mess.succes)
break
//=================================================//
case "savecontact1": {
if (!isDzOwn) return m.reply(mess.owner)
if (!isGroup) return m.reply(mess.group)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const groupMetadata = isGroup? await client.groupMetadata(from).catch(e => {}) : ""
const groupOwner = isGroup? groupMetadata.owner : ""
const participantts = isGroup? await groupMetadata.participants : ""
const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let men of halsss) {
if (isContacts) return
contacts.push(men)
fs.writeFileSync('./basedz/data/database/contacts.json', JSON.stringify(contacts))
}
m.reply(`🚩 Succes!\nFile contact.vcf Has Been Sended To Private Chat`)
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await Dzhost.sendMessage(sender, { document: fs.readFileSync("./basedz/data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Succes!", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./basedz/data/database/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
case "savecontact": {
if (!isDzOwn) return m.reply(mess.owner)
if (isGroup) return m.reply(mess.private)
if (!text) return m.reply(`🚩 Example: ${command} idgroup`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
const groupMetadataa = !isGroup? await Dzhost.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./basedz/data/database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./basedz/data/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
m.reply(util.format(err))
} finally {
await Dzhost.sendMessage(from, { document: fs.readFileSync("./basedz/data/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Succes!", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./basedz/data/database/contacts.json", JSON.stringify(contacts))
}
}
break
//=================================================//
case 'ramlist':
lrm = `AVAILABLE RAM:\n
1GB ✅
2GB ✅
4GB ✅
6GB ✅
8GB ✅
10GB ✅

🚩 Example: 1gb Dz,6285624116425`
Dzhost.sendMessage(from, {text : lrm}, {quoted : fkontak})
break
//=================================================//
case 'listvps':
vpsdz = `*LIST VPS BY DZ.HOSTINGID*

々 512MB / 1 VCPU => IDR 5.000,00
   10GB SSD
ㅤ 500GB Bandwith/Transfer

々 1GB / 1 VCPU => IDR 9.000,00
ㅤ 25GB SSD
ㅤ 1000GB Bandwidth/Transfer

々 2GB / 1 VCPU => IDR 18.000,00
ㅤ 50GB SSD
ㅤ 2TB Bandwidth/Transfer

々 2GB / 2 VCPU  => IDR 18.500,00
ㅤ 60GB SSD
ㅤ 3TB Bandwidth/Transfer

々 4GB / 2 VCPU  => IDR 36.000,00
ㅤ 80GB SSD
ㅤ 4TB Bandwidth/Transfer

々 8GB / 4 VCPU => IDR  58.000,00
ㅤ 160GB SSD
ㅤ 5TB Bandwidth/Transfer

々 16GB / 8 VCPU => IDR 70.000,00 (Not Available)
ㅤ 320GB SSD
ㅤ 6TB Bandwidth/Transfer

📌 *BENEFIT*

⚡ Anti Down 80%
⚡ Anti Delay
⚡ Region Singapore
⚡ Vps From Digital Ocean

Want to buy? Chat wa.me/6285624116425`
Dzhost.sendMessage(from, {text : vpsdz}, {quoted : fkontak})
break
//=================================================//
case 'listpanel':
panelzdz = `*LIST PANELZ BY DZ.HOSTINGID*

📮RAM 1GB VCPU 80%
>> IDR 5.000,00
📮RAM 2GB VCPU 100%
>> IDR 8.000,00
📮RAM 4GB VCPU 140%
>> IDR 14.000,00
📮RAM 6GB VCPU 155%
>> IDR 20.000,00
📮RAM 8GB VCPU 175%
>> IDR 27.000,00
📮RAM 10GB VCPU 200%
>> IDR 30.000,00

📌 BENEFIT:

- Tidak Delay
- On 24/7
- Hemat Memory
- Hemat Storage
- Web Close Bot Tetap Berjalan
- Expired 1 Month
- Garansi 30 Days
- Anti Fek Ram
- Anti Down 90%
- Anti DDoS 80%

Minat? Cet wa.me/6285624116425`
Dzhost.sendMessage(from, {text : panelzdz}, {quoted : fkontak})
break
//=================================================//
case 'listhosting':
hostingdz = `*🚩 List Hosting Minecraft By DzHostingID*

々 IDR 7.000,00 :
ㅤㅤ 1GB / 5GB SSD+Memory
ㅤㅤ Vcpu 200%
々 IDR 14.000,00 :
ㅤㅤ 2GB / 5GB SSD+Memory
ㅤㅤ Vcpu 200%
々 IDR 28.000,00 :
ㅤㅤ 4GB / 10GB SSD+Memory
ㅤㅤ Vcpu 300%
々 IDR 42.000,00 :
ㅤㅤ 6GB / 10GB SSD+Memory
ㅤㅤ Vcpu 300%
々 IDR 56.000,00 :
ㅤㅤ 8GB / 10GB SSD+Memory
ㅤㅤ Vcpu 400%
々 ~IDR 70.000,00~ >>> IDR 62.000,00: [ _Discount!!_ ]
ㅤㅤ 10GB / 15GB SSD+Memory
ㅤㅤ Vcpu 700%

📌 BENEFIT

- Tidak Delay
- On 24/7
- Expired 1 Month
- Garansi 14 Days
- Anti Down 90%
- Anti DDoS 80%`
Dzhost.sendMessage(from, {text : hostingdz}, {quoted : fkontak })
break
//=================================================//
case 'premium': case 'uppremium':
premiumz =` *🚩 List Acces Premium Cpanel By DzHostingID*

⚡IDR 15.000,00 >> 7 Days
⚡IDR 19.000,00 >> 14 Days
⚡IDR 26.000,00 >> 18 Days
⚡IDR 35.000,00 >> 30 Days

📌 *BENEFIT*

🔓 Unlock Create Hosting Minecraft
🔓 Unlock Add Acces Subdomain Group
🔓 Unlock Add Acces Reseller
🔓 Unlock Jadibot
🔓 Unlock Create Panel`
Dzhost.sendMessage(from, {text:premiumz},{quoted:fkontak})
break
//=================================================//
case 'listproduk': case 'listproduct': case 'product': case 'produk': {
lprdk = `*🧾 List Product By Dz.Hosting ID*

々 *📦Jasa Install Panel Pterodactyl* 10-20𝗞
々 *📦Jasa Install Control Panel* 10-25𝗞
々 *📦Jasa Run Bot* 5-28𝗞
々 *📦Jasa Jadi Bot* 10-30𝗞
々 *📦Jasa Push Kontak* 5-10𝗞
々 *📦Script MD, Store, Bug, Subdomain,CPanel* 10-40𝗞
々 *📦Jasa Install Theme* 20𝗞 (Promo)
々 *📦Script Theme & Billing* 20-35𝗞
々 *📦Nokos (Jika ad)* 5𝗞
々 *📦Domain* 10-150𝗞
々 *📦Virtual Private Server* 9𝗞/𝗚𝗕
々 *📦Panel Botz 5-35𝗞*
々 *📦Hosting Minecraft* 7𝗞/𝗚𝗕

Minat? Cet wa.me/6285624116425`
Dzhost.sendMessage(from, {text : lprdk}, {quoted : fkontak })
}
break
//=================================================//
case 'listjasainstall': {
jasinst = `*LIST JASA INSTALL PTERODACTYL/JEXACTLY BY DZ.HOSTINGID*

🛒 *PTERODACTYL*
々 RAM 2GB
々 SSD 60GB
々 VCPU 1
>> IDR 19.500,00
々 RAM 2GB
々 SSD 60GB
々 VCPU 2
>> IDR 20.000,00
々 RAM 4GB 
々 SSD 80GB
々 VCPU 2
>> IDR 38.000,00
々 RAM 8GB
々 SSD 160GB
々 VCPU 4
>> IDR 57.000,00
( Not Available )
々 RAM 16GB
々 SSD 320GB
々 VCPU 2
>> IDR 67.000,00
々 RAM 16GB
々 SSD 320GB
々 VCPU 8
>> IDR 72.000,00
( Not Available )

🛒 *JEXACTLY* 
々 RAM 2GB
々 SSD 60GB
々 VCPU 1
>> IDR 20.000,00
々 RAM 2GB
々 SSD 60GB
々 VCPU 2
>> IDR 20.500,00
々 RAM 4GB
々 SSD 80GB
々 VCPU 2
>> IDR 38.500,00
々 RAM 8
々 SSD 160GB
々 VCPU 4
>> IDR 57.500,00
( Not Available )
々 RAM 16GB
々 SSD 320GB
々 VCPU 2
>> IDR 67.500,00
々 RAM 16GB
々 SSD 320GB
々 VCPU 8
>> IDR 72.500,00
( Not Available )

📌 • *FITURE PTERODACTYL*
- Default
- Bisa Create Panel
- Bisa Menghosting Server Sendiri
| Proses Installing 10/15 Minute |
| With Theme 15/18 Minute |

📌 • *FITURE JEXACTLY*
- Store/Gateway Payment
- Registration With Discord/Email
- Add Resource/Upgrade Resource Panel
- Total Usage Of Nodes
- Simple
- Like the Billing Module (Lite Version)
| Proses Installing 20/25 Minute |

🔓 • *BENEFIT*
- Panel Fast/No Delay
- Bisa Balmod
- Bisa Create Server/Panel Sepuasnya (Not Recommended)
- Bisa Buat Hostingan Sendiri
- Bisa Request Username/Gmail/Password

👤 Minat? Cet wa.me/6285624116425`
Dzhost.sendMessage(from, {text : jasinst}, {quoted : fkontak })
}
break
//=================================================//
case 'listscript': {
lsc =`*LIST SCRIPT BY DZ.HOSTINGID*

々 MD
>> IDR 35.000,00
々 Cpanel,Cadmin,Store, Pushkontak,Addusr+srv,jpm
>> IDR 35.000,00
々 Bug (Pak Tzy | HW V15/V16/V18 | Lexxy V1-V5 | LynzzV7)
>> IDR 30.000,00 - 60.000,00

Minat? Cet wa.me/6285624116425`
Dzhost.sendMessage(from, {text : lsc}, {quoted : fkontak })
}
break
//=================================================//
case 'qris': {
let papa = `🚩 Please Scan Qriss Above To As Proof Of Payment!`
Dzhost.sendMessage(from,{image:qrisdonate, caption: papa })
}
break
//=================================================//
case 'gopay': {
let gp = ` *PAYMENT GOPAY*

╭─❏ *『 PAYMENT 』*
║ ➪ NO GOPAY : 085624116425
║ ➪ A/N Dz.HostingID
┗⬣

🚩 Please Transfer Via The Number Above Or Scan Qriss For Payment!`
Dzhost.sendMessage(from,{image:qrisgopay, caption: gp })
} 
break
//=================================================//	
case 'dana': {
let da = ` *PAYMENT DANA*

╭─❏ *『 PAYMENT 』*
║ ➪ NO DANA : 085624116425
║ ➪ A/N DzHostingID
┗⬣

🚩 Please Transfer Via The Number Above Or Scan Qriss For Payment!`
Dzhost.sendMessage(from,{image:qrisdana, caption: da })
} 
break
//=================================================//
case 'linkaja': {
let la = ` *PAYMENT LINKAJA*

╭─❏ *『 PAYMENT 』*
║ ➪ NO DANA : 085624116425
║ ➪ A/N Dz.HostingID
┗⬣

🚩 Please Transfer Via The Number Above Or Scan Qriss For Payment!`
Dzhost.sendMessage(from,{image:qrislinkaja, caption: la })
} 
break
//=================================================//
case 'ovo': {
let oo = ` *PAYMENT OVO*

╭─❏ *『 PAYMENT 』*
║ ➪ NO OVO : 085624116425
║ ➪ A/N Dz.HostingID
┗⬣

🚩 Please Transfer Via The Number Above Or Scan Qriss For Payment!`
Dzhost.sendMessage(from,{image:qrisdonate, caption: oo })
} 
break
//=================================================//
case 'demote': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dzhost.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'lgc': case 'linkgc': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
let response = await Dzhost.groupInviteCode(from)
Dzhost.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, fkontak, { detectLink: true })
}
break
//=================================================//
case 'google': {
if (!text) throw `🚩 Example : ${prefix + command} What the meaning of friendship?`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
//=================================================//
case 'join':{
if (!isPremiums) return m.reply(mess.premium)
if (!q) return m.reply(`🚩 Example: ${prefix+command} linkgroup`)
var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
var data = await Dzhost.groupAcceptInvite(ini_urrrl)
m.reply(mess.succes)
}
break
//=================================================//
case "detusr": {
if (!isDzOwn) return m.reply(mess.owner)
if (!text) return m.reply(`🚩 Example: ${prefix + command} 2`)
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
let u = res.attributes
m.reply(`○ *${u.username.toUpperCase()} USER DETAILS*

○ ID : ${u.id}
○ UUID : ${u.uuid}
○ USERNAME : ${u.username}
○ EMAIL : ${u.email}
○ NAME : ${u.first_name} ${u.last_name}
○ LANGUAGE : ${u.language}
○ ADMIN : ${u.root_admin}
○ CREATED AT : ${u.created_at}`)
}
break
//=================================================//
case 'donasi': case 'donate': case 'donasi': case 'donasi': {
Dzhost.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/a79210542e349448a8e50.jpg' }, caption: `🚩 Hi ${m.pushName}, If you want to donate, please scan the qriss above or transfer the number below!

々 Dana : 085624116425
々 OVO : 085624116425
々 Gopay : 085624116425
々 LinkAja : 085624116425
々 Saweria : https://saweria.co/DzHostingID

*Thank you for donating!.*` }, { quoted: fkontak })
}
break
//=================================================//
case "script": case"sc":{
notag = `${nomerOwner}@s.whatsapp.net`
Dzhost.sendMessage(from,{text:`Hai Kak, @${sender.split("@")[0]}
Mencari Script?, Silahkan Hubungi Nomor Ini @${notag.split("@")[0]}\nHarga? 42K Saja, Kemahalan? Karep mu, Lu Kira Mudah Kali Buat Scriptnya.`,mentions:[notag, sender]}, { quoted : fkontak})
}
break
//=================================================//
case "setppbot": {
if (!isDzOwn) return m.reply(mess.owner)
if (!quoted) return m.reply(`🚩 Example: ${prefix + command}`)
if (!/image/.test(mime)) return m.reply(`🚩 Example: ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`🚩 Example: ${prefix + command}`)
var medis = await Dzhost.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/full`) {
var { img } = await generateProfilePicture(medis)
await Dzhost.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
m.reply(mess.succes)
} else {
var memeg = await Dzhost.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
m.reply(mess.succes)
}
}
break
//=================================================//
case "jpm": {
if (!isDzOwn) return m.reply(mess.owner)
if (!text) return m.reply(`🚩 Example: jpm text|jeda\nFormat: jpm Hello World|1000\n*NOTE:* 1000 Milliseconds = 1 Seconds.`)
Dzhost.sendImageAsSticker(from, fs.readFileSync('./basedz/stickernye/wait.webp'), m, { packname: global.packname, author: global.author }, { quoted: m})
let getGroups = await Dzhost.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await Dzhost.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await Dzhost.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await Dzhost.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await Dzhost.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
m.reply(mess.succes)
}
break
// Hati² Dalam Menggunakan Fitur Ini, Karena Fitur Add Sedang Sensitif Banned
// Dari Pihak WhatsApp Atau Lainnya. Jadi, Hati² Saja Jika Menggunakan Fitur CreateGroup
// - 3 July 2023 -
//=================================================//
case "creategc":{
if (!isDzOwn) return m.reply(mess.owner)
if (!text) return m.reply("Group Name?")
let cret = await Dzhost.groupCreate(text, [])
let response = await Dzhost.groupInviteCode(cret.id)
let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB
▸ Link : https://chat.whatsapp.com/${response}
`
setTimeout(() => {
m.Reply(teks) 
}, 7000)
setTimeout(() => {
Dzhost.groupParticipantsUpdate(cret.id, [m.sender], "promote")
}, 5000)
setTimeout(() => {
Dzhost.groupParticipantsUpdate(cret.id, [m.sender], "add")
}, 1000)
}
break
//=================================================//
case "idgroup": case "idgc": {
if (!isDzOwn) return m.reply(mess.owner)
if (isGroup) return m.reply(mess.private)
m.reply(mess.wait)
let getGroups = await Dzhost.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP*\n\nTotal Group : ${anu.length} GROUP\n\n`
for (let x of anu) {
let metadata2 = await Dzhost.groupMetadata(x)
teks += `❏ *INFO GROUP*\n│⭔ *NAME :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks + `🚩 If you want to push kontak,type this command\n${prefix}pushkontak2 idgroup|Hello`)
}
break
//=================================================//
case 'block':{
if (!isDzOwn) return m.reply(mess.owner)
if (!q) return m.reply(`🚩 Example : ${prefix+command} 628xxxx`)
let nomorNya = q
await Dzhost.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
m.reply(mess.succes)
}
break
//=================================================//
case 'unblock':{
if (!isDzOwn) return m.reply(mess.owner)
if (!q) return m.reply(`🚩 Example: ${prefix+command} 628xxxx`)
let nomorNya = q
await Dzhost.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock")
m.reply(mess.succes)
}
break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) return m.reply(`🚩 Reply image or video, then use this command\n${prefix + command}`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Dzhost.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('🚩 Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await Dzhost.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`🚩 Send image or video, then use this command, ${prefix + command}`)
}
}
break
//=================================================//
case 'runtime':
m.reply(`🚩 *Runtime :* ${runtime(process.uptime())}`)
break
//=================================================//
case 'hidetag': {
if (!isGroup) return m.reply(mess.group)
if (!isAdmins) return m.reply(mess.admin)
Dzhost.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
//=================================================//
case 'ohidetag': {
if (!isDzOwn) return m.reply(mess.owner)
if (!m.isGroup) return m.reply(mess.group)
Dzhost.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: fkontak })
}
break
//=================================================//
case 'promote': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dzhost.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'opromote': {
if (!isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isDzOwn) return m.reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dzhost.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'public': {
if (!isDzOwn) return m.reply(mess.owner)
Dzhost.public = true
m.reply(mess.publics)
}
break
//=================================================//
case 'self': {
if (!isDzOwn) return m.reply(mess.owner)
Dzhost.public = false
m.reply(mess.selfs)
}
break
//=================================================//
case 'kick': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dzhost.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(mess.succes)).catch((err) => m.reply(mess.error))
}
break
//=================================================//
case 'domain':
dzdomain = `
────❏ [ *SUBDOMAIN MENU*  ] ❏─────
○ ${prefix}domain1 (diimzhostt.xyz)
○ ${prefix}domain2 (diimzzxd.my.id)
○ ${prefix}domain3 (diimz.site)
○ ${prefix}domain4 (diimzstore.tech)
○ ${prefix}domain5 (panellkuu.cloud)
○ ${prefix}domain6 (dzhostingid.my.id)
○ ${prefix}domain7 (panellstore.my.id)
○ ${prefix}domain8 (pterodactylkuu.my.id)

>>🚩 Example: ${prefix}domain7 dz|192xxxxxx

*Note:* Jika Domain Merah/Link Panel, Silahkan Tonton Video Ini\nhttps://youtube.com/shorts/Y7T2rgLqrMA?feature=share3`
m.reply(dzdomain)
break
//=================================================//
case 'domain1': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "52c96143d31c2d8026ede9451efe26b0";
let apitoken = "Wohz9gkDipz48JRvRFdblDq_dZ6di9jQPZ4z6xU3";
let tld = "diimzhostt.xyz";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}

let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain7': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "052d82ff61d45af26cd76f61955ee87b";
let apitoken = "lkGCmLjhdv9pG3wgGppfkj_hq01S1x0vJruNfhDj";
let tld = "panellstore.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain6': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "848967c90efb2df89859f21f6109e080";
let apitoken = "YHGD5J2UK4DLfRqfUB3veGoGiizyFIkvMXvgIUyb";
let tld = "dzhostingid.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain2': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "0276e94cbdf11ae28315eaedc370a13f";
let apitoken = "TgCds2kFazC9LhANWVJUKIZQPnlRYURMPMvIl2D9";
let tld = "diimzzxd.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain4': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "99aa8eff4af40190a77a00b37f263817";
let apitoken = "BxY_hAf3A02gTnFocQLQj4GZUAy6uPY6doBu_1Xu";
let tld = "diimzstore.tech";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain5': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "65f61d0fd65f2c56836b298ab0a546df";
let apitoken = "ZHIcQDnvj7-OoLwea0ppt42pYKdhfdBOwmzAQoJW";
let tld = "panellkuu.cloud";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
} 
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya"); 
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain3': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "4181daaa4a105c9b2b9be81dd85b42f7";
let apitoken = "np1WPiPMLnFxgUvNL_5-HMd7YvlhumpqNVtugDyX";
let tld = "diimz.site";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'domain8': {
if (!jangan) return m.reply("Maaf, Perintah ini hanya dapat digunakan digrup akses domain\nJika ingin akses domain, silahkan hubungi nomor ini wa.me/6285624116425")
function subDomain1(host, ip) {
return new Promise((resolve) => {
let zone = "8db82b3cfcf8b1bd88fc10cde8a0da9d";
let apitoken = "faic1RWxKoKAYU9p7UfShYDXocZ7TWj8yQTYXgNV";
let tld = "pterodactylkuu.my.id";
axios
.post(
`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + apitoken,
"Content-Type": "application/json",
},
}
)
.then((e) => {
let res = e.data;
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
})
.catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
let err1Str = String(err1);
resolve({ success: false, error: err1Str });
});
});
}
let raw1 = args?.join(" ")?.trim();
if (!raw1) return m.reply("mana host & ip nya?");
let host1 = raw1
.split("|")[0]
.trim()
.replace(/[^a-z0-9.-]/gi, "");
if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
subDomain1(host1, ip1).then((e) => {
if (e['success']) m.reply(`*Succes Create Subdomain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
else m.reply(`Failed To Create Subdomain\nMsg: ${e['error']}`)
}); }
break
//=================================================//
case 'addgc':
if (!isGroup) return m.reply(mess.group)         
if (!isPremiums) return m.reply(mess.premium)
pler.push(m.chat)
fs.writeFileSync('./basedz/idgrup.json', JSON.stringify(pler))
m.reply(mess.succes)
break
//=================================================//
case 'delgc':
if (!isPremiums) return m.reply(mess.premium)
var ini = pler.indexOf(m.chat)
pler.splice(ini, 1)
fs.writeFileSync('./basedz/idgrup.json', JSON.stringify(pler))
m.reply(mess.succes)
break
//=================================================//
case 'addpremium': case 'addprem':
if (!isDzOwn) return m.reply(mess.owner)
if (!args[0]) return m.reply(`🚩 Example: ${prefix+command} 62xxxxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let premiumss = await Dzhost.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (premiumss.length == 0) return m.reply(`🚩 Enter a valid number!`)
premium.push(bnnd)
fs.writeFileSync('./basedz/premium.json', JSON.stringify(premium))
m.reply(`🚩 The number ${bnnd} already registered as a premium.`)
break
//=================================================//
case 'delprem': case 'delpremium':
if (!isDzOwn) return m.reply(mess.owner)
if (!args[0]) return m.reply(`🚩 Example: ${prefix+command} 62xxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./basedz/premium.json', JSON.stringify(premium))
m.reply(`🚩 The number ${ya} no longer a premium.`)
break
//=================================================//
case 'listakses': {
if (!isDzOwn) return m.reply(mess.owner)
let listakses =`*LIST ACCESS SUBDOMAIN DZ.HOSTINGID*\n\nTotal Acces ${pler.length}\n`
var no = 1
for (let x of pler) {
listakses +=`\nGroup: ${no++}\nID: ${x}`
}
listakses +=`\n\n🚩 If you want to delete acces subdomain, type this command: ${prefix}delgc *idgroup*`
Dzhost.sendMessage(m.chat, {text: listakses},{quoted: fkontak})
}
break
//=================================================//
case "delsrv": {
if (!isDzOwn) return m.reply(mess.owner)
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
//=================================================//
case 'addseler':
if (!isPremiums) return m.reply(mess.premium)
if (!args[0]) return m.reply(`🚩 Example: ${prefix+command} 62xxxxx`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let reseller = await Dzhost.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (reseller.length == 0) return m.reply(`🚩 Enter a valid number!`)
owner.push(bnnd)
fs.writeFileSync('./basedz/seller.json', JSON.stringify(owner))
m.reply(`🚩 The number ${bnnd} already registered as a reseller.`)
break
//=================================================//
case 'delseler':
if (!isPremiums) return m.reply(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 0`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./basedz/seller.json', JSON.stringify(owner))
m.reply(`🚩 The number ${ya} no longer a reseller.`)
break
//=================================================//
case "createadmin": case "cadmin": {
if (!isDzOwn) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return m.reply(`🚩 Example: ${prefix + command} email,username,name,number/tag`);
let email = t[0];
let akunadmin = 'https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg';
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`🚩 Example: ${prefix + command} email,username,name,number/tag`);
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await Dzhost.sendMessage(m.chat, { text: `SUCCESSFULLY CREATE ADMIN PANEL\nID USER: ${user.id}

*Password Has Been Sended To @${u.split`@`[0]}*`, mentions:[u],
})
Dzhost.sendMessage(u, {text: `Hai Kak ${pushname} 

○ 📝ID: ${user.id}
○ 📩EMAIL: ${user.email}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password.toString()}
○ ️🌐LOGIN: ${domain}
○ ⚡TUTORIAL : https://youtu.be/58otrrXyagY

*S&K*
1. Jangan Mengotak Atik Panel
2. Jangan Digunakan Sampai Overload
3. Jangan Otak Atik Dibagian Nodes
4. Jangan Otak Atik Theme
5. Batas Hosting Minecraft Max 1/2
6. Harap Tidak Membagikan Domain Panel!
7. Harap Tidak Menyolong Script/Hosting Orang Lain! Hargai Buyer DzHostingID
8. Harap Tidak Membuat Server Cpu Melebihi Dari 1K%+
9. Harap Tidak Membuat Panel Memory/Disk Lebih Dari 20GB!

*❗Segera Ganti Password Akun Panel Anda❗*

Garansi Berlaku Hingga 1 Bulan Jika Melanggar T.O.S Atau S&K, Maka Garansi Hangus.`,
})
}
break
//=================================================//
case "1gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 1GB"
let egg = global.eggsnya
let loc = global.location
let memo = "1024"
let cpu = "80"
let disk = "1024"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 1GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "2gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 2GB"
let egg = global.eggsnya
let loc = global.location
let memo = "2048"
let cpu = "100"
let disk = "2048"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 2GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "4gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 4GB"
let egg = global.eggsnya
let loc = global.location
let memo = "4096"
let cpu = "140"
let disk = "4096"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 4GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "6gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 6GB"
let egg = global.eggsnya
let loc = global.location
let memo = "6144"
let cpu = "155"
let disk = "6144"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 6GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "8gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 8GB"
let egg = global.eggsnya
let loc = global.location
let memo = "8192"
let cpu = "175"
let disk = "8192"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 8GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "10gb": {
if (!isSeler) return m.reply(mess.seller)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - 10GB"
let egg = global.eggsnya
let loc = global.location
let memo = "10240"
let cpu = "200"
let disk = "10240"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel 10GB`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "unli": {
if (!isDzOwn) return m.reply(mess.owner) 
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = "Panel DzHostingID - Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel Unlimited`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
case "u": {
if (!isDzOwn) return m.reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return m.reply(`🚩 Example: ${prefix + command} user,number`)
let username = t[0];
let name = "Panel DzHostingID - Unlimited"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@dzhostingid.com"
akunlo = "https://telegra.ph/file/fbeb54c480b79ce8a810a.jpg" 
if (!u) return
let d = (await Dzhost.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`🚩 Account Has Been Created!\n⚡Type: Panel Unlimited`)
ctf = `Hai Kak @${u.split`@`[0]}, Ini Adalah Akun Panel Mu

○ 📝ID: ${user.id}
○ 👤USERNAME: ${user.username}
○ 🔐PASSWORD: ${password}
○ 🌐LOGIN: ${domain}

📮 *S&K*
1. Harap Tidak Menjual Akun Panel
2. Harap Tidak Multilogin (Terkecuali Sudah Izin Dengan Owner Panel)
3. Harap Tidak Membiarkan Panel Belum Dipakai
4. Harap Tidak Membagikan Domain Panel

❗Harap Segera Ganti Password Akun Anda❗

Cara Menggunakan Panel, Silahkan Cek Disini
https://youtu.be/58otrrXyagY`
Dzhost.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: Dzhost.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Expired 1 Month",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
}
break
//=================================================//
default:
}
if (budy.startsWith('>')) {
if (!isDzOwn) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isDzOwn) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
}catch (err) {
console.log(color('[ ERROR ]', 'red'), err)
const pushname = m.pushName
const from = m.key.remoteJid
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const moment = require("moment-timezone");
const jamwib = moment.tz('asia/jakarta').format('HH:mm:ss')
const tanggal = moment().tz("Asia/Jakarta").format("ll")
var errny =`*SERVER ERROR*
*From :* @${sender.split("@")[0]}
*Name :* ${pushname}
*Time :* ${jamwib}
*Date :* ${tanggal}
*Error Log :* ${err}`
Dzhost.sendMessage(`6285624116425@s.whatsapp.net`, { text: `${errny}`, mentions: [sender]})
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Updating New File At ${__filename}`))
delete require.cache[file]
require(file)
})