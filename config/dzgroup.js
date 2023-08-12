const fs = require('fs')

exports.groupResponse_Remove = async (Dzhost, update) => {
try {
ppuser = await Dzhost.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await Dzhost.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let metadata = await Dzhost.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Goodbyee!'}, type: 1 }]
await Dzhost.sendMessage(
update.id, 
{
text: `🚩 Goodbyee! @${num.split("@")[0]}`,
footer: metadata.subject, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (Dzhost, update) => {
try {
ppuser = await Dzhost.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const metadata = await Dzhost.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await Dzhost.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome!'}, type: 1 }]
await Dzhost.sendMessage(
update.id, 
{ 
text: `🚩 Welcome @${num.split("@")[0]} In The Group *${metadata.subject}.*\nTotal ${metadata.participants.length ? metadata.participants.length : "Undefined"} Members.`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (Dzhost, update) => {  
const metadata = await Dzhost.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await Dzhost.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Congrast!'}, type: 1 }]
await Dzhost.sendMessage(
update.id, 
{ 
text: `🚩 @${num.split("@")[0]} is now admin!`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
exports.groupResponse_Demote = async (Dzhost, update) => {  
const metadata = await Dzhost.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await Dzhost.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Wkwk'}, type: 1 }]
await Dzhost.sendMessage(
update.id, 
{ 
text: `🚩 @${num.split("@")[0]} now is not admin!`,
footer: metadata.subject,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}