const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix) => {
return `
乂 OWNER MENU
❏${prefix}self
❏${prefix}public
❏${prefix}join
❏${prefix}bc
❏${prefix}creategc
❏${prefix}shutdown
❏${prefix}setppbot
❏${prefix}addprem
❏${prefix}delprem
❏${prefix}addseler
❏${prefix}delseler
❏${prefix}listakses
❏${prefix}block
❏${prefix}unblock
❏${prefix}leavegc

乂 DOWNLOADER MENU
❏${prefix}mediafire
❏${prefix}play
❏${prefix}ytmp3
❏${prefix}ytmp4
❏${prefix}google

乂 HOSTING MENU
❏${prefix}pm4_1gb name,number
❏${prefix}pm4_2gb name,number
❏${prefix}pm4_4gb name,number
❏${prefix}pm4_6gb name,number
❏${prefix}pm4_8gb name,number
❏${prefix}pm4_10gb name,number

❏${prefix}pm5_1gb name,number
❏${prefix}pm5_2gb name,number
❏${prefix}pm5_4gb name,number
❏${prefix}pm5_6gb name,number
❏${prefix}pm5_8gb name,number
❏${prefix}pm5_10gb name,number

❏${prefix}paper_1gb name,number
❏${prefix}paper_2gb name,number
❏${prefix}paper_4gb name,number
❏${prefix}paper_6gb name,number
❏${prefix}paper_8gb name,number
❏${prefix}paper_10gb name,number

❏${prefix}bedrock_1gb name,number
❏${prefix}bedrock_2gb name,number
❏${prefix}bedrock_4gb name,number
❏${prefix}bedrock 6gb name,number
❏${prefix}bedrock_8gb name,number
❏${prefix}bedrock_10gb name,number

乂 PUSH KONTAK MENU
❏${prefix}pushkontak *text*
❏${prefix}pushkontak2 *idgc|text*
❏${prefix}pushkontak3 *idgc|jeda|text*
❏${prefix}savecontact *idgc*
❏${prefix}savecontact1
❏${prefix}jpm *text|jeda*
❏${prefix}idgc
❏${prefix}idgc2
❏${prefix}cekmember

乂 RESELLER MENU
❏${prefix}daftar
❏${prefix}1gb name,number
❏${prefix}2gb name,number
❏${prefix}4gb name,number
❏${prefix}6gb name,number
❏${prefix}8gb name,number
❏${prefix}10gb name,number
❏${prefix}unli name,number

乂 PAYMENT
❏${prefix}qris
❏${prefix}ovo
❏${prefix}dana
❏${prefix}gopay
❏${prefix}linkaja

乂 JADIBOT MENU
❏${prefix}jadibot
❏${prefix}listjadibot

乂 PANEL MENU
❏${prefix}addsrv
❏${prefix}listsrv
❏${prefix}detsrv
❏${prefix}delsrv
❏${prefix}addusr
❏${prefix}listusr
❏${prefix}detusr
❏${prefix}delusr
❏${prefix}suspend
❏${prefix}unsuspend
❏${prefix}reinstall
❏${prefix}createadmin
❏${prefix}listadmin
❏${prefix}ramlist

乂 GROUP MENU
❏${prefix}antilink
❏${prefix}antilink2
❏${prefix}antiwame
❏${prefix}antihttps
❏${prefix}antihttp
❏${prefix}antibitly
❏${prefix}autojpm
❏${prefix}sendgc
❏${prefix}linkgroup
❏${prefix}delete
❏${prefix}setppgroup
❏${prefix}setname
❏${prefix}setdesc
❏${prefix}kick
❏${prefix}promote
❏${prefix}demote
❏${prefix}hidetag
❏${prefix}opentime
❏${prefix}closetime
❏${prefix}revoke
❏${prefix}listonline
❏${prefix}promoteall
❏${prefix}demoteall
❏${prefix}removeall

乂 DOMAIN MENU
❏${prefix}addgc
❏${prefix}delgc
❏${prefix}domain

乂 STALKER MENU
❏${prefix}igstalk
❏${prefix}ffstalk
❏${prefix}mlstalk
❏${prefix}npmstalk
❏${prefix}ghstalk

乂 STORE MENU
❏${prefix}done
❏${prefix}pending
❏${prefix}kali
❏${prefix}bagi
❏${prefix}kurang
❏${prefix}tambah
❏${prefix}listjasainstall
❏${prefix}listvps
❏${prefix}listpanel
❏${prefix}listhosting
❏${prefix}listscript
❏${prefix}listproduk

乂 OTHER MENU
❏${prefix}runtime
❏${prefix}script
❏${prefix}tqto
❏${prefix}tourl
❏${prefix}toimg
❏${prefix}toqr
❏${prefix}qc
❏${prefix}s
❏${prefix}sgif
❏${prefix}emojimix
❏${prefix}toonce
❏${prefix}owner
❏${prefix}sewabot
❏${prefix}donasi
❏${prefix}ssweb
❏${prefix}ip

© _2023 DzHostingID Allrights Reserved._`}

global.downloadermenu = (prefix) => {
return `❏${prefix}mediafire
❏${prefix}play
❏${prefix}ytmp3
❏${prefix}ytmp4
❏${prefix}google`}

global.ownermenu = (prefix) => {
return `❏${prefix}self
❏${prefix}public
❏${prefix}join
❏${prefix}bc
❏${prefix}creategc
❏${prefix}shutdown
❏${prefix}setppbot
❏${prefix}addprem
❏${prefix}delprem
❏${prefix}addseler
❏${prefix}delseler
❏${prefix}listakses
❏${prefix}block
❏${prefix}unblock
❏${prefix}leavegc
❏${prefix}user add
❏${prefix}user del`}

global.hostingmenu = (prefix) => {
return `❏${prefix}pm4_1gb name,number
❏${prefix}pm4_2gb name,number
❏${prefix}pm4_4gb name,number
❏${prefix}pm4_6gb name,number
❏${prefix}pm4_8gb name,number
❏${prefix}pm4_10gb name,number

❏${prefix}pm5_1gb name,number
❏${prefix}pm5_2gb name,number
❏${prefix}pm5_4gb name,number
❏${prefix}pm5_6gb name,number
❏${prefix}pm5_8gb name,number
❏${prefix}pm5_10gb name,number

❏${prefix}paper_1gb name,number
❏${prefix}paper_2gb name,number
❏${prefix}paper_4gb name,number
❏${prefix}paper_6gb name,number
❏${prefix}paper_8gb name,number
❏${prefix}paper_10gb name,number

❏${prefix}bedrock_1gb name,number
❏${prefix}bedrock_2gb name,number
❏${prefix}bedrock_4gb name,number
❏${prefix}bedrock 6gb name,number
❏${prefix}bedrock_8gb name,number
❏${prefix}bedrock_10gb name,number`}

global.pushkontakmenu = (prefix) => {
return `❏${prefix}pushkontak *text*
❏${prefix}pushkontak2 *idgc|text*
❏${prefix}pushkontak3 *idgc|jeda|text*
❏${prefix}savecontact *idgc*
❏${prefix}savecontact1
❏${prefix}jpm *text|jeda*
❏${prefix}idgc
❏${prefix}idgc2
❏${prefix}cekmember`}

global.resellermenu = (prefix) => {
return `❏${prefix}daftar
❏${prefix}1gb name,number
❏${prefix}2gb name,number
❏${prefix}4gb name,number
❏${prefix}6gb name,number
❏${prefix}8gb name,number
❏${prefix}10gb name,number
❏${prefix}unli name,number`}

global.payment = (prefix) => {
return `❏${prefix}qris
❏${prefix}ovo
❏${prefix}dana
❏${prefix}gopay
❏${prefix}linkaja`}

global.jadibotmenu = (prefix) => {
return `❏${prefix}jadibot
❏${prefix}listjadibot`}

global.panelmenu = (prefix) => {
return `❏${prefix}addsrv
❏${prefix}listsrv
❏${prefix}detsrv
❏${prefix}delsrv
❏${prefix}addusr
❏${prefix}listusr
❏${prefix}detusr
❏${prefix}delusr
❏${prefix}createadmin
❏${prefix}listadmin
❏${prefix}ramlist
❏${prefix}suspend
❏${prefix}unsuspend
❏${prefix}reinstall`}

global.groupmenu = (prefix) => {
return `❏${prefix}antilink
❏${prefix}antilink2
❏${prefix}antiwame
❏${prefix}antihttps
❏${prefix}antihttp
❏${prefix}antibitly
❏${prefix}autojpm
❏${prefix}sendgc
❏${prefix}linkgroup
❏${prefix}delete
❏${prefix}setppgroup
❏${prefix}setname
❏${prefix}setdesc
❏${prefix}kick
❏${prefix}promote
❏${prefix}demote
❏${prefix}hidetag
❏${prefix}opentime
❏${prefix}closetime
❏${prefix}revoke
❏${prefix}listonline
❏${prefix}demoteall
❏${prefix}promoteall
❏${prefix}removeall`}

global.domainmenu = (prefix) => {
return `❏${prefix}addgc
❏${prefix}delgc
❏${prefix}domain`}

global.stalkermenu = (prefix) => {
return `❏${prefix}igstalk
❏${prefix}ffstalk
❏${prefix}mlstalk
❏${prefix}npmstalk
❏${prefix}ghstalk`}

global.othermenu = (prefix) => {
return `❏${prefix}runtime
❏${prefix}script
❏${prefix}tqto
❏${prefix}tourl
❏${prefix}toimg
❏${prefix}toqr
❏${prefix}qc
❏${prefix}s
❏${prefix}sgif
❏${prefix}emojimix
❏${prefix}toonce
❏${prefix}stats
❏${prefix}owner
❏${prefix}sewabot
❏${prefix}donasi
❏${prefix}ssweb
❏${prefix}ip`}

global.storemenu = (prefix) => {
return `❏${prefix}done
❏${prefix}pending
❏${prefix}kali
❏${prefix}bagi
❏${prefix}kurang
❏${prefix}tambah
❏${prefix}listjasainstall
❏${prefix}listvps
❏${prefix}listpanel
❏${prefix}listhosting
❏${prefix}listscript
❏${prefix}listproduk`}

global.animemenu = (prefix) => {
return `❏${prefix}waifu
❏${prefix}loli
❏${prefix}husbu
❏${prefix}cosplay`}

global.depositmenu = (prefix) => {
return `❏${prefix}deposit
❏${prefix}acc
❏${prefix}bukti
❏${prefix}minsaldo
❏${prefix}buysrv
❏${prefix}buyakn
❏${prefix}listpremium`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Updating New File At ${__filename}`))
delete require.cache[file]
require(file)
})