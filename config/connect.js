// Base Ori By DzHostingID
// Jan lupa subrek chanel gwehj🗿👌  https://youtube.com/@DzOfcc
// Wts? cet wa.me/6285624116425

require('./settings')
const { modul } = require('../module')
const { default: Dzhostconnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, fetchLatestWaWebVersion, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@adiwajshing/baileys')
const { state } = useSingleFileAuthState(`./dzhostingid.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const figlet = require('figlet')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { color, bgcolor, mycolor } = require('../js/lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('../js/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('../js/lib/functions')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { groupResponse_Welcome, groupResponse_Remove, groupResponse_Promote, groupResponse_Demote } = require('../config/dzgroup.js')

async function startDzhost() {
let { version, isLatest } = await fetchLatestBaileysVersion()
const Dzhost = Dzhostconnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Dz.HostingID','Opera','1.0.0'],
auth: state,
version
})

store.bind(Dzhost.ev)

// Anti Call & Auto Block
Dzhost.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
let dzcall = await Dzhost.sendContact(callerId, global.nomerOwner)
Dzhost.sendMessage(callerId, { text: `🚩 Called Detected!\nSorry, your numbers i will blocked because you call me\n\nPlease contact the owner to open if accidentally!`}, { quoted : dzcall })
await sleep(3000)
await Dzhost.updateBlockStatus(callerId, "block")
}
})

console.log(
    color(
      figlet.textSync("DzHostingID", {
        font: "Standard",
        horizontalLayout: "default",
        vertivalLayout: "default",
        whitespaceBreak: false,
      }),
      "blue"
    )
  );

Dzhost.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (m.key && m.key.remoteJid === 'status@broadcast') return
if (!Dzhost.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(Dzhost, m, store)
require('../js/dzhostid')(Dzhost, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
    
Dzhost.ev.on('group-participants.update', async (update) =>{
groupResponse_Demote(Dzhost, update)
groupResponse_Promote(Dzhost, update)
groupResponse_Welcome(Dzhost, update)
groupResponse_Remove(Dzhost, update)
console.log(update)
})

Dzhost.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

Dzhost.ev.on('contacts.update', update => {
for (let contact of update) {
let id = Dzhost.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

	Dzhost.ev.on("groups.update", async (json) => {
			console.log(json)
			const res = json[0];
			    try {
                    ppgroup = await Dzhost.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
			if (res.announce == true) {
				await sleep(500)
				let a = `🚩 Group has been closed!\nNow only admin can send message!`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.announce == false) {
				await sleep(500)
				let a = `🚩 Group has been open!\nNow participants can send message!`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == true) {
				await sleep(500)
				let a = `🚩 Group info has been restricted\nNow only admin can edit group info!`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == false) {
				await sleep(500)
				let anu = `🚩 Group info has been turn off\nNow participant can edit group info!`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if(!res.desc == ''){
				await sleep(500)
				let a = `🚩 Group description has been changed to\n\n${res.desc}`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }
            );
            } else {
				await sleep(500)
				let a = `🚩 Group Subject has been changed to\n\n${res.subject}`
				Dzhost.sendMessage(res.id, {
                    text: a, 
                    contextInfo: {
                        externalAdReply: {
                            title: `${namebot}`,
                            body: `${nameowner}`,
                            thumbnailUrl: ppgroup,
                            sourceUrl: `${ig}`,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                });
			}
        });

Dzhost.getName = (jid, withoutContact= false) => {
id = Dzhost.decodeJid(jid)
withoutContact = Dzhost.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = Dzhost.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === Dzhost.decodeJid(Dzhost.user.id) ?
Dzhost.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}
Dzhost.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await Dzhost.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${nameowner}\nFN:${nameowner}\nitem1.TEL;type=CELL;type=VOICE;waid=6285624116425:+62 856-2411-6425\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:dzhostingid@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://linktr.ee/store.dzhostingid.com\nitem3.X-ABLabel:Store\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
Dzhost.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}
    
Dzhost.setStatus = (status) => {
Dzhost.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

Dzhost.public = true

Dzhost.serializeM = (m) => smsg(Dzhost, m, store);
  Dzhost.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession) {
        console.log(`Bad Session File, Please Delete Session and Scan Again`);
        process.exit();
      } else if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startDzhost();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startDzhost();
      } else if (reason === DisconnectReason.connectionReplaced) {
        console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
        process.exit();
      } else if (reason === DisconnectReason.loggedOut) {
        console.log(`Device Logged Out, Please Delete Session Dzhostid and Scan Again.`);
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Restart Required, Restarting...");
        startDzhost();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection TimedOut, Reconnecting...");
        startDzhost();
      } else {
        console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
        startDzhost();
      }
    } else if (connection === "open") {
      console.log(color("Bot succesfully connected to server", "green"));
      console.log(color("Donate for creator https://saweria.co/DzHostingID", "yellow"));
      console.log(color("Type .menu to see menu"));
      Dzhost.sendMessage("6285624116425@s.whatsapp.net", { text: `Bot Online!\nDont Forget For Donate!:3 https://saweria.co/DzHostingID` });
    }
    // console.log('Connected...', update)
  });


Dzhost.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: thumb, gifPlayback: true }, { upload: Dzhost.waUploadToServer })
 const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 templateMessage: {
 hydratedTemplate: {
 videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
Dzhost.relayMessage(jid, template.message, { messageId: template.key.id })
}

Dzhost.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: Dzhost.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
Dzhost.relayMessage(jid, template.message, { messageId: template.key.id })
}

Dzhost.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: Dzhost.waUploadToServer })
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
Dzhost.relayMessage(jid, template.message, { messageId: template.key.id })
}

Dzhost.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
 "hydratedContentText": text,
 "locationMessage": {
 "jpegThumbnail": img },
 "hydratedFooterText": footer,
 "hydratedButtons": but
}
}
}), options)
Dzhost.relayMessage(jid, template.message, { messageId: template.key.id })
}

Dzhost.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: title,
 description: text,
 buttonText: buttext,
 footerText: footer,
 listType: "SELECT",
 sections: but,
 listType: 1
}
}), options)
Dzhost.relayMessage(jid, template.message, { messageId: template.key.id })
}

Dzhost.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
Dzhost.sendMessage(jid, buttonMessage, { quoted, ...options })
}

Dzhost.sendButMessage = async (id, text1, desc1, but = [], options) => {
let buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
return Dzhost.sendMessage(id, buttonMessage,{quoted: options})
}

Dzhost.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

Dzhost.sendText = (jid, text, quoted = '', options) => Dzhost.sendMessage(jid, { text: text, ...options }, { quoted })

Dzhost.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Dzhost.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

Dzhost.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Dzhost.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

Dzhost.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await Dzhost.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

Dzhost.sendTextWithMentions = async (jid, text, quoted, options = {}) => Dzhost.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

Dzhost.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}

await Dzhost.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

Dzhost.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}

await Dzhost.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
 
Dzhost.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
	let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

Dzhost.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
	}
	return buffer
 }
 
Dzhost.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
		let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await Dzhost.relayMessage(jid, waMessage.message, { messageId:waMessage.key.id })
return waMessage
}

Dzhost.cMod = (jid, copy, text = '', sender = Dzhost.user.id, options = {}) => {
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === Dzhost.user.id
return proto.WebMessageInfo.fromObject(copy)
}

Dzhost.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
return Dzhost
}

startDzhost()

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Updating File New At ${__filename}`))
delete require.cache[file]
require(file)
})