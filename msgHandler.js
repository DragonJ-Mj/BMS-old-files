const { decryptMedia, decryptAniSticker } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const axios = require('axios')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const get = require('got')
const { fromBuffer } = require('file-type')
const Fb = require('fb-video-downloader');
const requests = require('request');
const gis = require('g-i-s')
let index = JSON.parse(fs.readFileSync('data.json', 'utf8'));
//const pokefunc = require('./lib/poke.js'
const yts = require('yt-search')
const color = require('./lib/color')
const {msg} = require('./nonPrefix');
const config = require('./config.json')
const convertapi = require('convertapi')('10CDuw4T35HeKK39')
const { RemoveBgResult, removeBackgroundFromImageBase64, removeBackgroundFromImageFile } = require('remove.bg') //paid
//const DIG = require("discord-image-generation");
//const farewell = require('./lib/farewell.json')
//const  listcc = ["goodbye","we shall see you soon " , "tata" , "well then bye bye "]
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const emojiUnicode = require('emoji-unicode')
const puppeteer = require('puppeteer')
const options = { headless: true, userDataDir: "./logs/Chrome/Maker", args: ['--aggressive-cache-discard', '--disable-application-cache', '--disable-cache', '--disable-offline-load-stale-cache', '--disable-setuid-sandbox', '--disk-cache-size=0', '--ignore-certificate-errors', '--no-sandbox', '--single-process'] } // Leia a functions.js para maiores detalhes

const nekos = require('nekos.life')
//const ytdl = require('ytdl-core')
const ytsr = require('ytsr')
//const sclient = require('./nonPrefix')
const neko = new nekos()
const _function = require('./lib/function');
const limit = JSON.parse(fs.readFileSync('./lib/limit.json'))
const {term} = require('./lib/term')
const paidusers =JSON.parse(fs.readFileSync('./lib/pro.json'))
const unlimted =JSON.parse(fs.readFileSync('./lib/unlimted.json'))
const botadmins =JSON.parse(fs.readFileSync('./lib/botadmins.json'))
const images = require('./lib/images')
const setting1 = require('./lib/setting1.json')
const google = require('google-it')
const { JSDOM } = require('jsdom')
const func = require('./lib/functions')
const { help, info, pokegame, menu } = require('./lib/help.js')
const feature = require('./features.js');
const sendSticker = require('./sendSticker')
const groupban = JSON.parse(fs.readFileSync('./lib/groupban.json'))
const mime = require('mime-types')
const msgFilter = require('./lib/msgFilter')
const muted = JSON.parse(fs.readFileSync('./lib/muted.json'))
const msgLimit = JSON.parse(fs.readFileSync('./lib/msgLimit.json'))
//const DIG = require("discord-image-generation");
const { fetchJson} = require('./lib/fetcher')
const akaneko = require('akaneko')
const fetch = require('node-fetch')
const spamsettings = JSON.parse(fs.readFileSync('./data/spam.json'))
const bent = require('bent')
const a = require('./lib/exp.js')
const profile = require('./lib/profile.js')
const pokefunc = require('./lib/poke.js')
const trade = require('./lib/trade.js')
const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const sexy = JSON.parse(fs.readFileSync('./lib/sexy.json'))
const _rule = JSON.parse(fs.readFileSync('./lib/rule.json'))
const farewell = JSON.parse(fs.readFileSync('./lib/farewell.json'))
const bot = JSON.parse(fs.readFileSync('./lib/bot.json'))
const hentai = JSON.parse(fs.readFileSync('./lib/hentai.json'))
const astro = JSON.parse(fs.readFileSync('./lib/astro.json'))
const nsfwgrp = JSON.parse(fs.readFileSync('./lib/nsfw.json'))
const pokarr = JSON.parse(fs.readFileSync('./lib/poke.json'))
const pkarrs = JSON.parse(fs.readFileSync('./lib/pokedata/pkmnz.json'))
const resFunc = require('./lib/response.js')
const haigushaFunc = require('./lib/haigusha.js')
const code = require('./lib/code.js')
const errorurl3 = 'https://cdn.dribbble.com/users/3096869/screenshots/6977499/screenshot_2019-08-13_at_00.10.01_1x.png?compress=1&resize=400x300'
const errorurl = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const errorurl2 = 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
const fun = require('./lib/profile/fun.js')
const sticker = require('./lib/sticker.js')
const spam = require('./lib/profile/spam.js')
const smart = JSON.parse(fs.readFileSync('./data/smart.json'))
const translate = require('@vitalets/google-translate-api')
// const jsdom = require('jsdom')
const intz = require('./lib/intz.js')
const DIG = require('discord-image-generation');
const url=require("url");
const anime = require('./lib/anime.js')
//const ban = JSON.parse(fs.readFileSync('./data/ban.json'))
const ban = JSON.parse(fs.readFileSync('./lib/banned.json'))
const chara = require('./lib/chara.js')
const lb = require('./lib/lead.js')
const mathjs = require('mathjs')
const e = require('./lib/economy.js')
const gambleArr = ['919847916693-1610781571@g.us', '919744375687-1596550546@g.us']
const groupFunc = require('./lib/group.js')
const {  misc } = require('./lib')
const FormData =require('form-data');
//const { yta, ytv, igdl,  } = require('./lib/ytdl')
//const yta = require('./lib/ytdl')
//const ytv = require('./lib/ytdl')
//const { uploadImages } = require('./function/fetcher.js')
//let wazx = []
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function BMSctrl() {

    await sleep(6000)
    fs.unlinkSync('../../zel.json')

}

async function getUserInfo(message) {

	const data = await sclient.getContact(message.mentionedJidList[0])
	console.log(data) 
	return data.pushname

}
const processTime = (timestamp, now) => {
    return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}


const uploadImages = (buffData, fileName) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = await frombuffer(buffData)
        const filePath = `temp/${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Uploading image to telegra.ph server...')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}
const babifitur = {
    pertanyaanbabi: '',
    jawabanbabi: '',
    pertanyaanbabisudah: []
}
const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}







/*const delall = () =>  {
    if (connection.state === 'disconnected')  connection.connect() }*/

let { 
    limitCount,
    memberLimit, 
    groupLimit,
    banChats,
    restartState: isRestart,
    mtc: mtcState
    } = setting1


function sleep1(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//varuable

 //const JSDOM = require('jsdom')
//fucntion
function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                   let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let mthumb = document.querySelector('img').src
                    let mtitle = document.querySelector('b').innerHTML
                

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                mdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                mthumb,
                                mtitle,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}



function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "/",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let vfilesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let vthumb = document.querySelector('img').src
                    let vtitle = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 360
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(vfilesize) * (1000 * /MB$/.test(vfilesize))
                            resolve({
                                vdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                vthumb,
                                vtitle,
                                vfilesizeF: vfilesize,
                                vfilesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}
 

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "/",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}
module.exports = msgHandler = async (client,  message) => {

	//console.log(message)
    //if (message.isGroupMsg && message.chat.groupMetadata.participants.length < 11) return //client.reply(message.from, 'Group needs Atleast 10 (members excluding me) to use commands', message.id)
    try {


	//Variable Dc
        const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, p,  mentionedJidList, author, quotedMsgObj } = message
        const { formattedTitle, isGroup, contact, groupMetadata } = chat;
        let { body } = message
         const serial = sender.id
          const ishentai = hentai.includes(chat.id)
              const issexy = sexy.includes(chat.id)
             // const bmsArr = ["919089248348-1624781808@g.us"]
               // if (bmsArr.includes(event.chat)) {
               



        const { name } = chat
        let { pushname, verifiedName } = sender
        const prefix = ':'
        body = (type === 'chat' && body.startsWith(prefix)) ? body : ((type === 'image' && caption) || (type === 'video' && caption) && caption.startsWith(prefix)) ? caption : ''
        const command = body.slice(prefix.length).trim().split(/ +/).shift().toLowerCase()
        const args = body.slice(prefix.length).trim().split(/ +/).slice(1)
        const validMessage = caption ? caption : body;
        const arguments = validMessage.trim().split(' ').slice(1);
   // const argj = bodi.substring(bodi.indexOf(' ') + 1)
     const isCmd = body.startsWith(prefix)
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
        const isQuotedVoice = quotedMsg && quotedMsg.type === 'ptt'
       // const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
        const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
        const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
        const isImage = type === 'image'
        const isAudio = type === 'audio'
         const q = args.join(' ')
        
            const senderr = sender.id
        const isVoice = type === 'ptt'
          const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
      

       /* if (isGroup) {
      if (groupMetadata.participants.length < 10 && !botOwner.includes(groupMetadata.owner)) {
        await client.reply(from, `⚠️ Ooops... maaf untuk menghidari grup SPAM, bot hanya dapat di gunakan di grup yang mempunyai member lebih dari 10, sedangkan member grup kamu hanya ada ${groupMetadata.participants.length}\n\n_Untuk informasi lebih lanjut silahkan tanyakan saya di instagram @rzkytmgrr_`, id);
        return client.leaveGroup(from);
      }
    }*/
	//const isBanned = banArr.includes(message.author)
	
    const iswel = wel.includes(chat.id)
       
    const isfarewell = farewell.includes(chat.id)
    const isbot = bot.includes(chat.id)
    const isastro = astro.includes(chat.id)
    const botNumber = await client.getHostNumber()
   //  const ismsgFilter = msgFilter.includes(chat.id)
	//const botadmins = []
	 const isunlimted = unlimted.includes(serial)
 //const paidusers = 
        const ispaid = paidusers.includes(serial)
 	const isbotadmin = botadmins.includes(serial)
    const isgroupban = groupban.includes(chat.id)
        const ismuted = muted.includes(chat.id)
 	const adminNumber = []
 	const isAdmin = adminNumber.includes(sender.id)
	const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await client.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        const isDetectorOn = isGroupMsg ? _rule.includes(groupId) : false
       const isBanned = ban.includes(serial)
	const isSmart = smart.includes(chat.id)

        
     

  


function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

	const mess = {
            wait: '[ WAIT ] In procepross⏳ please wait a moment',
            error: {
                St: '[❗] Send the image with the caption !Sticker or the image tag that has been sent',
                Qm: '[❗] An error has occurred, maybe the theme is not available!',
                Yt3: '[❗] An error occurred, unable to convert to mp3!',
                Yt4: '[❗] An error has occurred, maybe the error is caused by the system.',
                Ig: '[❗] An error occurred, maybe because the account is private',
                Ki: '[❗] Bot cannot issue group admins!',
                Ad: '[❗] Cannot add target, maybe because it is private',
                Iv: '[❗] The link you submitted is invalid!'
            }
        }


	//Checking Stuff
	//if (isCmd && isGroupMsg && isBanned) return client.reply(from, 'You\'re banned', id)
    const captionks = `*you are banned* \n*you were banned due to auto ban onr normal ban* \n*please contact my developers*`
    
                
     if (isCmd && ban.includes(sender.id)) return client.reply(from,captionks , id)
	if (isGroupMsg && !isGroupAdmins && isBotGroupAdmins && isSmart) spam.into(message, color, isBotGroupAdmins)
    if (isCmd && msgFilter.isFiltered(author) && !isGroupMsg) return console.log(color('[SPAM!]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
    if (isCmd && msgFilter.isFiltered(author) && isGroupMsg) return console.log(color('[SPAM!]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name))
	if (message.type == 'sticker' && !isBanned) sticker.stickerHandler(message, client, isGroupAdmins, isBotGroupAdmins, _rule, groupAdmins, color, time, fs, ban, isbotadmin)
	if (isGroupMsg && isDetectorOn && (type === 'chat' && message.body.includes('chat.whatsapp.com') && isBotGroupAdmins) && !isGroupAdmins) {
                console.log(color('[KICK]', 'red'), color('Received a group link and it is a valid link!', 'yellow'))
                await client.reply(from, `*You've sent a group link!*\n*Sorry, but you have to leave...Nice knowing you~*`, id)
                await client.removeParticipant(chat.id, author)
        }
      
    if (!isCmd && isGroupMsg) {
		 const dt = (message.type == 'sticker') ? 'STIK' : (isBanned) ? 'BANN' : 'RECV'
		 if (isBanned) return 0
		 return console.log(`[${dt}]`, color(time, 'yellow'), 'Message from', color(pushname), 'in', color(name))
	}
	if (isCmd && isGroupMsg && isBanned) return client.reply(from, 'You\'re banned', id)
	if (!isGroupMsg && isBanned) return 0
	if (!isCmd && !isGroupMsg) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(message.pushname))
        if (isCmd && !isGroupMsg) console.log(color('[EXEC]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) 
        
        if (isCmd && isGroupMsg) console.log(color('[EXEC]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name))
      /*  if (command.startsWith(':')) {return false;}
        let foundc = false;
        for (let i of msgLimit){
            if(i.id === id){
        if (i.msg >= 3) {
            foundc === false 
            client.reply(from, '*[auto-ban]*\n Sorry, your account we block because of unlisted cmds, and can not be unblocked!', id)
            client.contactBlock(id)
            banned.push(id)
            fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
        }
    }
}*/
    
          
        const isnsfw = nsfwgrp.includes(chat.id)
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
        pollfile = 'poll_Config_'+chat.id+'.json'
        voterslistfile = 'poll_voters_Config_'+chat.id+'.json'
        msgFilter.addFilter(author)
	//More Variabales
    const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        //const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~%=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~%?&/=]*)/gi)
       // const isUrl = new RegExp(/(https:\/\/chat.whatsapp.com)/gi)
        //const url = args.length !== 0 ? args[0] : ''
          const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const url = args.length !== 0 ? args[0] : ''
     if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM!]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
       // if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM!]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name))
       // if (isCmd && msgFilter.isFiltered(author) && !isGroupMsg) return console.log(color('[SPAM!]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        if (isGroupMsg && isgroupban && (type === 'chat' && message.body.match(isgroupban) && isBotGroupAdmins) && !isGroupAdmins) return await client.removeParticipant(chat.id, author)
          if (chat.id == '919089248348-1621058051@g.us' || chat.id =='94786821098-1616691681@g.us' ||  chat.id =='916238312046-1617686827@g.us' ||  chat.id =='27656035811-1600249425@g.us' ||  chat.id =='994404364430-1607502294@g.us' || chat.id == ' 918580731249-1616836725@g.us'|| chat.id == '27640170108-1616848307@g.us'|| chat.id == ' 919089248348-1621058051@g.us' || chat.id == '918412054787-1621004288@g.us' || chat.id == '60143039770-1609745110@g.us') {
        
        if (fs.existsSync('../../zel.json')) return console.log('[ASTRO] Already Done!')
        fs.writeFileSync('../../zel.json', '[]')
        BMSctrl()
         //console.log('well')
    
} 
//fucntion
function yta(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let filesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let mthumb = document.querySelector('img').src
                    let mtitle = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp3',
                        fquality: 128
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                mdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                mthumb,
                                mtitle,
                                filesizeF: filesize,
                                filesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "/",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                url,
                q_auto: 0,
                ajax: 1
            })
                .then(res => res.json())
                .then(res => {
                    let document = (new JSDOM(res.result)).window.document
                    let type = document.querySelectorAll('td')
                    let vfilesize = type[type.length - 10].innerHTML
                    let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    let vthumb = document.querySelector('img').src
                    let vtitle = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                        type: 'youtube',
                        _id: id[1],
                        v_id: ytId[1],
                        ajax: '1',
                        token: '',
                        ftype: 'mp4',
                        fquality: 360
                    })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(vfilesize) * (1000 * /MB$/.test(vfilesize))
                            resolve({
                                vdl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                                vthumb,
                                vtitle,
                                vfilesizeF: vfilesize,
                                vfilesize: KB
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

function post(url, formdata) {
    console.log(Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&'))
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "/",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}


	    //db fetch
	    let _exp = tb.get(`${sender.id}.exp`)
	    let _dex = tb.get(`${sender.id}.pokedex`)
	    let _so = tb.get(`${sender.id}.haigusha`)
	    let _items = tb.get(`${sender.id}.items`)
	    let _gold = tb.get(`${sender.id}.gold`)
	    let _diamonds = tb.get(`${sender.id}.diamonds`)
	    let _bank = tb.get(`${sender.id}.bank`)
	    
	    //db validation
	    let expa = (_exp) ? _exp : 0
	    let dex = (_dex) ? _dex : []
	    let so = (_so) ? _so : 'None'
	    let items = (_items) ? _items : []
	    let gold = (_gold) ? _gold : 0
	    let diamonds = (_diamonds) ? _diamonds : 0
	    let bank = (_bank) ? _bank : 0

	    //adding
	    if (isGroupMsg && !body.startsWith('$sr')) {
	    //groupFunc.groupData(message, true)
	    //exp
	    let charm = (items.includes('Exp Charm 💫️')) ? 2 : 1
	    let rx = charm*Math.floor(Math.random() * 20) + 5
	    const addxp = (expa) ? expa+rx : rx
	    tb.set(`${sender.id}.exp`, addxp)

	    //gold
	    let go = (items.includes('Gold Charm ⚜️')) ? 4 : 1
	    let ag = Math.floor(Math.random() * 6) + 2
	    let fg = (gold < 0) ? 0 : ag*go
	    if (ag !== 0) tb.set(`${sender.id}.gold`, fg+gold)

	    }
	    _gold = tb.get(`${sender.id}.gold`)
	    _exp = tb.get(`${sender.id}.exp`)
	    gold = (_gold) ? _gold : 0
        expa = (_exp) ? _exp : 

	    //adding
      
        msgFilter.addFilter(from)
        /*if (command.startsWith(':')) {return true;}{
          if(isGroupMsg){
              if(message.type === 'chat'){
             indx = Math.floor(Math.random() * index.length)
            pprrt = index[indx]
            jjwwb = index[indx]
            img = index[indx]
             babifitur['pertanyaanbabi'] = pprrt.tanya
             babifitur['jawabanbabi'] = jjwwb.jawab
              if (!(sender.id in spamsettings)){
                  spamsettings[serial] = 0
              }
              spamsettings[serial] += 1
              fs.writeFileSync('./data/spam.json', JSON.stringify(spamsettings))
              if (spamsettings[serial] >= 5){
                // const uptkee = await axios.get('https://nekos.life/api/v2/img/hentai')
           // client.reply('Loading........')
            client.reply(from, '*[AUTO-BAN]*\n SORRY YOUR ACCOUNT HAS BEEN BANNED BEACUSE of SPAM', id)
                                //client.contactBlock(id)
                                ban.push(id)
                                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
         /* client.sendFileFromUrl(from, uptkee.data.url, 'off.png', `sexy
*HENTAI HAS ARRIVED*

_ENJOY_

*ASTRO HENTAI ZONE*`, id)*/
                // client.sendFileFromUrl(from, img.url, 'asw.png', pprrt.tanya, id)
	if(isbot){
                if(ishentai){
              if(message.type === 'chat'){
             indx = Math.floor(Math.random() * index.length)
            pprrt = index[indx]
            jjwwb = index[indx]
            img = index[indx]
             babifitur['pertanyaanbabi'] = pprrt.tanya
             babifitur['jawabanbabi'] = jjwwb.jawab
              if (!(sender.id in spamsettings)){
                  spamsettings[serial] = 0
              }
              spamsettings[serial] += 1
              fs.writeFileSync('./data/spam.json', JSON.stringify(spamsettings))
              if (spamsettings[serial] >= 5){
                 const uptkee = await axios.get('https://nekos.life/api/v2/img/hentai')
           // client.reply('Loading........')
          client.sendFileFromUrl(from, uptkee.data.url, 'off.png', `sexy
*HENTAI HAS ARRIVED*

_ENJOY_

*ASTRO HENTAI ZONE*`, id)
                // client.sendFileFromUrl(from, img.url, 'asw.png', pprrt.tanya, id)
                 spamsettings[serial] -= 5
                 fs.writeFileSync('./data/spam.json', JSON.stringify(spamsettings))
             }
         }
     }

 }
 //const pokefunc = require('./lib/poke.js')
 
 

                
      // if (command.startsWith(':')) {return true;}


	    // function isMsgLimit(id){
	    	 function isMsgLimit(id){
                  if (isAdmin) {return false;}
                    let found = false;
                    for (let i of msgLimit){
                        if(i.id === id){
                            if (i.msg >= 5) {
                                found === true 
                                client.reply(from, '[ANTI-BAN]\n AUO BAN!', id)
                                client.contactBlock(id)
                                ban.push(id)
                                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                                return true;
                            }else if(i.msg >= 3){
                                found === true
                                client.reply(from, '[ANTI-SPAM]\nNomor anda terdeteksi spam!\nMohon tidak spam 5 pesan lagi atau nomor anda AUTO BLOK!', id)
                                return true
                            }else{
                                found === true
                                return false;
                            }   
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, msg:1};
                        msgLimit.push(obj);
                        fs.writeFileSync('./lib/msgLimit.json',JSON.stringify(msgLimit));
                        return false;
                    }  
                }

            msgFilter.addFilter(from)
                function addMsgLimit(id){
                    if (isAdmin) {return;}
                    var found = false
                    Object.keys(msgLimit).forEach((i) => {
                        if(msgLimit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        msgLimit[found].msg += 1;
                        fs.writeFileSync('./lib/msgLimit.json',JSON.stringify(msgLimit));
                    }
                }
                function isLimit(id){
                    if (isAdmin) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === id){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                client.reply(from, 'Your BOT command has reached the limit, try tomorrow :)', id)
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${id}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
                function limitAdd (id) {
                    if (isAdmin) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == id){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./lib/limit.json',JSON.stringify(limit));
                    }
                }
 // const isMuted = (chatId)
                const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

         if(body === ':activate' && isMuted(chatId) == true){

                    if(isGroupMsg) {
                       // if (!isbotadmin) return client.reply(from, 'Sorry, this command can only be done by Risa admins!', id)
                        if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
                        bot.push(chatId)
                        fs.writeFileSync('./lib/bot.json', JSON.stringify(bot))
                        client.reply(from, `*ASTRO BOT IS NOW REGISTERED ON ${name}* use :deact bot to unresgister bot_`, id)
                    }
                }
        if(body === ':mute' && isMuted(chatId) == true){
                    if(isGroupMsg) {
                        if (!isbotadmin) return client.reply(from, 'THIS CAN ONLY BE DONE BY ASTRO ADMINS!!!!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bots have been mute on this chat! :unmute to unmute!', id)
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        muted.push(chatId)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        reply(from, 'Bots have been mute on this chat! :unmute to unmute!', id)
                    }
                }
                
               
                if(body === ':unmute' && isMuted(chatId) == false){
                    if(isGroupMsg) {
                        if (!isbotadmin) return client.reply(from, 'THIS CAN ONLY BE DONE BY ASTRO ADMINS!!!!', id)
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bot has been in unmute!', id)         
                    }else{
                        if(isMsgLimit(serial)){
                            return
                        }else{
                            addMsgLimit(serial)
                        }
                        let index = muted.indexOf(chatId);
                        muted.splice(index,1)
                        fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                        client.reply(from, 'Bot has been in unmute!', id)                   
                    }
                }
                 if (!isGroupMsg && command.startsWith(':')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname))
                 if (isGroupMsg && command.startsWith(':')) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(msgs(command)), 'from', color(pushname), 'in', color(formattedTitle))
                 if (!isMuted(chatId)) return
                // END HELPER FUNCTION

     
         if (!isbot) return await client.reply(from,
`_*ASTRO BOT IS NOT REGISTERED ON ${name}*_ 
_*PLEASE USE :ACTIVATE TO USE ASTRO BOT*_`, id)
             if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota or to upgrade and get unlimited limit type :paid`, id)
             await limitAdd(serial)
            
         	// if (msgFilter.isFiltered(from)) await client.reply(from, `GROUP ${name} is on cool down, Wait 30 seconds before using any command again`, message.id)
         //if (msgFilter.isFiltered(message.author)) return client.reply(message.from, 'Woah there! Calm Down, Wait *4-5 minutes* before attempting to use a cmd again!', message.id)
         if (isMuted(chatId) && !isBanned || isSadmin) {
            switch (command) {
case 'stickhhr':
client. sendText(from, 'sorry this feature is disabled due to errors', message.id)
         break
         
         
           case 'stickernocrop':
            case 'stickerp':
            case 'sticker-c':
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(pushname), id)
                if (isMedia && isImage || isQuotedImage) {
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                    //limit.addLimit(senderr, _limit, isPremium, isOwner)
                    try {
                   // await client.reply(from, msg.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImageAsSticker(from, imageBase64,  { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'},id)
                    console.log(`Sticker processed for ${processTime(q, moment())} seconds`)
                } catch (err) {
                    console.error(err)
                    await client.reply(from, 'Error!', id)
                }
            } else {
                   // await Client.reply(from, `Untuk membuat sticker no crop\nsilahkan *upload* atau reply foto dengan caption ${prefix}stnc`, id)
            }
            break
           /* case 'bot':
            const members = await client.getGroupMembersId(chat.id)

               const bot = ['27656035811@c.us', '919830157671@c.us']
           for (mem of members) {
               if (mem === bot) bot += `@${mem}`

                }
          await client.sendTextWithMentions(from, bot)
          break*/
           case 'bot':
             const botnum = []
            let admn = `List of current bots\nTotal : ${botnum.length}\n`
            for (let i of botnum) {
                admn += `➸ @${i.replace(/@c.us/g,'')}\n`
            }
          //  await client.reply(from, admn, id)
             await client.sendTextWithMentions(from, admn, message.id)
            break

          case 'takestick':
            case 'take':
             if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
              //  if (!isPremium) return await zn.reply(from, msg.notPremium(), id)
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(pushname), id)
                if (quotedMsg && quotedMsg.type == 'sticker') {
               // i///f (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(senderr, _limit, isPremium, isOwner)
                       // if (!q.includes('|')) return await zn.reply(from, `*FORMAT SALAH*\n\nReply sticker dengan caption *${prefix}takestick pack | author*\n\nContoh: ${prefix}takestick zein | uwu`, id)
                        //await client.reply(from, msg.wait(), id)
                        const packnames = q.substring(0, q.indexOf('|') - 1)
                        const authors = q.substring(q.lastIndexOf('|') + 2)
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await client.sendImageAsSticker(from, imageBase64,  { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'} )
                        .catch(async (err) => {
                            console.error(err)
                            await client.reply(from, 'Error!', id)
                        })
                    } else {
                        //await zn.reply(from, `Reply sticker yang ingin dicolong dengan caption *${prefix}takestick pack | author*\n\nContoh: ${prefix}takestick zein | uwu`, id)
                    }
            break

                       case 'clima':
                if (args.length == 0) return await kill.reply(from, mess.noargs() + 'city names/nomes de cidade/nombres de ciudad.', id)
                const clima = await axios.get(`https://pt.wttr.in/${encodeURIComponent(body.slice(7))}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
                await client.sendFileFromUrl(from, `https://wttr.in/${encodeURIComponent(body.slice(7))}.png`, '','hello', id)
                break
                
          
          case 'translate':
            case 'trans':
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                if (!q.includes('|')) return await client.reply(from, 'wrongFormat \n use :translate (word)|lang ', id)
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                //limit.addLimit(senderr, _limit, isPremium, isOwner)
                const texto = q.substring(0, q.indexOf('|') - 1)
                const languaget = q.substring(q.lastIndexOf('|') + 2)
                translate(texto, {to: languaget}).then(res => {client.reply(from, res.text, id)})
            break
         /*case 'stiker':
         case 'sticker':
            if (isMedia && type === 'image' || isQuotedImage) {
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const _mimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
                    .then(async () => {
                        console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, `Error!\n${err}`, id)
                    })
            } else {
                await client.reply(from, 'wrongFormat', id)
            }
        break
        case 'stickergif':
        case 'stikergif':
            if (isMedia && type === 'video' || mimetype === 'image/gif') {
                try {
                    const mediaData = await decryptMedia(message, uaOverride)
                    const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendMp4AsSticker(from, videoBase64, { fps: 24, startTime: `00:00:00.0`, endTime : `00:00:05.0`, loop: 0 })
                        .then(async () => {
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                } catch (err) {
                    console.error(err)
                    await client.reply(from, 'The video size is too large!', id)
                }
            } else if (isQuotedGif || isQuotedVideo) {
                try {
                    const mediaData = await decryptMedia(quotedMsg, uaOverride)
                    const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendMp4AsSticker(from, videoBase64, { fps: 30, startTime: `00:00:00.0`, endTime : `00:00:03.0`, loop: 0 })
                        .then(async () => {
                            console.log(`Sticker processed for ${processTime(t, moment())} seconds`)
                        })
                } catch (err) {
                    console.error(err)
                    await client.reply(from, 'The video size is too large!', id)
                }
            } else {
                await client.reply(from, 'wrong format', id)
            }
        break*/
          case 'sticker':
                
			//if ((isMedia && type == 'video') || (quotedMsg && quotedMsg.type == 'video')) return client.reply(from, 'Animated Sticker Creation disabled!', id)
                        if (isMedia && type == 'video') {

                        	if (message.duration < 15) {
                        		  const vidmediadata = await decryptMedia(message);
                       const vidb64 = `data:${mimetype};base64,${vidmediadata.toString('base64')}`;
                          await client.sendMp4AsSticker(from, vidb64, { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 },  { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'});
                       		} else {
                       			await client.reply(from, 'The given file is too large for converting', id)
				}
                        } else if (isMedia && type == 'image') {
                      		const mediaData = await decryptMedia(message)
                      		const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                      		const baseImg = imageBase64.replace('video/mp4','image/gif')
                      		await client.sendImageAsSticker(from, baseImg, { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'})
                    	} else if (quotedMsg && quotedMsg.type == 'image') {
                    		const mediaData = await decryptMedia(quotedMsgObj)
                    		const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    		await client.sendImageAsSticker(from, imageBase64, { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'})
                	} else if (quotedMsg && quotedMsg.type == 'video') {
                           		if (quotedMsg.duration < 15) {
                          		  const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await client.sendMp4AsSticker(from, videoBase64, { fps: 10, startTime: `00:00:00.0`, endTime : `00:00:06.0`, loop: 0 },  { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'})
                                  // await client.sendMp4AsSticker(from, vidb64, { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 },  { pack: body.split('|')[1] || 'ASTRO BOTS', author: body.split('|')[2] || 'MK'});
                          		 } else {
                          		await client.reply(from, 'The given file is too large for converting', id)
                          		}
	                } else {
                  		client.reply(from, 'You did not tag a picture or video, Baka', message.id)
                    	}
                	break
                    case 'wikipedia':
      case 'wiki':
        if (arguments.length < 1) return await client.reply(from, ' :wiki <keywords>', id);
        const getWiki = await _function.wiki(arguments.join(' '));
       if (!getWiki) return await client.reply(from, `⚠️ ${arguments.join(' ')} not found`, id);
        await client.sendImage(from, getWiki.picUrl, `${p}_${sender.id}.jpg`, getWiki.caption, id);
        break;

case 'wolf':
                if (args.length >= 2 && arks.includes('|')) {
                    const wolftype = ["https://textpro.me/create-wolf-logo-black-white-937.html", "https://textpro.me/create-wolf-logo-galaxy-online-936.html"];
                    const wolfchoice = wolftype[Math.floor(Math.random() * wolftype.length)];
                    if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await client.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
                    await client.reply(from,'Wait', id)
                    const browserwf = await puppeteer.launch(options)
                    const pagewf = await browserwf.newPage()
                    await pagewf.goto(wolfchoice, { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
                        await pagewf.waitForSelector('#text-0')
                        await pagewf.type("#text-0", arg.split('|')[0])
                        await pagewf.type("#text-1", arg.split('|')[1])
                        await pagewf.click("#submit")
                        await sleep(10000) // Aumente se sua conexão for superr lenta
                        await pagewf.waitForSelector('div[class="thumbnail"] > img')
                        const divElement = await pagewf.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
                        await client.sendFileFromUrl(from, divElement, 'wolf.jpg', '', id)
                        await browserwf.close()
                    })
                } else return await client.reply(from, '.', id)
                break

        case 'ytmp3':
        case 'mp3':
            if (!isGroupMsg) return await client.reply(from, 'Groups Only', id)
            if (args.length == 0) return client.reply(from, `Is it a YouTube video link ? Sorry sis, I can't help you... I am blind`, id)
            await client.reply(from, `*[Downloading.......🪄]*`, id)
            
              const srch = args.join(' ')
            const mp3 = await yta(args[0])
            var { mtitle, filesize, mdl_link, mthumb } = mp3
            if (filesize > '40' * 1000) return client.reply(from, `File size is too big onii chan :(\n${mdl_link}`, id)
            await client.sendImage(from, mthumb, 'thumb.jpg',`*📔Title*: ${mtitle}\n*📀㎅ size*: ${filesize} \n*✨Website* : youtube.com \n*🌐url* : ${srch} \n *⬇️Download link* :${mdl_link}`, id)
            await client.sendFileFromUrl(from, mdl_link, `${mtitle}.mp3`,`${mtitle}`, id)
            break
           
              
            case 'ytmp4':
        case 'mp4':
            if (!isGroupMsg) return await client.reply(from, 'Groups Only', id)
            if (args.length == 0) return client.reply(from, `Is it a YouTube video link ? Sorry sis, I can't help you... I am blind`, id)
            await client.reply(from, `*[Downloading.......🪄]*`, id)
            const srch4 = args.join(' ')
            const mp4 = await ytv(args[0])
            var { vtitle, vfilesize, vdl_link, vthumb } = mp4
            if (vfilesize > '40' * 1000) return client.reply(from, `File size is too big onii chan :(\n${vdl_link}`, id)
           // await client.sendImage(from, vthumb, 'thumb.jpg',`Title: ${vtitle}\n㎅ size: ${vfilesize}`, id)
            await client.sendFileFromUrl(from, vdl_link, `${vtitle}.mp4`, `*📔${vtitle}* \n*✨Website* : youtube.com \n*🌐url* : ${srch4} \n*⬇️Download Link* :${vdl_link}`, id)
            break
                   // case 'gifsticker':
   //   case 'gifstiker':
      //  if (!mimetype) return await client.reply(from, '⚠️ Contoh Penggunaan Perintah : kirim sebuah video pendek yang ingin dijadikan stiker lalu berikan caption !gifstiker', id);
       // if (!mimetype.includes('mp4')) return await client.reply(from, '⚠️ Pastikan yang anda kirim adalah file video ber-ekstensi mp4', id);
       // const vidmediadata = await decryptMedia(message);
       // const vidb64 = `data:${mimetype};base64,${vidmediadata.toString('base64')}`;
       // await client.sendMp4AsSticker(from, vidb64, { fps: 10, startTime: `00:00:00.0`, endTime: `00:00:05.0`, loop: 0 });
       // break;
                   /* case 'stiker':
                        //if ((isMedia && type == 'video') || (quotedMsg && quotedMsg.type == 'video')) return client.reply(from, 'Animated Sticker Creation disabled!', id)
                                    if (isMedia && type == 'video') {
            
                                        if (message.duration < 15) {
                                            sendSticker.sendAnimatedSticker(message)
                                           } else {
                                               await client.reply(from, 'The given file is too large for converting', id)
                            }
                                    } else if (isMedia && type == 'image') {
                                          const mediaData = await decryptMedia(message)
                                          const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                                          const baseImg = imageBase64.replace('video/mp4','image/gif')
                                          await client.sendImageAsSticker(from, baseImg)
                                    } else if (quotedMsg && quotedMsg.type == 'image') {
                                        const mediaData = await decryptMedia(quotedMsgObj)
                                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                                        await client.sendImageAsSticker(from, imageBase64)
                                } else if (quotedMsg && quotedMsg.type == 'video') {
                                               if (quotedMsg.duration < 15) {
                                              sendSticker.sendAnimatedSticker(quotedMsgObj)
                                              } else {
                                              await client.reply(from, 'The given file is too large for converting', id)
                                              } 
                                } else {
                                      client.reply(from, 'You did not tag a picture or video, Baka', message.id)
                                    }
                                break*/
            case '':
            const listcc = ['https://1.bp.blogspot.com/-HSv6X4jtJCQ/YM2S3a-ojTI/AAAAAAAABa8/R1VIKLXGi8wmicnfN52sreFkh0pxkMAiACLcBGAsYHQ/s754/IMG-20210619-WA0055.jpg','https://1.bp.blogspot.com/-tgehydieQPY/YM2S3VkzeyI/AAAAAAAABbA/Xz-2ZCwWrbcR_I6BV_R2c13k_RX746jCgCLcBGAsYHQ/s752/IMG-20210619-WA0056.jpg','https://1.bp.blogspot.com/-F4SCl5_-M-A/YM2S3LivnDI/AAAAAAAABa4/mMykocklgBQIcxlhYJxvBqKiGxRersd-QCLcBGAsYHQ/s640/IMG-20210619-WA0054.jpg','https://1.bp.blogspot.com/-fSnYgM_abwg/YJ4J50r9n9I/AAAAAAAABXM/MlsGGOdAczAIEjjTqEStFmX8aAasPeveQCLcBGAsYHQ/s1920/IMG-20210514-WA0026.jpg','https://1.bp.blogspot.com/-uAxnSJxKcMI/YJ4J5iir6YI/AAAAAAAABXI/s6GrecLykDwJ98W-65uQDl35ckcCgJyuwCLcBGAsYHQ/s1728/IMG-20210514-WA0025.jpg']
            let kyapc = listcc[Math.floor(Math.random() * listcc.length)]
            client.sendFileFromUrl(from, kyapc, 'dk.jpg', 'DID YOU MEAN *:Help*', message.id)
          break

case 'images':
                if (!isGroupMsg) return await client.reply(from, 'Groups Only', id)
                {
                
                const qwery = q.split('|')[0]
                const jum = q.split('|')[1]
                
                
                if(!qwery) return await client.reply(from, `Enter the keyword, for example = ${prefix}goimg image of a giraffe | 3`, id)
                if(!jum) return await client.reply(from, `Number of drawings required, example = ${prefix}images drawing of a giraffe | 3`, id)
                if(jum >=100) return await client.reply(from, 'Too many numbers! Max 100', id)
                var gis = require('g-i-s');
                var opts = {
                    searchTerm: qwery
                  };
                  gis(opts, logResults);
                
                function logResults(error, results) {
                    if (error) {
                      client.reply(from, 'Error', id)
                    }
                    else {
                      const item = results.slice(0, jum)
                      item.forEach(async(res) => {
                          console.log(res)
                        
                        client.sendImage(from, res.url, null, `*🖼️ Image : ${qwery}\nPowered by ASTRO.Inc🚀*`)  
                        
                        })
                     }
                  }     
                }
                break

          case'c':
         const up = await axios.get('https://simsumi.herokuapp.com/api?text=hi&lang=vi')

           return await client.sendText(from, up.data.url,  id)
        break

        /*  case 'waifu':
            const waifu = await axios.get('https://nekos.life/api/v2/img/waifu')
            console.log(waifu.image)
            client.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `here is your waifu`, id)
            break */
        case 'husbu':
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            client.sendFileFromUrl(from, rindKiy.image, 'Husbando.jpg', rindKiy.teks, id)
            break

            case 'signo':;case 'horoscope':
                const signoerr = `❌ → ${args[0]} ← ❌!\n\n✔️ → Aries --- Taurus --- Gemini --- Cancer --- Leo --- Virgo --- Libra --- Scorpio --- Sagittarius --- Capricorn --- Aquarius --- Pisces.`
                if (args.length == 0) return await client.reply(from, signoerr, id)
                const zodd = await axios.get(`http://horoscope-api.herokuapp.com/horoscope/today/${encodeURIComponent(args[0])}`)
                if (zodd.data.horoscope == '[]') return await client.reply(from, signoerr, id)
               await client.reply(from, zodd.data.horoscope, id)
                await sleep(5000)
               break
case 'book':
                if (args.length == 0) return await kill.reply(from, mess.noargs() + 'book name/nome do livro/nombre del libro.', id)
                const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(body.slice(6))}`)
                const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`)
                await client.sendFileFromUrl(from, `${getBook.data.volumeInfo.imageLinks.thumbnail}`, 'book.jpg',`📚 - *Title:* ${getBook.data.volumeInfo.title}\n✍️ - *Author:* ${getBook.data.volumeInfo.authors[0]}\n\n📅 - *Published at:* ${getBook.data.volumeInfo.publishedDate}\n\n📝 - *Published by:* ${getBook.data.volumeInfo.publisher}\n\n📄 - *Pages:* ${getBook.data.volumeInfo.pageCount}\n\n👓 - *Read:* ${getBook.data.accessInfo.webReaderLink}\n\n📖 - *Description:* ${getBook.data.volumeInfo.description}\n\n➕ - *View More:* ${getBook.data.volumeInfo.canonicalVolumeLink}`, id)
                break

               

        case'pro':
case'paid':
const {  Paid } = require('./lib/paid')
client.reply(from, Paid, id )
break
            
            case'enhance': // made by mk
            if (isMedia && type == 'image') {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')} enhanced null`
                const baseImg = imageBase64.replace('video/mp4','image/gif')
                await client.sendImage(from, baseImg, 'base.jpg', 'enhanced.null', id)

            }
            else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsgObj)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImage(from, imageBase64, 'base.jpg', 'enhanced.null', id)
            }
            break 

            case 'enhance-t': // by bmsz team 
                if (isMedia && type == 'image') {
                    try {
                      const mediaData = await decryptMedia(message, uaOverride)
                      const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                      const base64img = imageBase64
                      const filename = "./media/pic.jpg";
                      //console.log(base64img)
                      const outFile = './media/noBg.png'
                      const result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'Ddsk2zrp1xx21LeQgxfrXk2x', size: 'auto', type: 'auto', outFile })
                          await fs.writeFile(outFile, result.base64img)
                          await client.sendImage(from, `data:${mimetype};base64,${result.base64img}`,'enhanced.null')
                      } catch(err) {
                          console.log(err)
                      }
                  }
                  else if (quotedMsg && quotedMsg.type == 'image') {
                    try {
                      const mediaData = await decryptMedia(message, uaOverride)
                      const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                      const base64img = imageBase64
                      const filename = "./media/pic.jpg";
                      //console.log(base64img)
                      const outFile = './media/noBg.png'
                      const result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'Ddsk2zrp1xx21LeQgxfrXk2x', size: 'auto', type: 'auto', outFile })
                        await fs.writeFile(outFile, result.base64img)
                     
                          await client.sendImage(from, `data:${mimetype};base64,${result.base64img}`,'enhanced.null')
                      } catch(err) {
                          console.log(err)
                      }
                  }
                  break

                  /* case 'sticker':
            case 'stiker':
            //if ((isMedia && type == 'video') || (quotedMsg && quotedMsg.type == 'video')) return client.reply(from, 'Animated Sticker Creation disabled!', id)
                        if (isMedia && type == 'video') {

                            if (message.duration < 15) {
                                sendSticker.sendAnimatedSticker(message)
                            } else {
                                await client.reply(from, 'The given file is too large for converting', id)
                }
                        } else if (isMedia && type == 'image') {
                            const mediaData = await decryptMedia(message)
                            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            const baseImg = imageBase64.replace('video/mp4','image/gif')
                            await client.sendImageAsSticker(from, baseImg)
                        } else if (quotedMsg && quotedMsg.type == 'image') {
                            const mediaData = await decryptMedia(quotedMsgObj)
                            const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                            await client.sendImageAsSticker(from, imageBase64)
                    } else if (quotedMsg && quotedMsg.type == 'video') {
                                if (quotedMsg.duration < 15) {
                                sendSticker.sendAnimatedSticker(quotedMsgObj)
                                } else {
                                await client.reply(from, 'The given file is too large for converting', id)
                                } 
                    } else {
                        client.reply(from, 'You did not tag a picture or video, Baka', message.id)
                        }
                    break*/
    
            case 'resize': // made by mk
                   // if (user < 500) return sclient.reply(message.from, 'cannot resize this!', message.id)
                    //if (target < 500) return sclient.reply(message.from, 'image too large ', message.id)
                    if (!isGroupMsg) return client.reply(from, 'This command is only for pro users', id)
                    if(ispaid){
                        if (args.length == 0) return client.reply(from, `To use the cmd send: ${prefix}resize [400/400]`)
                        if (isMedia && type == 'image') {
                            //const cariwallb = body.slice(8)
                            //const hasilwalll = await images.fdci(cariwallb)
                            const mediaData = await decryptMedia(message)
                            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                            const baseImg = imageBase64.replace('video/mp4','image/gif')
                            await client.sendImage(from, baseImg ,`image resized to ${name}`,)

                    }
                }
                else if (quotedMsg && quotedMsg.type == 'image') {
                    const mediaData = await decryptMedia(quotedMsgObj)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    await client.sendImage(from, imageBase64, `image resized to ${name}` )
                }
                break 

                	
       /*case 'sticker-p':
		const mz = (quotedMsg) ? quotedMsg : message
		if (body.includes('|')) return client.reply(from, 'You need to specify pack and author name')
		const s = body.split('|')
		if (mz.type !== 'video' || s[1] == '' || s[2] == '') return client.reply(from, 'Wrong Format!', id)
		const dc = await decryptMedia(mz)
		const dt = await sendSticker.convertMp4BufferToWebpDataUrl(mz, 'Emilia', s[1], s[2])
		return client.sendRawWebpAsSticker(from, dt)*/
       case 'bag':
       case 'pack':
		if (!isGroupMsg) return	
		if (items.length == 0) return client.reply(from, 'You don\'t have any items in your pack', id)
		let yz = `${pushname}'s Pack\n\n`
		for (let zl = 0; zl < items.length; zl++) {
			yz += `*${zl+1}.* ${items[zl]}\n`
		}
		return client.reply(from, yz, id)
		case 'yuri':
                if (isGroupMsg) {
                    // if (!isNsfw) return await bocchi.reply(from, ind.notNsfw(), id)
                    await client.reply(from, 'wait', id)
                    await client.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                } else {
                    await client.reply(from, 'wait..', id)
                    await client.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                }
            break

             case 'set_pro':
            if (!isbotadmin) return client.reply(from, 'This command can only be used by botadmins!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                paidusers.push(mentionedJidList[i])
                fs.writeFileSync('./lib/pro.json', JSON.stringify(paidusers))
                client.reply(from, `Success Added to Pro users!`, id)
                }
            break

             case 'set_unlimited':
            if (!isbotadmin) return client.reply(from, 'This command can only be used by botadmins!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                unlimted.push(mentionedJidList[i])
                fs.writeFileSync('./lib/unlimted.json', JSON.stringify(unlimted))
                client.reply(from, `Success Added to unlimited users!`, id)
                }
            break

          

            case 'set_legion':
            if (!isbotadmin) return client.reply(from, 'This command can only be used by botadmins!', id)
                for (let i = 0; i < mentionedJidList.length; i++) {
                botadmins.push(mentionedJidList[i])
                fs.writeFileSync('./lib/botadmins.json', JSON.stringify(botadmins))
                client.reply(from, `congrats, you are now a *BMSZ LEGION*`, id)
                }
            break

            case 'del_pro':
            if(!isbotadmin) return client.reply(from, 'Only Bot admins can use this CMD!', message.id)
                let inq = adminNumber.indexOf(mentionedJidList[0])
               paidusers.splice(inq, 1)
                fs.writeFileSync('./lib/pro.json', JSON.stringify(paidusers))
                client.reply(from, `Success removed from pro users!`, id)
            break
            case 'del_legion':
        if (!isbotadmin) return
        let numberzp = message.mentionedJidList
        for (let i = 0; i < numberzp.length; i++) {
        if (botadmins.includes(numberzp[i])) {
        let iz = botadmins.indexOf(numberzp[i])
        botadmins.splice(iz, 1)
        }
        }
        fs.writeFileSync('./lib/botadmins.json', JSON.stringify(botadmins))
        return client.reply(from, 'Successful!', id)
             case 'del_unlimited':
            if (!isbotadmin) return client.reply(from, 'This command can only be used by botadmins!', id)
                let int = adminNumber.indexOf(mentionedJidList[0])
               unlimted.splice(int, 1)
                fs.writeFileSync('./lib/unlimted.json', JSON.stringify(unlimted))
                client.reply(from, `Success removed from unlimited users!`, id)
            break

           /*  case 'images':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota`, id)
            
            await limitAdd(serial)
            if (args.length == 0) return client.reply(from, `To use the cmd send: ${prefix}images [search]`, id)
            const cariwall = body.slice(8)
            const hasilwall = await images.fdci(cariwall)
            const imgg = errorurl3
            client.sendFileFromUrl(from, hasilwall, '', '', id)
            .catch(() => {
                client.sendFileFromUrl(from, `${imgg}`, 'imgg.jpeg', '*ERROR FROM SERVER CLOUD*\nUse :report[text] if this happen next time[0_-]', id)
            })
            break */

            case 'getsticker':
                const stkm = await fetch(`https://api.fdci.se/sosmed/rep.php?gambar=${encodeURIComponent(body.slice(12))}`)
                const stimg = await stkm.json()
                let stkfm = stimg[Math.floor(Math.random() * stimg.length) + 1]
                if (stkfm == null) return await client.reply(from, mess.noresult(), id)
                await client.sendStickerfromUrl(from, stkfm, { method: 'get' })
                break

            case 'cosplay':
                if (args.length == 0) return await client.reply(from, mess.noargs() + 'nome/nombre/name.', id)
                await client.sendStickerfromUrl(from, `https://rest.farzain.com/api/special/fansign/cosplay/cosplay.php?apikey=rambu&text=${encodeURIComponent(body.slice(9))}`)
                break

               case 'gaming':
                if (args.length == 0) return await client.reply(from, message.noargs() + 'palavras/words/números/numbers.', id)
                await client.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/gaming?text=${body.slice(8)}`, '', '', id)
                breaks
                

             case 'playstore':
                    if (args.length == 0) return client.reply(from, `Example ${prefix}playstore [query]`, id)
                    client.reply(from, 'Loading...', id)
                    axios.get(`https://api-gplay.azharimm.tk/apps?q=${args}&limit=10`)
                    .then(async(res) => {
                        let plx = `[PLAY STORE SEARCH RESULTS]`
                        for (let i = 0; i < res.data.data.results.length; i++) {
                            plx += '\n\n🏷 '
                            plx += '' + res.data.data.results[i].title + ''
                            plx += '\nApp id : ' + res.data.data.results[i].appId
                            plx += '\nDeveloper : ' + res.data.data.results[i].developer
                            plx += '\nRating : ' + res.data.data.results[i].scoreText
                            plx += '\nDiscription :\n' + res.data.data.results[i].summary
                            plx += '\n' + res.data.data.results[i].url
                        }
                        await client.sendFileFromUrl(from, `${res.data.data.results[0].icon}`, '', plx, id)
                    })
                    .catch(() => {
                        client.reply(from, 'An error occured!', id)
                        })
                    break

                    case 'limit':
                if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
                      if (isGroupMsg) {
                         var found = false
                    for(let lmt of limit){
                        if(lmt.id === serial){
                            let limitCounts = limitCount-lmt.limit
                            //console.log(stss)
                            //console.log(stsss)
                            //console.log(stsssss)
                            if(limitCounts <= 0) return client.reply(from, `Your request limit has expired`, id)
                        
                      var pic = await client.getProfilePicFromServer(author)
                      var namae = pushname
                      //let totalMem = chat.groupMetadata.participants.length
                       if (pic == undefined) {
                       var pfp = errorurl 
                       } else {
                       var pfp = pic
                       } 
                       await client.sendFileFromUrl(from, pfp, 'pfp.jpg', `           *♬User limit♬*
                     \n*${namae}* The rest of your request limit remains : *${limitCounts}/300*`, message.id)
                       found = true
                        }
                    }
                    if (found === false){
                        let obj = {id: `${serial}`, limit:1};
                        limit.push(obj);
                        fs.writeFileSync('./lib/limit.json',JSON.stringify(limit, 2));
                        client.reply(from, `*${namae}* The rest of your request limit remains : *${limitCount}*`, id)
                    }
                     }
                     break
             break

             case 'term': 

            const lu = 'https://1.bp.blogspot.com/-7r7Pa-TVtxs/YFC1f3ySjXI/AAAAAAAABE4/2qUstlYU_t0NJn2W_R8NW5rHK0OtyjYTQCLcBGAsYHQ/s1000/IMG-20210316-WA0356.jpg'

            client.sendFileFromUrl(from, lu , ' see.jpg' , term, id)
            client.sendPtt(from, './media/term.mp3',id)

            break
            break

            case 'gay': {
             
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota`, id)
            
            await limitAdd(serial)
            
            let name = body.trim().split(' ').slice(1).toString().replace(/,/g, ' ')
            const random = await Math.floor(Math.random() * (100 - 1) + 1)
            const pg = 'http://images5.fanpop.com/image/answers/2454000/2454603_1329760918765.95res_499_281.jpg'
            const ife = 'https://b.thumbs.redditmedia.com/RMG4G0sW7cqKdQ_QR5yfY5LCgOkpE9zs7m-ho-DuAvs.png'
            const iq = 'https://i.kym-cdn.com/photos/images/newsfeed/001/041/283/5e1.jpg'
            const iu = 'https://i.kym-cdn.com/photos/images/facebook/001/289/252/7b7.png'
            if(random < 15) return await client.sendFileFromUrl(from, `${pg}`, 'oi.png', `Gay ${name} Result ${random}%.\n==============================\nNote : Slow THE GAY ATTITUDE bro\n==============================`, id)
            if(random < 50) return await client.sendFileFromUrl(from, `${ife}`, 'donr.png', `Gay ${name} Result*${random}%.\n==============================\nNote : *GOODLUCK BEING GAY\n==============================`, id)
            if(random < 75) return await client.sendFileFromUrl(from,`${iq}`, 'gt.png', `Gay ${name} Result ${random}%.\n==============================\nNote : STAY AWAY FROM US GAY!!!\n==============================`, id)
            if(random <= 100) return await client.sendFileFromUrl(from,`${iu}`, 'bs.png', `Gay ${name} Result ${random}%.\n==============================\nNote : THERE IS NO HOPE FOR YOU !!!\n==============================`, id)
            }
            break
          
           case 'google':
                        
            if (args.length == 0) return client.reply(from, `Send the Google search command by typing the command :\n*${prefix}google* Query search\nExample :\n*=google* Seconds News today`, id)
             const googleQuery = body.slice(8)
            if(googleQuery == undefined || googleQuery == ' ') return client.reply(from, `Error could not find a result from ${googleQuery}`, id)
            google({ 'query': googleQuery }).then(results => {
            //console.log(results)
            
            let captserch = `𝐆𝐨𝐨𝐠𝐥𝐞 𝐬𝐞𝐚𝐫𝐜𝐡 𝐟𝐫𝐨𝐦 - ${googleQuery}\n`
            for (let i = 0; i < results.length; i++) {
                captserch +=  `\n❐ *Title*: ${results[i].title}\n✍ *Description*: ${results[i].snippet}\n🔗 *Link*: ${results[i].link}\n`
            }
            //let vars = results[0]
                client.sendFileFromUrl(from, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/449d2971-6fc8-4f68-b507-1e2bf3345d11/d8vpwh7-d1307bdb-24cb-4d70-9295-1dc479efdd29.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ0OWQyOTcxLTZmYzgtNGY2OC1iNTA3LTFlMmJmMzM0NWQxMVwvZDh2cHdoNy1kMTMwN2JkYi0yNGNiLTRkNzAtOTI5NS0xZGM0NzllZmRkMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G9kclk1D3hgk5Fw5bp_DZ2OosKCgp_PwebyWim9EfTU', 'file.jpg', captserch, id);
            }).catch(e => {
                console.log(e)
                
            })
            await client.sendSeen(from)
            break

            case 'mention':
    if (!isGroupMsg) return
    if (!isGroupAdmins) return client.reply(from, 'Perintah ini hanya untuk admin!', id)
    {
    const text1 = argj.split('-')[0]
    const text2 = argj.split('-')[1]
    if (Number(text2) >= 15) return client.reply(from, 'Max 15!')
    if (text2 > 15) return client.reply(from, 'Max 15!')
    await client.sendTextWithMentions(from, `Mention ${text1} ${text2} Times....`)
    for (let i = 0; i < text2; i++) {
        await client.sendTextWithMentions(from, `${text1}\n\nAdmin *${pushname}* called you`)
        await sleep(2000)
    }
}
break
case 'text3d':
    try{
    {
        const text = body.slice(8)
        await client.sendFileFromUrl(from, 'https://docs-jojo.herokuapp.com/api/text3d?text='+text, 'Text3D.jpg', '', id)
        await limitAdd(serial)
        const he = errorurl3
    }
}catch{
    client.sendFileFromUrl(from, `${he}`, 'bake.png', 'Oopsss... error from server , try again..')
}
break
case 'thunder':
    try{
    {
        const text = body.slice(9)
        const jk = errorurl3
        await client.sendFileFromUrl(from, 'https://docs-jojo.herokuapp.com/api/thunder?text='+text, 'Text3D.jpg', '', id)
        await limitAdd(serial)
    }
}catch{
    client.sendFileFromUrl(from, `${jk}`, 'sn.png', 'Oopsss... an error occured, try again..')
}
break
case 'blackpink':
    try{
    {
        const text = body.slice(11)
        const hi = errorurl3
        await client.sendFileFromUrl(from, 'https://docs-jojo.herokuapp.com/api/blackpink?text='+text, 'Text3D.jpg', '', id)
        await limitAdd(serial)
    }
}catch{
    client.sendFileFromUrl(from, `${hi}`, 'hm.png', 'Oopsss... an error occured, try again..')
}


break

case 'manga':
                if (args.length == 0) return await client.reply(from, mess.noargs() + 'manga name/nome do manga/nombre de manga.', id)
                const getManga = await axios.get(`https://api.jikan.moe/v3/search/manga?q=${encodeURIComponent(body.slice(7))}&limit=1`)
                if (getManga.data.status == 404 || getManga.data.results[0] == '') return await client.sendFileFromUrl(from, errorurl, 'error.png', mess.noresult())
                return await client.sendFileFromUrl(from, `${getManga.data.results[0].image_url}`, 'manga.jpg', `✔️ - Is that?\n\n✨️ *Title:* ${getManga.data.results[0].title}\n\n🎆️ *Chapters:* ${getManga.data.results[0].chapters}\n\n💌️ *Volumes:* ${getManga.data.results[0].volumes}\n\n❤️ *Note:* ${getManga.data.results[0].score}\n\n💚️ *Synopsis:* ${getManga.data.results[0].synopsis}\n\n🌐️ *Link*: ${getManga.data.results[0].url}`, id)
                await sleep(5000)
                await translate(getManga.data.results[0].synopsis, region).then(async (syno) => { await client.sendFileFromUrl(from, `${getManga.data.results[0].image_url}`, 'manga.jpg', mess.getmanga(syno, getManga), id) })
                break
                

break

            case 'maps':
                if (args.length == 0) return await client.reply(from, mess.noargs() + 'city names/nomes de cidade/nombres de ciudad.', id)
                const mapz2 = await axios.get(`https://mnazria.herokuapp.com/api/maps?search=${encodeURIComponent(body.slice(6))}`)
                const { gambar } = mapz2.data
                const pictk = await bent("buffer")(gambar)
                await client.sendImage(from, `data:image/jpg;base64,${pictk.toString("base64")}`, 'maps.jpg', `*📍 ${body.slice(6)}*`)
                break


case 'pin':
    const apipin = await get.get('https://scrap.terhambar.com/pin?url='+ args[1]).json()
    if (apipin.status == true) {
                const { response } = apipin
                await client.sendFileFromUrl(from, response.links[0].url, `${response.title}.${response.links[0].ext}`, '', id)
                await limitAdd(serial)
                const fuo = errorurl3
        } else {
            client.sendFileFromUrl(from, `${fuo}`, 'see.png', 'error, maybe the link you sent is invalid!', id)
        }
        break

             case 'restartlimit':
        case 'restart':
        case 'reset':
            if (!isbotadmin) return client.reply(from, 'Risa admins only', id) 
            client.reply(from, '⚠️*[INFO]* Reseting ...', id)
            //setting.restartState = true
            //setting.restartId = chat.id
            let obj = []
            fs.writeFileSync('./lib/limit.json', JSON.stringify(obj, 1));
            fs.writeFileSync('./lib/setting1.json', JSON.stringify(setting1, null, 2));
            //fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null,2));
            fs.writeFileSync('./lib/msgLimit.json', JSON.stringify(obj));
            //fs.writeFileSync('./lib/banned.json', JSON.stringify(banned));
            await sleep(5000).then(() => client.reply(from, `_*RESTART SUCCESS*_`, id))
            break
         case 'listgroup':    
                client.getAllGroups().then((res) => {
                let berhitung1 = 1
                let gc = `*This is list of group* :\n`
                for (let i = 0; i < res.length; i++) {
                    gc += `\n═════════════════\n\n*No : ${i+1}*\n*Name* : ${res[i].name}\n*Unread Message* : ${res[i].unreadCount} chat\n*Not Spam* : ${res[i].notSpam}\n`
                }
                client.reply(from, gc, id)
            })
                break


             case 'moddroid':
            if (args.length == 0) return client.reply(from, 'Enter a name to search!', id)
            try {
                const moddroid = await axios.get('https://tobz-api.herokuapp.com/api/moddroid?q=' + body.slice(10)  + '&apikey=BotWeA')
                if (moddroid.data.error) returnclient.reply(from, moddroid.data.error, id)
                const modo = moddroid.data.result[0]
                const resmod = `• Tittle : ${modo.title}\n\n• Created By : ${modo.publisher}\n\n• Size : ${modo.size}\n\n• MOD : ${modo.mod_info}\n\n• Version : ${modo.latest_version}\n\n• Genre : ${modo.genre}\n\n• Link : ${modo.link}\n\n• Download : ${modo.download}`
               client.sendFileFromUrl(from, modo.image, 'MODDROID.jpg', resmod, id)
            } catch (err) {
                console.log(err)
            }
                break
                case 'yaoi':
            const yam = await fetch(`http://api.fdci.se/rep.php?gambar=yaoi`)
            const yaoi = await yam.json()
            let flyaoi = yaoi[Math.floor(Math.random() * yaoi.length) + 1]
            await client.sendFileFromUrl(from, flyaoi, '', 'AHA...', id)
            .catch(() => {
                client.reply(from, 'An error occurred.', id)
            })
            break


            
            case 'ocr':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota`, id)
            
            await limitAdd(serial)
            if (isMedia) {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                const text = await getText(imageBase64)
                await client.sendText(from, text)
            } else if (quotedMsg && quotedMsg.type === 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                const text = await getText(imageBase64)
                await client.sendText(from, text)
            } else if (args.length === 1) {
                if (!url.match(isUrl)) await client.reply(from, 'Sorry, wrong message format please check help section.', id)
                const text = await getText(url)
                await client.sendText(from, text)
            } else {
                await client.reply(from, 'No pictures! To open the send command list :menu', id)
            }
            break
             case 'k':
               // if (!isPremium) return await zn.reply(from, msg.notPremium(), id)
               // if (!isGroupMsg) return await zn.reply(from, msg.groupOnly(), id)
                //if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                //limit.addLimit(senderr, _limit, isPremium, isOwner)
                //if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                if (args.length == 0) return client.reply(from, `Format salah \nPenggunaan: ${prefix}play judul lagu`, id)
                const playaudio = {
                    limit: 1,
                    gl: 'BR',
                    hl: 'pt'
                }
                const ress = await ytsr(body.slice(6), playaudio).catch(err => {
                    return client.reply(from, `Gak ada njir..`, id)
                })
                const audioResult = ress.items.filter(item => item.type === 'video')[0]
                if (!audioResult) {
                    return client.reply(from, `Gak ada njir..`, id)
                }
                const audioInfo = await ytdl.getInfo(audioResult.url, {
                    quality: 'highestaudio'
                });
                let audioStream = ytdl(audioResult.url, {
                    quality: 'highestaudio'
                }); 
                let mp3PlayInfo = {
                    title: audioInfo.videoDetails.title,
                    url: audioInfo.videoDetails.video_url,
                    lengthSeconds: audioInfo.videoDetails.lengthSeconds,
                    authorName: audioInfo.videoDetails.author.name,
                    videoId: audioInfo.videoDetails.videoId,
                    isPrivate: audioInfo.videoDetails.isPrivate,
                } 
                client.reply(from, `*Judul :* ${mp3PlayInfo.title}\n\nMedia sedang dikirim..`, id)
                let audioPlaySize = (((mp3PlayInfo.lengthSeconds * 128000) / 8) / 1024) / 1024
                console.log(`Ukuran viddeo : ${audioPlaySize} MB`);
                if (audioPlaySize >= 15) {
                    return client.reply(from, `Kegedean bos maksimal file 15MB`, id)
                }
                if (mp3PlayInfo.lengthSeconds > 900) {
                    return client.reply(from, `Kepanjangan maksimal 900 detik`, id)
                }
                ffmpeg(audioStream)
                    .audioBitrate(128)
                    .save(`./temp/${mp3PlayInfo.videoId}.mp3`)
                    .on('end', () => {
                        var playStats = fs.statSync(`./temp/${mp3PlayInfo.videoId}.mp3`)
                        let realSize = playStats.size / (1024 * 1024);
                        console.log(`Tamanho real: ${realSize} MB`);
                        if (realSize <= 15) {
                            client.sendFile(from, `./temp/${mp3PlayInfo.videoId}.mp3`, `${mp3PlayInfo.videoId}.mp3`, null, id).then(f => {
                                try {
                                    fs.unlinkSync(`./temp/${mp3PlayInfo.videoId}.mp3`);
                                    console.log(`successfully deleted ${mp3PlayInfo.videoId}.mp3`);
                                } catch (err) {
                                    // handle the error
                                    console.log(err);
                                }
                            })
                        } else {
                            return client.reply(from, `Gk ada lagunya njir..`, id)
                        }
                    });                 
            break

            

             case 'tsticker':
        if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota`, id)
            
            await limitAdd(serial)
           if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id)
            if (isMedia && type == 'image') {
              try {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                const base64img = imageBase64
                const filename = "./media/pic.jpg";
                //console.log(base64img)
                const outFile = './media/noBg.png'
                const result = await removeBackgroundFromImageBase64({ base64img, apiKey: 'Ddsk2zrp1xx21LeQgxfrXk2x', size: 'auto', type: 'auto', outFile })
                    await fs.writeFile(outFile, result.base64img)
                    await client.sendImageAsSticker(from, `data:${mimetype};base64,${result.base64img}`, { pack: body.split('|')[1] || 'BMSZ', author: body.split('|')[2] || 'MK'})
                } catch(err) {
                    console.log(err)
                }
            }
            break
           case 'pick':
      //  if (!isGroup) return await client.reply(from, '_:no_entry: Perintah ini hanya dapat di-gunakan didalam grup!_', id);
        if (arguments.length < 1) return await client.reply(from, ':pick @_', id);
        const pickSomeone = groupMetadata.participants[Math.floor(Math.random() * groupMetadata.participants.length)];
        await client.sendTextWithMentions(from, `*${arguments.join(' ')}* _in the group is:_ \n@${pickSomeone.id.split('@')[0]}` , message.id)

        break;
        case 'revoke':
             if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id) 
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!isBotGroupAdmins) return client.reply(from, 'bot not admin', id)
        await client
          .revokeGroupInviteLink(from)
          .then(async (res) => await client.reply(from, '🎉 THE LINK HAS BEEN RESET', id))
          .catch((error) => console.log('revoke link error!'));
        break;

      case 'link':
      case 'invitelink':
            if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id) 
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!isBotGroupAdmins) return client.reply(from, 'bot not admin', id)
        await client
          .getGroupInviteLink(from)
          .then(async (inviteLink) => await client.reply(from, `🔗 Group Invite Link : ${inviteLink}`, id))
          .catch((error) => console.log('Invite link error'));
        break;
             /*case 'execute':
           if(!isbotadmin)return
            return eval(body.slice(9))*/
       case 'groups':
		if (chat.id !== '919744375687-1596199727@g.us') return
			return groupFunc.getGroups(message)
       case 'well-test':
		return groupFunc.getActive(message)
       case 'bot-reply':
		if (!isbotadmin) return
		const wArr = body.split('|') 
		if (!wArr[1] || !wArr[2] || !wArr[3]) return client.reply(from, 'Wrong Format!', id)
		await client.reply(wArr[2].trim(),`|| REPLY ||\n\n ${wArr[1].trim()}`, wArr[3].trim())
		return client.reply(from, `Message Sent to *${wArr[2]}*\n\nText: ${wArr[1]}`, id)
       case 'gamble':
	if (!isGroupMsg) return
		//if (!gambleArr.includes(chat.id)) return client.reply(from, 'You can only gamble in our gamble group. Use %info to get the group invite', id)
  		return e.gamble(message)

       case 'enchant':
		let tv = body.slice(9)
		if (!tv) return client.reply(from, 'Baka! You must give me something to enchant.', id)
		return client.reply(from, tv.toLowerCase().replace(/a/gi, "ᔑ").replace(/b/gi, "ʖ").replace(/c/gi, "ᓵ").replace(/d/gi, "↸").replace(/e/gi, "ᒷ").replace(/f/gi, "⎓").replace(/g/gi, "⊣").replace(/h/gi, "⍑").replace(/i/gi, "╎").replace(/j/gi, "⋮").replace(/k/gi, "ꖌ").replace(/l/gi, "ꖎ").replace(/m/gi, "ᒲ").replace(/n/gi, "リ").replace(/o/gi, "𝙹").replace(/p/gi, "!¡").replace(/q/gi, "ᑑ").replace(/r/gi, "∷").replace(/s/gi, "ᓭ").replace(/t/gi, "ℸ ̣").replace(/u/gi, "⚍").replace(/v/gi, "⍊").replace(/w/gi, "∴").replace(/x/gi, "·/").replace(/y/gi, "||").replace(/z/gi, "⨅") ,id)
       case 'register':
		if (chat.id !== '917638851613-1609147159@g.us') return client.reply(from, '✖️ You need to be in our main group to use this command', id) 
	        if (giveArr.includes(sender.id)) return client.reply(from, '✖️ You are already registred for the giveaway', id)
		giveArr.push(sender.id)
		fs.writeFileSync('./data/giveaway.json', JSON.stringify(giveArr))
		return client.reply(from, '💚️ Your entry has been recorded', id)
       case 'roll-g':
		return client.sendTextWithMentions(from, `CONGRATS @${giveArr[Math.floor(Math.random() * giveArr.length)].replace('@c.us', '')}! You won BLAH BLAH BLAH`) 
      case 'choose':
		const choices = body.split(',')
		if (choices.length < 2) return client.reply(from, 'Not enough choices to pick from. Seperate your choices with a commas', id)
		return client.reply(from, `So, I choose.... *${choices[Math.floor(Math.random() * choices.length)]}*`, id)
       case 'bank':
		if (!isGroupMsg) return
		 const details= `🏦️ *${pushname}'s Bank* \n\n🌟️ *Gold:* ${bank}/20000 \n\n*POWERED BY ASTRO.Inc🚀*`;
         await client.sendFileFromUrl(from,'https://1.bp.blogspot.com/-leIOuVJBMHU/YO7GT1nFNWI/AAAAAAAAJTs/_Xc0UsliG7YwO4qOV5aoRGY4vTQNYVOFwCLcBGAsYHQ/s395/IMG_20210714_163529.jpg','file.jpg',details,id); 
         break
      case 'deposit':
		if (!isGroupMsg) return
		return e.bankDeposit(message)
       case 'withdraw':
		if (!isGroupMsg) return
		return e.bankWithdraw(message)
       case 'wallet':
		if (!isGroupMsg) return
		const wallt= `💰️ *${pushname}'s Wallet* \n\n🪙 *Gold:* ${gold}\n\n 💎 *Diamonds:* ${diamonds}`;
        await client.sendFileFromUrl(from,'https://1.bp.blogspot.com/-IQo7EOnJNr4/YO852M2zhGI/AAAAAAAAJT0/6cmZq-JuuEECjM-uJhMvPi66ywFdVF7gQCLcBGAsYHQ/s320/IMG_20210715_001455.jpg','file.jpg',wallt,id)
        break
       case 'daily':
		if (!isGroupMsg) return
		return e.daily(message)
       case 'type':
		if (!isGroupMsg) return 
		await client.simulateTyping(from, true)
		await sleep(3000)
		return client.simulateTyping(from, false)	
       case 'shop':
       case 'store':
	if (!isGroupMsg) return
		//return sclient.reply(from, '🏪️ *CLOSED | WILL OPEN SOON* 🏪️', message.id)
		return e.sendShop(message)
       case 'buy':
		if (!isGroupMsg) return
		return e.buyStuff(message)
       case 'lotto':
       case 'loto':
       case 'raffle':
		const loarr = JSON.parse(fs.readFileSync('./data/loto.json'))
		return await client.reply(from, `🏷️ ASTRO RAFFLE 🏷️\n\n💚️ *Participiants:* ${loarr.length}\n\n🎉️ *Prize Pool:* ${loarr.length*1000} Gold`, id)
       case 'loto-roll':
		if (!isbotadmin) return 
		const zxx = JSON.parse(fs.readFileSync('./data/loto.json')) 
		
       case 'roll-giveaway':
	return client.reply(from, 'Not yet', id)
	if (chat.id !== '917638851613-1609147159@g.us') return client.reply(from, 'No such command, Baka!', id)
	//if (chat.groupMetadata.participiants.length < 200) return client.reply(from, 'No such command, Baka!', id)
	     if (wazx[0]) return client.reply(from, 'Already Rolled!', id)
	     const rzx = giveArr
		for (let v = 0; v < 10; v++) {
		try {
			let rNo = Math.floor(Math.random() * rzx.length) 
				let w = rzx[rNo]
				let inx = rzx.indexOf(w)
                		rzx.splice(inx, 1)
				client.sendTextWithMentions(from, `*${v+1}.* 🎊️ Congratulations *@${w.replace('@c.us', '')}*!\n\n*50000* Gold has been added to your wallet! ♥️`)
				let g = tb.get(`${w}.gold`)
				tb.set(`${w}.gold`, g+50000)
		} catch(err) {
			console.log(err)
			continue
		}
		}
	     fs.writeFileSync('./giveaway.json', JSON.stringify(['zel']))
	     return wazx.push('hehe')
         
       case 'give':
	if (!isGroupMsg) return
	     return e.give(message)
       case 'roll-test-hehe':
             if (!chat.groupMetadata.desc.includes('Well!!!')) return client.reply(from, 'No such command, Baka!', id)
	     if (wa[0]) return client.reply(from, 'Already Rolled!', id)
	     e.getIt(message, giveArr)
	     wa.push('hehe')
       case 'rob':
       case 'steal':
	if (!isGroupMsg) return
		//return client.reply(message.from, '✖️ *Robbing is Disabled*', id)
	     return e.rob(message)
       case 'light':
		let xv = body.slice(7)
		if (!xv) return client.reply(from, 'Wrong Format!', id)
		const ltx = await axios.get(`https://ewh-dev.herokuapp.com/api/lighttext?q=${encodeURI(xv)}&apikey=wellinthatcase`)
		if (ltx.data.error || !ltx.data) return client.reply(from, 'An error occured!', id)
		return client.sendFileFromUrl(from, ltx.data.url, 'well.jpg', xv, id)
	case 'avatar':
		const ltxb = await axios.get(`https://ewh-dev.herokuapp.com/api/avatar`)
		if (ltxb.data.error || !ltxb.data) return client.reply(from, 'An error occured!', id)
		return client.sendFileFromUrl(from, ltxb.data.url, 'well.jpg', '', id)
       case 'cloud':
		let xvc = body.slice(7)
		if (!xvc) return client.reply(from, 'Wrong Format!', id)
		const ltxc = await axios.get(`https://ewh-dev.herokuapp.com/api/cloudtext?q=${encodeURI(xvc)}&apikey=wellinthatcase`)
		if (ltxc.data.error) return client.reply(from, 'An error occured!', id)
		return client.sendFileFromUrl(from, ltxc.data.url, 'well.jpg', xvc, id)
       case 'owoify':
		const owo = await axios.get(`https://nekos.life/api/v2/owoify?text=${encodeURIComponent(body.slice(8))}`)
		if (owo.data.msg) return client.reply(from, owo.data.msg, id)
		return client.reply(from, owo.data.owo, id)
       case 'cat':	
		const cat = await axios.get(`https://nekos.life/api/v2/cat`)
		return client.reply(from, cat.data.cat, id)
       case 'set-gif':
		return profile.setPic(message, decryptMedia)
       case 'reset-gif':
		if (!fs.existsSync(`./data/video/${message.author}.mp4`)) return client.reply(from, 'You don\'t any GIF/Video as your pfp')
		client.reply(from, `Pfp have been removed`, id)
		return fs.unlinkSync(`./data/video/${message.author}.mp4`)
       case 'rank':
       case 'card':
		if (!isGroupMsg) return
		if (mentionedJidList.length >= 1) return profile.getRank(mentionedJidList[0], message, ban)
		if (quotedMsg) return profile.getRank(quotedMsgObj.sender.id, message, ban)
		return profile.getRank(message.author, message, ban)
       case 'search':
		const qr = body.slice(8)
		if (qr == '') return client.reply(from, 'Wrong Format!', id)
		return anime.searchAnime(qr, from, id)
       case 'ep':
		let lin = body.slice(4)
		if (!lin || !lin.includes('http')) return client.reply(from, 'Wrong format!', id)
		return anime.getAnimeViaLink(lin, from, id)
       case 'dl':
		let li = body.slice(4)
		if (!li || !li.includes('http')) return client.reply(from, 'Wrong format!', id)
		return anime.getEpQualities(li, from, id)
       case 'set-pack':
		if (!body.includes('|')) return client.reply(from, 'Wrong Format! \n\nCorrect Format: *$set-pack | author-name | pack-name*', id)
       const packz = body.split('|')
       if (packz[1] == undefined || packz[2] == undefined) return client.reply(from, 'Wrong Format! \n\nCorrect Format: *%set-pack | author-name | pack-name*', id)
       await createExif(packz[1].trim(), packz[2].trim(), sender.id)
       return await client.reply(from, `🛡️ Pack Set to \n\n👨‍🎨️ *Author: ${packz[1]}*\n📦️ *Packname: ${packz[2]}*`)
       case 'menu':
       const mn = menu()
       return client.reply(from, mn.help(pushname), id)
       case 'chara':
	const q1 = body.slice(7)
	const dt = await chara.getData(q1)
	return client.sendFileFromUrl(from, dt.url, 'file.jpg', dt.msg, id)
       case 'chid':
	const q2 = body.slice(6)
	const dtz = await chara.getCharById(q2)
	return client.sendFileFromUrl(from, dtz.url, 'file.jpg', dtz.msg, id)
       case 'img-a':
       case 'vid':
	    	try {
		//quotedMsg.isAnimated
	        const mediaData = await decryptMedia(quotedMsg)
    		const stickerbase64 = `data:video/mp4;base64,${mediaData.toString('base64')}`
    		await client.sendFileFromUrl(from, stickerbase64, 'sticker.mp4')
    		} catch (error) {
	        console.log(error)
    		const mediaData = await decryptMedia(quotedMsg)
    		const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
    		await client.sendFileFromUrl(from, imageBase64, 'img.jpg')

		}
		break
           case 'wallpaper':
            case 'wp1':
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
               // limit.addLimit(senderr, _limit, isPremium, isOwner)
                //await zn.reply(from, msg.wait(), id)
                console.log('Getting wallpaper image...')
                await client.sendFileFromUrl(from, (await neko.sfw.wallpaper()).url, 'wallpaper.jpg', '', null, null, true)
                    .then(() => console.log('Success sending wallpaper image!'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, 'Error!', id )
                    })
            break


            // LIB NSFW
           /* case 'yurin':
                if (!isGroupMsg) return zn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
                if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                if (isGroupMsg) {
                    if (!isNsfw) return await zn.reply(from, msg.notNsfw(), id)
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await zn.reply(from, msg.wait(), id)
                    await zn.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                } else {
                    if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                    limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await zn.reply(from, msg.wait(), id)
                    await zn.sendFileFromUrl(from, (await neko.nsfw.eroYuri()).url, 'yuri.jpg', '', id)
                }
            break*/
          /*  case 'pussyart':
               // if (!isGroupMsg) return zn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                const {
                    
                    
                    nsfw,
                   
                } 

                 if (nsfw == true) {
                      if ((isGroupMsg) && (isnsfw)) {
                            
                                
                
                   // if (!isNsfw) return await client.reply(from, 'hentai', id)
                   // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(sender.id, _limit, isPremium, isOwner)
                   // await client.reply(from, msg.wait(), id)
                    await client.sendFileFromUrl(from, (await neko.nsfw.pussyArt()).url, 'pussyArt.jpg', '', id)
    
                   // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(sender.id, _limit, isPremium, isOwner)
                  //  await zn.reply(from, msg.wait(), id)
                   

                      } else if ((isGroupMsg) && (!isnsfw)) {
                                await client.reply(from, `NSFW is not registered on *${name}*`, id)
                }
            }
            break*/
            
            case 'wolf':
                if (args.length >= 2 && arks.includes('|')) {
                    const wolftype = ["https://textpro.me/create-wolf-logo-black-white-937.html", "https://textpro.me/create-wolf-logo-galaxy-online-936.html"];
                    const wolfchoice = wolftype[Math.floor(Math.random() * wolftype.length)];
                    if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await client.reply(from, 'Max: 10 letras/letters p/frase - phrase.', id)
                    await client.reply(from,'Wait', id)
                    const browserwf = await puppeteer.launch(options)
                    const pagewf = await browserwf.newPage()
                    await pagewf.goto(wolfchoice, { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
                        await pagewf.waitForSelector('#text-0')
                        await pagewf.type("#text-0", arg.split('|')[0])
                        await pagewf.type("#text-1", arg.split('|')[1])
                        await pagewf.click("#submit")
                        await sleep(10000) // Aumente se sua conexão for superr lenta
                        await pagewf.waitForSelector('div[class="thumbnail"] > img')
                        const divElement = await pagewf.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
                        await client.sendFileFromUrl(from, divElement, 'wolf.jpg', '', id)
                        await browserwf.close()
                    })
                } else return await client.reply(from, mess.noargs + '\n\n' + mess.argsbar() + 'use 1 "|".', id)
                break
                
           
            break
            case'hentai':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptk = await axios.get('https://nekos.life/api/v2/img/hentai')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptk.data.url, 'off.png', `sexy`, id)
            break
            case'anal':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt5 = await axios.get('https://nekos.life/api/v2/img/anal')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt5.data.url, 'off.png', `sexy`, id)
            break
              case'eroyuri':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt51 = await axios.get('https://nekos.life/api/v2/img/eroyuri')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt51.data.url, 'off.png', `sexy`, id)
            break

              case'ero':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt513 = await axios.get('https://nekos.life/api/v2/img/ero')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt513.data.url, 'off.png', `sexy`, id)
            break
              case'hololewed':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt5130 = await axios.get('https://nekos.life/api/v2/img/hololewd')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt5130.data.url, 'off.png', `sexy`, id)
            break
             case'lewd':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt513000 = await axios.get('https://nekos.life/api/v2/img/lewdk')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt513000.data.url, 'off.png', `sexy`, id)
            break

             case'lewdkemo':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkt5130qq = await axios.get('https://nekos.life/api/v2/img/lewdkemo')
            client.reply('Loading........')
             client.sendFileFromUrl(from, uptkt5130qq.data.url, 'off.png', `sexy`, id)
            break

             case'cum':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkr = await axios.get('https://nekos.life/api/v2/img/cum')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptkr.data.url, 'off.png', `sexy`, id)
            break
             case'nekopoi':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkrk = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
            client.reply('Loading........')
            return await client.sendMp4AsSticker(from, uptkrk.data.url, )
            break
             case'oppai':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkre = await axios.get('https://nekos.life/api/v2/img/tits')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptkre.data.url, 'off.png', ``, id)
            break
             break
             case'pussy':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkre11 = await axios.get('https://nekos.life/api/v2/img/pussy')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptkre11.data.url, 'off.png', `sexyyy`, id)
            break
             break
             case'bj':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkre11q = await axios.get('https://nekos.life/api/v2/img/bj')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptkre11q.data.url, 'off.png', `sexyyy`, id)
            break
             case'lewdk':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkre11q11 = await axios.get('https://nekos.life/api/v2/img/lewdk')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptkre11q11.data.url, 'off.png', `sexyyy`, id)
            break

            case 'hentai-c':
            const uptk3 = await axios.get('https://nekos.life/api/v2/img/hentai')
             return await client.sendFileFromUrl(from, uptk3.data.url, 'off.png', `
_HERE ARE THE HENTAI COMMANDS_

:hentai
:cum
:oppai
:hololewed
:anal
:eroyuri
:ero
:lewd
:lewdkemo
:nekopoi(still fixing)
:pussy
:bj
:lewdk
:boobs
:lesbian
:blowjob

many more comming sonn!!
:`, id)
            
          
               
             case'boobs':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptks = await axios.get('https://nekos.life/api/v2/img/boobs')
            client.reply('Loading........')
            return await client.sendFileFromUrl(from, uptks.data.url, 'off.png', ``, id)
            break
             case 'lesbian':
                 if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
               // if (!isGroupMsg) return zn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                if (isGroupMsg) {
                   
                   // if (!isNsfw) return await client.reply(from, 'hentai', id)
                   // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(sender.id, _limit, isPremium, isOwner)
                   // await zn.reply(from, msg.wait(), id)
                    await client.sendFileFromUrl(from, (await neko.nsfw.lesbian()).url, 'lesbian.jpg', '', id)
                } else {
                   // if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(sender.id, _limit, isPremium, isOwner)
                    await client.reply(from, msg.wait(), id)
                    await client.sendFileFromUrl(from, (await neko.nsfw.lesbian()).url, 'lesbian.jpg', '', id)
                }
            break
             case'blowjob':
            if (!ishentai) return client.reply(from, `*HENTAI NOT ACTIVATED ON ${name}*` , message.id)
            const uptkF = await axios.get('https://nekos.life/api/v2/img/blowjob')
            client.reply('Loading........')
               client.sendFileFromUrl(from, uptkF.data.url, 'off.png', ``, id)
            break
              case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join(' ');
           client.reply('wait....')
            gis(gimg, async (error, result) => {
           let  n = result
           const images = n[Math.floor(Math.random() * n.length)].url
             client.sendFileFromUrl(from,{url:images},id)
            });
            break

          /* case 'pinterest':
            goblog = args.join(" ")
          const uu = await axios.get(`http://fdciabdul.tech/api/pinterest?keyword=${goblog}`)
           client.sendFileFromUrl(from,uu.data.url,'gg.jpg',id)
            break
            /* case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
           const ig.fetchUser(`${args.join(' ')}`).then(Y => {
          const   console.log(`${args.join(' ')}`)
           const ten = `${Y.profile_pic_url_hd}`
           const teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(' ')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join(' ')}`
            sendMediaURL(from,ten,teks) 
            })      
            break*/
             case 'pinterest':
            if (args.length < 1) return client.reply('pinterest')
              goblog = args.join(" ")
            var repip = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=${goblog}`)
            client.sendFileFromUrl(from, `${repip}`, 'well')
      .catch((error) => {
            client.reply('Invalid domain/ip'); 
            })
            break
            case 'loli':
             const upt = await axios.get('https://nekos.life/api/v2/img/neko')
           return await client.sendFileFromUrl(from, upt.data.url, 'off.png', `loli`, id)
            break
 
            case 'waifu':
             const uptc = await axios.get('https://nekos.life/api/v2/img/waifu')
           return await client.sendFileFromUrl(from, uptc.data.url, 'off.png', `waifu!`, id)
            break
           
            case 'imgtopdf':
            case 'pdf':
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
            //if (!q) return await zn.reply(from, `*FORMAT SALAH*\n\nKirim/Reply gambar dengan caption *${prefix}pdf nama file*\n\nContoh: ${prefix}pdf zein`, id)
               if (isMedia && isImage || isQuotedImage) {
                  //  if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(senderr, _limit, isPremium, isOwner)
                   // await zn.reply(from, msg.wait(), id)
                    const encryptMediat = isQuotedImage ? quotedMsg : message
                    const mediaDataqq = await decryptMedia(encryptMediat, uaOverride)
                    const linkImgu = await uploadImages(mediaDataqq, `${senderr}_img`)
                    console.log(linkImgu)
                    convertapi.convert('pdf', {
                    File: linkImgu
                    }, 'jpg').then(function(result) {
                    result.saveFiles('./temp/hasil.pdf')
                    })
                await sleep(10000)
                await client.sendFile(from, './temp/hasil.pdf', `${q}.pdf`,null,id)
                await fs.unlinkSync('./temp/hasil.pdf')
                } else {
                    await client.reply(from, 'Bukan Gambar Itu Hyung', id)
                }
                console.log('success...')
            break
            case 'nekogif':
           /// if (!isRegistered) return await zn.reply(from, msg.notRegistered(pushname), id)
           
           // if (!isNsfw) return await client.reply(from, 'hentai', id)
           // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
            //limit.addLimit(senderr, _limit, isPremium, isOwner)
           // await client.reply(from, msg.wait(), id)

            ranp = getRandom('.gif')
            rano = getRandom('.webp')
            buffer = (await neko.nsfw.nekoGif()).url
            exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                if (err) return client.reply(from, 'error!', id)
                fs.unlinkSync(ranp)
                buff = fs.readFileSync(rano)
                client.sendImageAsSticker(from, buff, { author: 'setiker', pack: 'zen' }, id)
                fs.unlinkSync(rano)
            })
            break
            case 'feetgif':
           // if (!isRegistered) return await zn.reply(from, msg.notRegistered(pushname), id)
          
                   // if (!isNsfw) return await client.reply(from, 'hentai', id)
            // (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
            //limit.addLimit(senderr, _limit, isPremium, isOwner)
           // await zn.reply(from, msg.wait(), id)
            ranp = getRandom('.gif')
            rano = getRandom('.webp')
            buffer = (await neko.nsfw.feetGif()).url
            exec(`wget ${buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=30 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                if (err) return client.reply(from, 'error!', id)
                fs.unlinkSync(ranp)
                buff = fs.readFileSync(rano)
                client.sendImageAsSticker(from, buff, { author: 'setiker', pack: 'zen' }, id)
                fs.unlinkSync(rano)
            })
            break
         case 'ssweb':
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
               // limit.addLimit(senderr, _limit, isPremium, isOwner)
            if (args.length == 0) return client.reply(from, `Membuat bot men-screenshot sebuah web\n\nPemakaian: ${prefix}ss [url]\n\ncontoh: ${prefix}ss http://google.com`, id)
            const ss = body.slice(4)
           // await client.reply(from, msg.wait(), id)
            const scrinshit = await fetch(`https://api.zeks.xyz/api/ssweb?url=${ss}&apikey=apivinz`)
            const ssweb = await scrinshit.json()
            client.sendFile(from, ssweb.result, 'ss.jpg', 'cekrek', id)
            break

         
            case 'attp': 
                //if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                //if (!q) return await zn.reply(from, `*FORMAT SALAH*\n\nBeri caption *${prefix}attp text*\n\nContoh: ${prefix}attp zenuwu`, id)
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                    //limit.addLimit(senderr, _limit, isPremium, isOwner)
                    //await zn.reply(from, msg.wait(), id)
                    const textu = body.slice(6)
                    const resultattp = await axios.get('https://api.xteam.xyz/attp?text=' + textu)
                    let stikes = resultattp.data.result
                client.sendImageAsSticker(from, stikes, { author: 'setiker', pack: 'zen', keepScale:'true' }, true)      
            break
            case 'ttp': // CHIKAA CHANTEKKXXZZ
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                //if (!q) return await zn.reply(from, msg.wrongFormat(), id)
                //if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                //limit.addLimit(senderr, _limit, isPremium, isOwner)
               // await zn.reply(from, msg.wait(), id)
                misc.ttp(q)
                    .then(async (res) => {
                        await client.sendImageAsSticker(from, res.base64, { author: 'astro team', pack: 'marsh', keepScale:'true' })
                        console.log('Success creating TTP!')
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, 'Error!', id)
                    })
            break
            case 'doujin':
            //if (!isGroupMsg) return zn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            //if (!isPremium) return await zn.reply(from, msg.notPremium(), id)
            //if (!q) return await zn.reply(from, msg.wrongFormat(), id)
            //if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
            //limit.addLimit(senderr, _limit, isPremium, isOwner)
            //if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
            //if (!isNsfw) return await zn.reply(from, msg.notNsfw(), id)
            if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            await client.reply(from, `*Doujin :* ${q} Sedang dikirim\nMohon Tunggu..`, id)
            const dojins = await axios.get(`https://api.vhtear.com/nhentaipdfdownload?query=${q}&apikey=HSBDBD72738949BBBBWHS7`)
            const dojina = dojins.data.result
            client.sendFileFromUrl(from, dojina.pdf_file, `${q}.pdf`,'', id)
            break
            case 'emot':
            case 'emoji':    
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(pushname), id)
               // if (!q) return await zn.reply(from, `*FORMAT SALAH*\n\nBeri caption *${prefix}emoji emot*\n\nContoh: ${prefix}emoji 🐦`, id)
                try {
                //if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(senderr, _limit, isPremium, isOwner)
                //await zn.reply(from, msg.wait(), id)
                const emoji = emojiUnicode(q)
                await client.sendImageAsSticker(from, await client.download(`http://videfikri.com/api/emojitopng?emojicode=${emoji}`), { keepScale: true, author: 'arin', pack: 'pratyush'})
                //await zn.sendStickerfromUrl(from, `http://videfikri.com/api/emojitopng?emojicode=${emoji}`){ keepScale: true, author: 'setiker', pack: 'zen'}
            }catch (err) {
                console.error(err)
                await client.reply(from, 'Error!', id)
            }
            break
       case 'toimg':
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                return client.sendFile(from, imageBase64, 'imagesticker.jpg', 'ASTRO.', id)
	     } 
	     return client.reply(from, 'Wrong Format!',)

	/*case 'execute': //chat.id !== 919744375687-1596199727@g.us'
		if (chat.id !== '917019253026-1601785546@g.us' && !isbotadmin) return client.reply(from, 'Only Bot Admins can use this command!')
		if (body.includes('remove') || body.includes('setMyName') || body.includes('for') || body.includes('ldfgh') || body.includes('while') || body.includes('msgHandler')) return client.reply(from, 'Nope, Not gonna do that!', id)
		return eval(body.slice(9))*/
	// case 'raw-info':
		//if (s) 
	case 'math':
		const c = body.slice(6)
		if (!c) return client.reply(from, 'The Field can\'t be empty', id)
		if (typeof mathjs.evaluate(c) !== 'number') return client.reply(from, 'The given query could not be resolved', id)
		return client.reply(from, `📦️ *Q:* ${c}\n\n🥇️ *A:* ${mathjs.evaluate(c)}`, id)
	case 'ytmp3':
		return intz.ytmp3(message) 
	case 'ytmp4':
		return intz.ytmp4(message)   
	case 'text':
		return intz.text(message)
	case 'logo':
		return intz.logo(message)
	case 'webp':
		client.sendRawWebpAsSticker(from, await fs.readFileSync('./webp.webp', { encoding: 'base64'}))
		break
         
	case 'tweet':
		const z = body.split('|') 
		if (!z[1] || !z[2]) return client.reply(from, 'Wrong Format!', id)
		const r = await axios.get(`https://nekobot.xyz/api/imagegen?type=tweet&username=${encodeURI(z[1]).trim()}&text=${encodeURI(z[2]).trim()}`)
		return client.sendFileFromUrl(from, r.data['message'], 'twt.png', '', id)
	case 'sticker-t':
		const txt = body.slice(11)
		if (txt == undefined) return client.reply(from, 'Wrong Format!', id)
		const sdata = await axios.get(`https://st4rz.herokuapp.com/api/ttp?kata=${txt}`)
		return client.sendImageAsSticker(from, sdata.data.result, { pack: body.split('|')[1] || 'BMSZ', author: body.split('|')[2] || 'MK'})
        case 'trash':
		if (mentionedJidList.length == 0) {
			var pfp = await client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = await client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		var picz = await new DIG.Delete().getImage(pfp)
		return client.sendImage(from, `data:image/jpeg;base64,${picz.toString('base64')}`, 'pic.jpeg')
	case 'monika':
		let a = body.slice(8)
		const y = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=m&background=class&body=1&face=b&text=${encodeURI(a)}`)
		return client.sendFileFromUrl(from, y.data['message'], 'monika.png', '', id)
	case 'yuri':
		let a2 = body.slice(6)
		const y2 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=y&background=class&body=1&face=b&text=${encodeURI(a2)}`)
		return client.sendFileFromUrl(from, y2.data['message'], 'yuri.png', '', id)
	case 'natsuki':
		let a3 = body.slice(9)
		const y3 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=n&background=class&body=1&face=b&text=${encodeURI(a3)}`)
		return client.sendFileFromUrl(from, y3.data['message'], 'natsuki.png', '', id)
	case 'sayori':
		let a4 = body.slice(8)
		const y4 = await axios.get(`https://nekobot.xyz/api/imagegen?type=ddlc&character=s&background=class&body=1&face=b&text=${encodeURI(a4)}`)
		return client.sendFileFromUrl(from, y4.data['message'], 'sayori.png', '', id)
	case 'ad':
		if (mentionedJidList.length == 0) {
			var pfp = client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		const picz1 = await new DIG.Ad().getImage(pfp)
		return client.sendImage(from, `data:image/jpeg;base64,${picz1.toString('base64')}`, 'pic.jpeg')
	case 'invert':
		if (mentionedJidList.length == 0) {
			var pfp = await client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = await client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		const picz2 = await new DIG.Invert().getImage(pfp)
		return client.sendImage(from, `data:image/jpeg;base64,${picz2.toString('base64')}`, 'pic.jpeg')
	case 'wanted':
		if (mentionedJidList.length == 0) {
			var pfp = await client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = await client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		const picz3 = await new DIG.Wanted().getImage(pfp, '$')
		return client.sendImage(from, `data:image/jpeg;base64,${picz3.toString('base64')}`, 'pic.jpeg')
	case 'circle':
		if (mentionedJidList.length == 0) {
			var pfp = await client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = await client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		const picz4 = await new DIG.Circle().getImage(pfp)
		return client.sendImage(from, `data:image/jpeg;base64,${picz4.toString('base64')}`, 'pic.jpeg')
	case 'stan':
		if (mentionedJidList.length == 0) {
			var pfp = await client.getProfilePicFromServer(sender.id)
		} else {
			var pfp = await client.getProfilePicFromServer(mentionedJidList[0])
		}
		if (pfp == undefined) return client.reply(from, '❌️ *Failed to Get the Profile picture of the user*', id)
		const picz5 = await new DIG.Beautiful().getImage(pfp)
		return client.sendImage(from, `data:image/jpeg;base64,${picz5.toString('base64')}`, 'pic.jpeg')
	case 'fact':
		if (body.slice(6) == undefined) return client.reply(from, '❌️ *Wrong Format!*', id)
		const picz6 = await new DIG.LisaPresentation().getImage(body.slice(6))
		return client.sendImage(from, `data:image/jpeg;base64,${picz6.toString('base64')}`, 'pic.jpeg')
	case 'sticker-f':
		if (isMedia && type == 'image') return sendSticker.sendSticker(message)
		if (quotedMsg && quotedMsg.type == 'image') return sendSticker.sendSticker(quotedMsgObj)
		client.reply(from, 'Only Images are supported!', id)
		break
	//case 'respond':
	  //  if (body.includes('http') || body.includes('chat.whatsapp.com')) return client.reply(from, 'Nope, Not gonna do that', id)
	    //await resFunc.addResponse(message)
	case 'run':
	    if (!quotedMsg) return client.reply(from, 'Wrong Format', message.id)
	    const lang = body.slice(5)
	    const source = message.quotedMsgObj.body
	    await code.get(source, lang, message)
            break
	
             case 'ban': 
            if(!isbotadmin) return client.reply(from, 'Only Bot admins can use this CMD!', message.id)
            const userBan = body.slice(5)
            if (!userBan) return client.reply(from, 'Enter the number!\nEx: 27xxxx')  
            {
            let text = userBan+'@c.us'
            var cek = ban.includes(text);
            if(cek){
                return client.reply(from, 'Number has been banned before!', id) //if number already exists on database
            } else {
                const mentah = await client.checkNumberStatus(text) //VALIDATE WHATSAPP NUMBER
                const hasil = mentah.canReceiveMessage ? `Banned successfully\nTotal users are banned now: *${ban.length}*` : false
                if (!hasil) return client.reply(from, 'Invalid WhatsApp number [Not registered on WhatsApp]', id) 
                {
                ban.push(mentah.id._serialized)
                fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
                    client.sendText(from, hasil)}
                }
            }
            break


             case 'set_groupban':
             if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id) 
           // if(!isbotadmin) return client.reply(from, 'Only Bot admins can use this CMD!', message.id)
            const userBanc = body.slice(5)
            if (!userBanc) return client.reply(from, 'Enter the number!\nEx: 27xxxx')  
            {
            let text = userBanc+'@c.us'
            var cek = ban.includes(text);
            if(cek){
                return client.reply(from, 'Number has been in database  before!', id) //if number already exists on database
            } else {
                const mentah = await client.checkNumberStatus(text) //VALIDATE WHATSAPP NUMBER
                const hasil = mentah.canReceiveMessage ? ` successfully\nTotal users are not allowed in the group : *${ban.length}*` : false
                if (!hasil) return client.reply(from, 'Invalid WhatsApp number [Not registered on WhatsApp]', id) 
                {
                groupban.push(mentah.id._serialized)
                fs.writeFileSync('./lib/groupban.json', JSON.stringify(groupban))
                    client.sendText(from, hasil)}
                }
            }
            break

            
            



    case 'unban':
        if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id)
        if (!isbotadmin) return
        let numberz = message.mentionedJidList
        for (let i = 0; i < numberz.length; i++) {
        if (ban.includes(numberz[i])) {
        let iz = ban.indexOf(numberz[i])
        ban.splice(iz, 1)
        }
        }
        fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
        return client.reply(from, 'Unbanning Successful!', id)

        case 'del_groupban':
        if (!isbotadmin) return
        let numberzg = message.mentionedJidList
        for (let i = 0; i < numberzg.length; i++) {
        if (ban.includes(numberzg[i])) {
        let iz = ban.indexOf(numberzg[i])
        groupban.splice(iz, 1)
        }
        }
        fs.writeFileSync('./lib/groupban.json', JSON.stringify(groupban))
        return client.reply(from, ' Successful! user is now allowed in ', id)
    case'youtube':
	case 'ytsearch':
    const qey = body.slice(5)
    const data = await get.get("http://hujanapi.xyz/api/ytsearch?query="+qey+"&apikey=matxyz").json()
     const io = 'https://animemotivation.com/wp-content/uploads/2020/05/anime-youtube-chan.jpg'
    console.log(data)
    let yt = "*Youtube Search*\n\n"
    for (i = 0; i < data.result.length; i++){
        yt += "Title: _"+data.result[i].title+"_\n\n"
        yt += "Channel: _"+data.result[i].channel+"_\n\n"
        yt += "url: _"+data.result[i].url+"_\n\n==============================\n"
    }
    client.sendFileFromUrl(from, io, 'see.jpg', yt , message.id )
    break
     case 'mp3':
        const teo = body.slice(5)
        const teh = await fetch('http://hujanapi.xyz/api/ytmp3?query='+teo+'&apikey=matxyz')
        const teho = await teh.json()
        client.reply(from,'Downloading......', message.id)
        client.sendFileFromUrl(from, teho.result.image, 'asw.jpg', teho.result.title, message.id)
        client.sendPtt(from, teho.result.mp3, 'ami.mp3' ,id)
        break
      /*   case 'mp3':
        const teo = body.slice(5)
        const teh = await fetch('http://hujanapi.xyz/api/ytmp3?query='+teo+'&apikey=matxyz')
        const teho = await teh.json()
        client.reply(from,'Downloading......', message.id)
        client.sendFileFromUrl(from, teho.result.image, 'asw.jpg', teho.result.title, message.id)
        client.sendFileFromUrl(from, teho.result.size , )
        break*/
 case 'mp4':
        const teoo = body.slice(5)
        const tehh = await fetch('http://hujanapi.xyz/api/ytmp4?query='+teoo+'&apikey=matxyz')
        const tehoo = await tehh.json()
        client. reply(from, 'Downloading.... ', message.id)
        client.sendFileFromUrl(from, tehoo.result.image, 'asw.jpg', tehoo.result.title, message.id)
        client.sendFileFromUrl(from, tehoo.video.url, message.id)
        break
    case 'stats':
            const loadedMsg = await client.getAmountOfLoadedMessages()
            const chatIds = await client.getAllChatIds()
            const groups = await client.getAllGroups()
            client.sendText(from, `🥇️Status :\n 🎯️ *${loadedMsg}* Loaded Messages\n*✨️ ${groups.length}* Group Chats\n*💚️ ${chatIds.length - groups.length}* Personal Chats\n 🛡️ *${chatIds.length}* Total Chats`)
            break 
	case 'cmm':
		let t = body.slice(5)
		if (!t) return client.reply(from, 'Worng Format!', id)
		let rez = await axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${encodeURI(t).trim()}`)
		return client.sendFileFromUrl(from, rez.data['message'], 'cmm.jpg', '', id)
      case'hello':
const ps ='https://media.giphy.com/media/EvpaQ7YVPCZvG/giphy.mp4'
client.sendFileFromUrl(from,`${ps}`, 'mj.mp4' , 'hello ,how can i help you?' , message.id)
break

case'slap':
const slap = ['https://media.giphy.com/media/u8maN0dMhVWPS/giphy.mp4', 'https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.mp4','https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.mp4','https://media.giphy.com/media/tX29X2Dx3sAXS/giphy.mp4', 'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.mp4','https://media.giphy.com/media/k1uYB5LvlBZqU/giphy.mp4']
let slapp = slap[Math.floor(Math.random() * slap.length)]
const caption = `${message.sender.pushname.toString()}  *slapped* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, slapp, 'mj.mp4', caption, message.id)
break

case'kill':
const kill = ['https://media.giphy.com/media/2mONj5HKI93Fe/giphy.mp4','https://media.giphy.com/media/6wdZAQm2unplu/giphy.mp4','https://media.giphy.com/media/xT1R9N2oXw0OXly7TO/giphy.mp4','https://media.giphy.com/media/mYH2yAOI5fyDK/giphy.mp4']
let killl = kill[Math.floor(Math.random() * kill.length)]
const captiond = `${message.sender.pushname.toString()}  *killed* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, killl, 'mj.mp4', captiond, message.id)
break
case'punch':
const punch = ['https://media.giphy.com/media/Z5zuypybI5dYc/giphy.mp4', 'https://media.giphy.com/media/VDZDQWaCR2YhQ0qeUo/giphy.mp4','https://media.giphy.com/media/1Bgr0VaRnx3pCZbaJa/giphy.mp4']
let pun = punch[Math.floor(Math.random() * punch.length)]
const captiondv = `${message.sender.pushname.toString()}  *punched* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, pun, 'mj.mp4', captiondv, message.id)
break
case'kiss':
const kiss = ['https://media.giphy.com/media/G3va31oEEnIkM/giphy.mp4','https://media.giphy.com/media/hnNyVPIXgLdle/giphy.mp4','https://media.giphy.com/media/jR22gdcPiOLaE/giphy.mp4']
let kissi = kiss[Math.floor(Math.random() * kiss.length)]
const captiondvr = `${message.sender.pushname.toString()}  *kissed* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, kissi, 'mj.mp4', captiondvr, message.id)
break
case'hug':
const hug = ['https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.mp4','https://media.giphy.com/media/svXXBgduBsJ1u/giphy.mp4','https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.mp4','https://media.giphy.com/media/wnsgren9NtITS/giphy.mp4','https://media.giphy.com/media/143v0Z4767T15e/giphy.mp4']
let kissip = hug[Math.floor(Math.random() * hug.length)]
const captiondvrt = `${message.sender.pushname.toString()}  *hugged* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, kissip, 'mj.mp4', captiondvrt, message.id)
break
case'pat':
const pat = ['https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.mp4','https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.mp4','https://media.giphy.com/media/SSPW60F2Uul8OyRvQ0/giphy.mp4','https://media.giphy.com/media/10jsrq9h4n1owU/giphy.mp4']
let kissipc = pat[Math.floor(Math.random() * pat.length)]
const captiondvrtv = `${message.sender.pushname.toString()}  *patted* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, kissipc, 'mj.mp4', captiondvrtv, message.id)
break
case'poke':
const poke = ['https://media.giphy.com/media/LXTQN2kRbaqAw/giphy.mp4', 'https://media.giphy.com/media/pWd3gD577gOqs/giphy.mp4','https://media.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.mp4','https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.mp4']
let kissipcr = poke[Math.floor(Math.random() * poke.length)]
const captiondvrtvf = `${message.sender.pushname.toString()}  *poked* ${await getUserInfo(message)}`
client.sendFileFromUrl(from, kissipcr, 'mj.mp4', captiondvrtvf, message.id)
break
       

	case 'stop':
		if (sender.id == '919744375687@c.us') return client.kill()
		break
	case 'cut':
		if (sender.id == '919744375687@c.us') return client.cutMsgCache()
		break
	case 'tagme':
		client.sendTextWithMentions(from, `Why would I tag you? @${sender.id.replace('@c.us', '')} Baka!`)
		break 
	case 'reply':
		client.reply(from, 'No!', id)
		break 
        case 'zelda':
        case 'sing-a-song':
            client.sendPtt(from, './media/Zelda.mp3')
            break
            break 
        //case 'oof':
        //case 'sing-a-song':
            client.sendPtt(from, './media/term.mp3')
            break
	case 'reg':
	    const mediaData = await decryptMedia(quotedMsg, uaOverride)
	    const num = Math.floor(Math.random() * 2) + 1
	    const b64arr = [mediaData.toString('base64')]
	    await fs.readFileSync(`${num}.json`, JSON.stringify(b64arr))
	    client.sendImage(from, mediaData.toString('base64'), num+'jpg', num, id)
	    break
        case 'test':
	    //await client.sendVideoAsGif(from, './media/video/test.mp4', 'test.mp4', '...', id)
	    await client.reply(from, 'Everything is working fine, I guess', id)
	    //await client.sendFile(from, './media/video/test.mp4', 'test.mp4', '<TEST>', id)
        case 'donate':
            client.reply(from, '...', '...')
            break
       case 'gsticker-test':
		await sendSticker.sendAnimatedSticker(message)
		break
       case 'admins':
		const texta = body.slice(8)
		let adminz = ''
		let ow = '\n'
		for (let i = 0; i < groupAdmins.length; i++) {
			if (groupAdmins[i] == chat.groupMetadata.owner) {
				ow +=`👑️ @${groupAdmins[i].replace('@c.us', '')}\n`
			} else {
				adminz += `🏅️ @${groupAdmins[i].replace('@c.us', '')}\n` 
			}
		}
		await client.sendTextWithMentions(from, `${texta} - ${pushname} 
${ow}
${adminz}`)
                break			
       case 'za-warudo':
       case 'close':
		if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
		if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
		client.setGroupToAdminsOnly(from, true)
	        break
       case 'toki-wa-ugokidasu':
       case 'toki-wa-ugoki-dasu':
       case 'open':
	        if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
		if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
		client.setGroupToAdminsOnly(from ,false)
		break
       case 'bio-set':
       case 'set-bio':
	     const bio = body.slice(9)
	     if (!bio) return client.reply(from, 'Your bio can\'t be empty...', id)
	     if (bio.length > 250) return client.reply(from, 'Your bio can\'t be longer than *250* characters', id)
	     tb.set(`${sender.id}.bio`, bio)
	     client.reply(from, `Your motto has been set to *${bio															}*`, id)
	     break
       case 'tts':
        	if (!body.slice(5)) return client.reply(from, '  *Usage tts language text*')
                const dataBhs = body.slice(5, 7)
		const dataText = body.slice(8)
        	if (dataText.length > 10000) return client.reply(from, 'Text?', id)

        	try {
            		const ttsget = require('node-gtts')(dataBhs.toLowerCase())
            		ttsget.save('./tts/restts.mp3', dataText, () => 
                        client.sendPtt(from, './tts/restts.mp3', id))
        	} catch (error) {
            		return client.reply(from, 'Failed to get tts, is the given language code valid?', id)
        	}
            break
        case 'quotemaker':
            arg = body.trim().split('|')
            if (arg.length >= 3) {
            client.reply(from, 'Processing...', message.id) 
            const quotes = arg[1]
            const author = arg[2]
            const theme = arg[3]
            try {
            const resolt = await func.quotemaker(quotes, author, theme)
            client.sendFile(from, resolt, 'quotesmaker.jpg','...')
            } catch {
            client.reply(from, 'It looks like that the image failed to process', message.id)
            }
            } else {
            client.reply(from, 'Usage: \n%quotemaker | quote | author', message.id)
            }
            break
       case 'leaderboard':
       case 'lead':
		 if (!isGroupMsg) return 
		 const l = await lb.leaderBoard()
		 const u = (l.url) ? l.url : errorurl
		 return client.sendImage(from, u, 'well.png', l.lb)
       case 'lead-l':
       case 'groupboard':
		if (!isGroupMsg) return
		 const lw = await lb.leadGroup(message)
		 const uw = (lw.url) ? lw.url : errorurl
		 return client.sendImage(from, uw, 'well.png', lw.lb, message.id)
       case 'pokedex':
           	 if (dex == '') return client.reply(from, 'You haven\'t caught any pokemon yet', id) 
             	 var pkmnz = dex
                 var dex1 = `♦️ *PokeDex* ♦️\n\n ❤️ Owner: ${pushname} \n\n 🎉️ Pokemon Owned: ${pkmnz.length} \n\n 🎯️ Pokemons Caught: \n`
                 for (let i = 0; i < pkmnz.length; i++) {
                 dex1 += '⭐️ '
                 dex1 += ` ${pokefunc.capitalize(pkmnz[i])}\n`
                 }
                 await client.reply(from, dex1, id)
      case 'dex':
		 if (dex == '') return client.reply(from, 'You haven\'t caught any pokemon yet', id)  
                 let pkmnsz = dex
		 var pkmnz = pkmnsz.sort()
                 var dex2 = `♦️ *PokeDex* ♦️\n\n ❤️ Owner: ${pushname} \n\n 🎉️ Pokemon Owned: ${pkmnz.length} \n\n 🎯️ Pokemons Caught: \n`
                 for (let i = 0; i < pkmnz.length; i++) {
                 dex2 += '⭐️ '
                 dex2 += ` ${pokefunc.capitalize(pkmnz[i])}\n`
                 }
                 await client.reply(from, dex2, id)
	     break
       case 'pokelog':
		 if (dex == '') return client.reply(from, 'You haven\'t caught any pokemon yet', id) 
                 var pkmnz = dex
	         if (pkmnz.length <= 10) {
			client.reply('You have less than 10 Pokemon, use $pokedex')
		} else {
			var dex3 = `♦️ *Log* ♦️\n\n ❤️ Owner: ${pushname} \n\n 🎉️ Total Pokemon Owned: ${pkmnz.length} \n\n 🎯️ Recent Captures: \n\n`
			for (let i = pkmnz.length-10; i < pkmnz.length; i++) {
				dex3 += '⭐️ '
               			dex3 += ` ${pokefunc.capitalize(pkmnz[i])}\n`
			}
		}
		 await client.reply(from, dex3, id)
                 break
            break
       case 'catch':
            const pokename = body.slice(7).toLowerCase()
            pokefunc.pokecatch(pokename, message, dex)
            break
       case 'c':
            const poken = body.slice(3).toLowerCase()
            pokefunc.pokecatch(poken, message, dex)
            break
       case 'trade' :
             //return client.reply(from, 'Trading Disabled!', id)
             arg = body.trim().split(' ')
	     if (arg.length < 2) return client.reply(from, 'Wrong format!', id)
             if (arg[1].toLowerCase() == 'create') {
                	if (arg.length < 4) {
                	client.reply(from, 'Wrong format!', id)
             } else {
			if(arg[2].toLowerCase() == arg[3].toLowerCase()) return client.reply(from, 'Can\'t trade! Both the Pokemon are of the same species', message.id)
               		trade.tradeCreate(dex, arg[2].toLowerCase(), arg[3].toLowerCase(), message)
             }
             } else if (arg[1].toLowerCase() == 'confirm') {
               trade.tradeConfirm(message, dex)
             } else if (arg[1].toLowerCase() == 'view') {
               trade.tradeView(message)
             } else if (arg[1].toLowerCase() == 'cancel') {
               trade.tradeDelete(message, isGroupAdmins)
             }
             break

             
       case 'chatid':
            await client.reply(from,`Chat ID: ${from}`, id)
            break
       case 'poll':
            feature.getpoll(client, message, pollfile, voterslistfile)
            break    
       case 'vote' :
            feature.voteadapter(client, message, pollfile, voterslistfile)
            break
       case 'resetpoll':
       case 'startpoll':
            feature.adminpollreset(client, message, body.slice(10), pollfile, voterslistfile)
            break
       case 'add-candidate': 
            feature.addcandidate(client, message, body.slice(15), pollfile, voterslistfile)
            break
      case 'add':

            if (!isGroupMsg) return client.reply(from, 'Sorry, this command can only be used in groups!', id)
            if (!isGroupAdmins) return client.reply(from, 'Failed, this command can only be used by group admins!', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Failed, please add, the bot must be the an admin!', id)
            if (args.length !== 1) return client.reply(from, `To use the ${prefix}add\nUse: ${prefix}add <number>`, id)
                const patt = errorurl3
                try {
                    await client.addParticipant(from,`${args[0]}@c.us`)
                } catch {
                    client.sendFileFromUrl(from,`${patt}`, 'whyy.png', 'Cant add target', id)
                }
            break
            
       case 'translate':
            arg = body.trim().split(' ')
            if (arg.length != 2) return client.reply(from, 'Wrong Format!', id)
            if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
            const quoteText = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
            translate(quoteText, arg[1])
                .then((result) => client.sendText(from, result))
                .catch(() => client.sendText(from, 'An error occured!'))
            break
        case 'haigusha':
            if (!isGroupMsg) return client.reply(from, 'Baka!, This command can only be used in groups', message.id)
	    if (msgFilter.isHai(from)) return client.reply(from, '$haigusha is on cool down, Wait 30 seconds before using this command again', message.id)
	    await haigushaFunc.getHaigusha(message)
	    msgFilter.addHai(from)
            break 
        case 'claim' :
            if (!isGroupMsg) return client.reply(from, 'Baka!, This command can only be used in groups', message.id)
	    await haigushaFunc.claimHaigusha(message)
             break
        case 'bc':

               // await client.sendImage(from, baseImg, 'base.jpg', 'enhanced.null', id)
	    if (isbotadmin) {
            let msg = body.slice(4)
             if (isMedia && type == 'image') {
            const mediaData = await decryptMedia(message)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')} enhanced null`
            const baseImg = imageBase64.replace('video/mp4','image/gif')
            const chatz = await client.getAllChatIds()
            const tp = 'https://1.bp.blogspot.com/-fSnYgM_abwg/YJ4J50r9n9I/AAAAAAAABXM/MlsGGOdAczAIEjjTqEStFmX8aAasPeveQCLcBGAsYHQ/s1920/IMG-20210514-WA0026.jpg'
            for (let ids of chatz) {
                var cvk = await client.getChatById(ids)
                if (!cvk.isReadOnly) client.sendImage( ids,  baseImg, 'base.jpg', `${msg}`)
                  //  client.sendFileFromUrl(from, tp , 'yt.jpg')
            }
        }
            client.reply(from, 'Broadcast Success!', message.id)
		}
            break
        case 'user':
        
        const username = body.slice(6)
        const result = await axios.get(`https://api.jikan.moe/v3/user/${username}`)
        const jikan =  result.data

var Data = `🔖️ Username: ${jikan.username}

📒️ User ID: ${jikan.user_id}

❤️ Gender: ${jikan.gender}

🌍️ Location: ${jikan.location}

📆️ Joined: ${jikan.joined}

⭐️ Anime Stats ⭐️

Days Watched: ${jikan.anime_stats.days_watched}

Mean Score: ${jikan.anime_stats.mean_score}

Currently Watching: ${jikan.anime_stats.watching}

Completed: ${jikan.anime_stats.completed}

On Hold: ${jikan.anime_stats.on_hold}

Dropped: ${jikan.anime_stats.dropped}

Plan to Watch: ${jikan.anime_stats.plan_to_watch}

🎯️ Manga Stats 🎯️

Days Read: ${jikan.manga_stats.days_read}

Mean Score: ${jikan.manga_stats.mean_score}

Currently Reading: ${jikan.manga_stats.reading}

Completed: ${jikan.manga_stats.completed}

On Hold: ${jikan.manga_stats.on_hold}

Dropped: ${jikan.manga_stats.dropped}

Plan to Read: ${jikan.manga_stats.plan_to_read}`
        await client.sendFileFromUrl(from, `${jikan.image_url}`,`user.png`, Data)
        break
        case 'covid':
            arg = body.trim().split(' ')
            var slicedArgs = Array.prototype.slice.call(arg, 1);
            const country = await slicedArgs.join(' ')
            const response2 = await axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + country + '/')
            const { cases, todayCases, deaths, todayDeaths, active } = response2.data
                await client.sendText(from, '🌎️Covid Info -' + country + ' 🌍️\n\n✨️Total Cases: ' + `${cases}` + '\n📆️Today\'s Cases: ' + `${todayCases}` + '\n☣️Total Deaths: ' + `${deaths}` + '\n☢️Today\'s Deaths: ' + `${todayDeaths}` + '\n⛩️Active Cases: ' + `${active}` + '.')
            break
        case 'ping':
            if (!isGroupMsg) return client.reply(from, 'Baka!, This command can only be used in groups', message.id)
            if (!isGroupAdmins) return client.reply(from, 'Baka!, only admins can use this command', message.id)
            const groupMem = await client.getGroupMembers(groupId)
            let mesg = `${body.slice(6)} - ${pushname} [@${sender.id.replace(/@c.us/g, '')}] \n\n`
	    var memz = ''
	    var admz = ''
	    var own = ''
            for (let i = 0; i < groupMem.length; i++) {
		if (chat.groupMetadata.owner == groupMem[i].id) {
			own += `👑️ @${groupMem[i].id.replace(/@c.us/g, '')}\n`
		} else if (groupAdmins.includes(groupMem[i].id)) {
			admz += `🏅️ @${groupMem[i].id.replace(/@c.us/g, '')}\n`
		} else {
                memz += `🥇️ @${groupMem[i].id.replace(/@c.us/g, '')}\n`
		}
            }
            var hehe = `${mesg} ${own} \n${admz} \n${memz}`
            await client.sendTextWithMentions(from, hehe)
            break
        case 'act':
             arg = body.trim().split(' ')

           
			if (arg[1].toLowerCase() == 'nsfw') {
	       			if (nsfwgrp.includes(chat.id)) return client.reply(from, `NSFW is already registered on *${name}*`, message.id)
                		nsfwgrp.push(chat.id)
                		fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                		return client.reply(from, `NSFW is now registered on *${name}*`, message.id)
			}
             	if (arg[1].toLowerCase() == 'pokegame') {
				//if (15 > chat.groupMetadata.participants.length) return client.reply(from, `This group only has ${chat.groupMetadata.participants.length} members, It needs atleast 15 participants to activate pokegame`)
				if (pokarr.includes(chat.id)) return client.reply(from, `Pokegame is already registered on *${name}*`, message.id)
                		pokarr.push(chat.id)
                		fs.writeFileSync('./lib/poke.json', JSON.stringify(pokarr))
                		return client.reply(from, `PokeGame is now registered on *${name}. Use :pokegame to know more info`, message.id)
             		}
			else if (arg[1].toLowerCase() == 'rule') {
				if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
				if (_rule.includes(chat.id)) return client.reply(from, `Rule is already registered on *${name}*`, message.id)
                			_rule.push(chat.id)
                			fs.writeFileSync('./lib/rule.json', JSON.stringify(_rule))
                			return client.reply(from, `Rule is now registered on *${name}*`, message.id)
             			}
                            else if (arg[1].toLowerCase() == 'hentai') {
                if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
                if (hentai.includes(chat.id)) return client.reply(from, `hentai is already registered on *${name}*`, message.id)
                            hentai.push(chat.id)
                            fs.writeFileSync('./lib/hentai.json', JSON.stringify(hentai))
                            return client.reply(from, `Hentai is now registered on *${name}* use :hentai-c to view the commands`, message.id)
                        }

                         else if (arg[1].toLowerCase() == 'farewell') {
                            if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
                            if (farewell.includes(chat.id)) return client.reply(from, `farewell is already registered on *${name}*`, message.id)
                                        farewell.push(chat.id)
                                        fs.writeFileSync('./lib/farewell.json', JSON.stringify(farewell))
                                        return client.reply(from, `farewell is now registered on *${name}*`, message.id)
                                     }
                                     else if (arg[1].toLowerCase() == 'welcome') {
                                       // if (!isbotadmin) return client.reply(from, 'This command can only be used by botadmins!', id)
                                       // if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to use this CMD', message.id)
                                        if (astro.includes(chat.id)) return client.reply(from, `Welcome is already registered on *${name}*`, message.id)
                                                    astro.push(chat.id)
                                                    fs.writeFileSync('./lib/astro.json', JSON.stringify(astro))
                                                    return client.reply(from, `Welcome is now registered on *${name}*`, message.id)
                                                 }
			else if (arg[1].toLowerCase() == 'smart') {
				if (!isBotGroupAdmins) return client.reply(from, 'You need to make me admin to enable Smart Mode', message.id)
				if (smart.includes(chat.id)) return client.reply(from, 'Smart Mode is already enabled in '+name, id)
					smart.push(chat.id)
					fs.writeFileSync('./data/smart.json', JSON.stringify(smart))
                			return client.reply(from, `Smart Mode is now enabled on *${name}*`, message.id)
			}
			return client.reply(from, `No such Option (*${arg[1]}*)`, id)
        case 'deact':
             arg = body.trim().split(' ')
             if (!isGroupAdmins) return client.reply(from, 'Only Admins can use this command, Baka >.<', id)
             if (arg[1].toLowerCase() == 'welcome') {

                let inx = wel.indexOf(from)
                astro.splice(inx, 1)
                fs.writeFileSync('./lib/astro.json', JSON.stringify(wel))
                return client.reply(from, `Welcome is now unregistered on *${name}*`, message.id)
             } else if (arg[1].toLowerCase() == 'nsfw') {
                let inx = nsfwgrp.indexOf(from)
                nsfwgrp.splice(inx, 1)
                fs.writeFileSync('./lib/nsfw.json', JSON.stringify(nsfwgrp))
                return client.reply(from, `NSFW is now unregistered on *${name}*`, message.id)
             }
              else if (arg[1].toLowerCase() == 'pokegame') {
                let inx = pokarr.indexOf(from)
                pokarr.splice(inx, 1)
                fs.writeFileSync('./lib/poke.json', JSON.stringify(pokarr))
                return client.reply(from, `PokeGame is now unregistered on *${name}*`, message.id)
             }
             else if (arg[1].toLowerCase() == 'bot') {
                let inx = bot.indexOf(from)
                bot.splice(inx, 1)
                fs.writeFileSync('./lib/bot.json', JSON.stringify(bot))
                return client.reply(from, `BOT is now unregistered on *${name}*`, message.id)
             }
               else if (arg[1].toLowerCase() == 'hentai') {
                let inx = hentai.indexOf(from)
                hentai.splice(inx, 1)
                fs.writeFileSync('./lib/hentai.json', JSON.stringify(hentai))
                return client.reply(from, `hentai is now unregistered on *${name}*`, message.id)
             }
               else if (arg[1].toLowerCase() == 'farewell') {
                let inx = farewell.indexOf(from)
                farewell.splice(inx, 1)
                fs.writeFileSync('./lib/farewell.json', JSON.stringify(farewell))
                return client.reply(from, `farewell is now unregistered on *${name}*`, message.id)
             }
              else if (arg[1].toLowerCase() == 'rule') {
                let inx = _rule.indexOf(from)
                _rule.splice(inx, 1)
                fs.writeFileSync('./lib/rule.json', JSON.stringify(_rule))
                return client.reply(from, `Rule is now unregistered on *${name}*`, message.id)
             } else if (arg[1].toLowerCase() == 'smart') {
                let inx = smart.indexOf(from)
                smart.splice(inx, 1)
                fs.writeFileSync('./data/smart.json', JSON.stringify(smart))
                return client.reply(from, `Smart Mode is now disabled on *${name}*`, message.id)
	     }
	     return client.reply(from, `No such Option (${arg[1]})`, id)
             break
        case 'kickall':

            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if(!isGroupOwner) return client.reply(from, 'Baka!, Only group owner can use this CMD', message.id)
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups', message.id)
            if(!isBotGroupAdmins) return client.reply(from, 'You need to make me admin before doing so, Baka!', message.id)
            const allMem = await client.getGroupMembers(from)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
			client.sendTextWithMentions(from,`@${allMem[i].id.replace('@c.us', '')} Skipped`)
		} else {
                await client.removeParticipant(groupId, allMem[i].id)
		}
            }
            client.reply(from, 'Done!', message.id)
            break
        case 'clearall':
            if (!isbotadmin) return client.reply(from, 'Owner only', message.id)
            const allChatz = await client.getAllChats()
            for (let dchat of allChatz) {
                await client.deleteChat(dchat.id)
            }
            client.reply(from, 'Done', message.id)
            break
        case 'section':
    if (isGroupMsg) {
        if (groupAdmins.includes(author) == true) {
            if (isMedia) {
                const mediaData = await decryptMedia(message)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.setGroupIcon(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.setGroupIcon(from, imageBase64)
            }
        } else{ 
            await client.reply(from, 'only admins can use this command', message)
        }
    } else {
        client.sendText(from, 'It hast to be a group message')
    }
     break
       

        case 'kick':
             
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id) 
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id)
                if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id) 
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!isBotGroupAdmins) return client.reply(from, 'bot not admin', id)
            if (!quotedMsg) {
                if (mentionedJidList.length === 0) return client.reply(from, 'Wrong format', id)
                if (mentionedJidList[0] === botNumber) return await client.reply(from, 'You cant kick the bot. [Wrong Format]', id)
            await client.sendTextWithMentions(from, `The request has been Accepted:\n${mentionedJidList.map(x => `@${x.replace('@c.us', '')}`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return await client.sendText(from, 'You cant kick the admins.')
                await client.removeParticipant(groupId, mentionedJidList[i])
            }
        } else {
             if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
            const qmid = quotedMsgObj.sender.id
            if (qmid === botNumber) return await client.reply(from, 'You cant kick the bot. [Wrong Format]', id)
            if (qmid === groupAdmins) return await client.reply(from, 'you cant kick the admins.', id)
            await client.sendTextWithMentions(from, `The request has been Accepted:\n@${qmid.replace('@c.us', '')}`)
            await client.removeParticipant(groupId, qmid)
        }
            break
        case 'promote':
            
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id)
                if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id) 
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!isBotGroupAdmins) return client.reply(from, 'bot not admin', id)
            if (!quotedMsg) {
                if (mentionedJidList.length != 1) return client.reply(from, 'Wrong Format, Only 1 user', id)
            if (groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'Already Admin', id)
            if (mentionedJidList[0] === botNumber) return await client.reply(from, 'Wrong Format', id)
            await client.promoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `The request has been Accepted @${mentionedJidList[0].replace('@c.us', '')} has been promoted.`)
            } else {
                 if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
                const qmid = quotedMsgObj.sender.id
                if (groupAdmins.includes(qmid)) return await client.reply(from, 'Already Admin', id)
                if (qmid === botNumber) return await client.reply(from, 'Wrong Format', id)
                await client.promoteParticipant(groupId, qmid)
                await client.sendTextWithMentions(from, `The request has been Accepted @${qmid.replace('@c.us', '')} has been promoted.`)
            }
            break
             case 'demote':
            if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
                 if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
               // if(!ispaid) return client.reply(from, 'Only paid users can use this commad', id) 
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!isBotGroupAdmins) return client.reply(from, 'bot not admin', id)
            if (!quotedMsg) {
                if (mentionedJidList.length !== 1) return client.reply(from, 'Wrong Format, Only 1 user', id)
            if (!groupAdmins.includes(mentionedJidList[0])) return await client.reply(from, 'user not Admin', id)
            if (mentionedJidList[0] === botNumber) return await client.reply(from, 'Wrong Format', id)
            await client.demoteParticipant(groupId, mentionedJidList[0])
            await client.sendTextWithMentions(from, `Request been Accepted @${mentionedJidList[0].replace('@c.us', '')}.`)
            } else {
                 if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
                const qmid = quotedMsgObj.sender.id
                if (!groupAdmins.includes(qmid)) return await client.reply(from, 'user not Admin', id)
            if (qmid === botNumber) return await client.reply(from, 'Wrong Format', id)
            await client.demoteParticipant(groupId, qmid)
            await client.sendTextWithMentions(from, `Request been Accepted @${qmid.replace('@c.us', '')}.`)
            }

            break
        case 'delete':
         if (!isGroupMsg) return client.reply(from, 'This command can only be used in groups!', id)
            if (isLimit(serial)) return client.reply(from, `Sorry ${pushname}, Your Limit Quota Is Up, Type :limit To Check Your Limit Quota`, id)
            
            await limitAdd(serial)
            if (!isGroupAdmins) return client.reply(from, 'Only admins can use this command', id)
            if (!quotedMsg) return client.reply(from, 'Wrong Format!', id)
            if (!quotedMsgObj.fromMe) return client.reply(from, 'Wrong Format!', id)
            client.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
            break
        case 'join':
         if(!ispaid) return client.reply(from, 'Only pro users can use this command use :paid see more details', id)
            if (chat.id == invitegrp) {
            if (args.length == 0) return client.reply(from, 'Wrong Format', message.id)
            const link = body.slice(6)
            const minMem = 30
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await client.inviteInfo(link)
            if (!isLink) return client.reply(from, 'Where\'s the link?', message.id)
            if (check.size < minMem) return client.reply(from, 'The group does not have 30+ members', message.id)
            await client.joinGroupViaLink(link).then( async () => {
                await client.reply(from, '*Joined* ✨️', message.id)
            }).catch(error => {
                client.reply(from, 'An error occured 💔️', message.id)
            })
            }
            break
        case 'i-info':
            console.log(await client.inviteInfo(body.slice(8)))
        case 'groupinfo' :
            if (!isGroupMsg) return client.reply(from, '.', message.id) 
            var totalMem = chat.groupMetadata.participants.length
            var desc = chat.groupMetadata.desc
            var groupname = name
            var welgrp = astro.includes(chat.id)
            var ngrp = nsfwgrp.includes(chat.id)
            var grouppic = await client.getProfilePicFromServer(chat.id)
            var pkgame = pokarr.includes(chat.id)
	    var smarto = smart.includes(chat.id)
	    var n = await client.getContact(chat.groupMetadata.owner)
            var pfp = (grouppic == undefined) ? errorurl : grouppic
            await client.sendFileFromUrl(from, pfp, 'group.png', `*${groupname}* 

👑️ *Owner: ${n.pushname || n.verifiedName || 'Null'}*  

🌐️ *Members: ${totalMem}*

💌️ *Welcome: ${welgrp}*

💚️ *Smart Mode: ${smarto}*

🎉️ *PokeGame* : *${pkgame}*

⚜️ *NSFW: ${ngrp}*

📃️ *Group Description* 

${desc}` , message.id)
        break
        case 'trace':
            if (isMedia) {
            const mediaData = await decryptMedia(message)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
             try {
                const raw = await fetch("https://trace.moe/api/search", {
                method: "POST",
                body: JSON.stringify({ image: imageBase64 }),
                headers: { "Content-Type": "application/json" }
                })
                const parsedResult = await raw.json()
                const { anime, episode, title_english } = parsedResult.docs[0]
                const content = `⛩️ *Japanese Title:* ${anime} \n✨️ *English Title:* ${title_english} \n💚️ *Source Episode:* ${episode} `
                await client.sendImage(from, imageBase64, 'sauce.png', content, id)
             } catch (err) {
                await client.sendFileFromUrl(from, errorurl, 'error.png', '💔️ An Error Occured', id)
             }
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                try {
                 const raw = await fetch("https://trace.moe/api/search", {
                 method: "POST",
                 body: JSON.stringify({ image: imageBase64 }),
                 headers: { "Content-Type": "application/json" }
                 })
                 const parsedResult = await raw.json()
                 const { anime, episode, title_english } = parsedResult.docs[0]
                 const content = `⛩️ *Japanese Title:* ${anime} \n✨️ *English Title: ${title_english} \n💚️ *Source Episode:* ${episode} `
                 await client.sendImage(from, imageBase64, 'sauce.png', content, id)
               } catch (err) {
                 throw new Error(err.message)
                 await client.sendFileFromUrl(from, errorurl, 'error.png', '💔️ An Error Occured', id)
               }
            }
            break
        case 'sauce':
             if (isMedia) {
                 if (type == 'image') {
                 const buffer = await decryptMedia(message, uaOverride)
                 const filename = `./media/images/sauce.${mime.extension(message.mimetype)}`
                 await fs.writeFile(filename, buffer)
                 await source.sauce(filename, message)
                 } else { 
                 client.reply(from, 'Only Images are supported', id)
                 }
             } else if (quotedMsg && quotedMsg.type == 'image') {
                 const buffer = await decryptMedia(quotedMsg, uaOverride)
                 const filename = `./media/images/sauce.${mime.extension(quotedMsg.mimetype)}`
                 await fs.writeFile(filename, buffer)
                 await source.sauce(filename, quotedMsgObj)
             } else { 
                 client.reply(from, 'Only Images are supported', id)
             }
             break
        case 'sr':
             arg = body.trim().split(' ')
             const sr = arg[1]
             try {
             const response1 = await axios.get('https://meme-api.herokuapp.com/gimme/' + sr + '/');
             const {
                    postLink,
                    title,
                    subreddit,
                    url,
                    nsfw,
                    spoiler
                } = response1.data



                if (nsfw == true) {
                      if ((isGroupMsg) && (isnsfw)) {
                                await client.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `${title}` + '\n\nPostlink:' + `${postLink}`,id)
                      } else if ((isGroupMsg) && (!isnsfw)) {
                                await client.reply(from, `NSFW is not registered on *${name}*`, id)
		      } else if (!isGroupMsg) {
				await client.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `${title}` + '\n\nPostlink:' + `${postLink}`,id)	
                      }
                } else { 
                      await client.sendFileFromUrl(from, `${url}`, 'Reddit.jpg', `${title}` + '\n\nPostlink:' + `${postLink}`, id)
                }
                } catch(err) {
                    await client.reply(from, 'There is no such subreddit, Baka!', id) 
                }
                break
        
        case 'lyrics':
            if (args.length == 0) return client.reply(from, 'Wrong Format, BAKA', message.id)
            const lagu = body.slice(7)
            const lirik = await func.liriklagu(lagu)
            client.reply(from, lirik,id)
            break

            case 'truth':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truth.txt')
            .then(res => res.text())
            .then(body => {
                let truthx = body.split('\n')
                let truthz = truthx[Math.floor(Math.random() * truthx.length)]
            client.reply(from, truthz, id)
            })
            .catch(() => {
                client.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            break

  case 'dare':
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dare.txt')
            .then(res => res.text())
            .then(body => {
                let darex = body.split('\n')
                let darez = darex[Math.floor(Math.random() * darex.length)]
            client.reply(from, darez, id)
            })
            .catch(() => {
             client.reply(from, 'Hayolohhh, ada yang error!!', id)
            })
            break

            case 'guess':
             const astroi = ['well....it might be true' , ' that i dont know...lol', 'yes', 'no','what do you think?','i have seen alot in my days...but this loos serious..i will go with a no.','well then....its a noooo', 'hehe..my head is spining..i dont know :v']
            let walnimekc = astroi[Math.floor(Math.random() * astroi.length)]
           client.reply(from, walnimekc ,message.id)
           break
	case 'quote':
	    const qte = await axios.get("http://inspirobot.me/api?generate=true")
    	    await client.sendFileFromUrl(from, qte.data, 'quote.jpg', '*Powered By ASTRO* ❤️' , id )
	    break
        case 'anime':
            const keyword = message.body.replace('$anime ', '')
            try {
            const data = await fetch(
           `https://api.jikan.moe/v3/search/anime?q=${keyword}`
            )
            const parsed = await data.json()
            if (!parsed) {
              await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Found!*
✨️ *Title:* ${title}

🎆️ *Episodes:* ${episodes}

💌️ *Rating:* ${rated}

❤️ *Score:* ${score}

💚️ *Synopsis:* ${synopsis}

🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            client.sendImage(from, base64, title, content)
           } catch (err) {
             console.error(err.message)
             await client.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
           }
          break
          /* case 'triggered':
            case 'trigger':
            const canvas = require('canvacord')
               // if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
                if (isMedia && isImage || isQuotedImage) {
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
                   // limit.addLimit(senderr, _limit, isPremium, isOwner)
                   // await zn.reply(from, msg.wait(), id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    console.log(color('[WAPI]', 'green'), 'Downloading and decrypting media...')
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    const temp = './temp'
                    const name = new Date() * 1
                    const fileInputPath = path.join(temp, `${name}.gif`)
                    const fileOutputPath = path.join(temp, 'video', `${name}.mp4`)
                    canvas.Canvas.trigger(mediaData)
                        .then((buffer) => {
                            canvas.write(buffer, fileInputPath)
                            ffmpeg(fileInputPath)
                                .outputOptions([
                                    '-movflags faststart',
                                    '-pix_fmt yuv420p',
                                    '-vf scale=trunc(iw/2)*2:trunc(ih/2)*2'
                                ])
                                .inputFormat('gif')
                                .on('start', (commandLine) => console.log(color('[FFmpeg]', 'green'), commandLine))
                                .on('progress', (progress) => console.log(color('[FFmpeg]', 'green'), progress))
                                .on('end', async () => { 
                                    console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                                    await client.sendMp4AsSticker(from, fileOutputPath, { fps: 30, startTime: '00:00:00.0', endTime : '00:00:05.0', loop: 0}, {pack: 'astro', author: 'marsh'})
                                    console.log(color('[WAPI]', 'green'), 'Success sending GIF!')
                                    setTimeout(() => {
                                        fs.unlinkSync(fileInputPath)
                                        fs.unlinkSync(fileOutputPath)
                                    }, 30000)
                                })
                                .save(fileOutputPath)
                        })
                } else {
                    await client.reply(from, 'kirim gambarnya', id)
                }
            break*/
           /*case 'joox': // By Hafizh
               
                const dataJoox = await axios.get(`https://lolhuman.herokuapp.com/api/jooxplay?apikey=${config.lol}&query=${q}`)
                const cardJoox = new canvas.Spotify()
                    .setAuthor(dataJoox.data.result.result.info.singer)//
                    .setAlbum(dataJoox.data.result.result.info.album)//
                    .setStartTimestamp(dataJoox.data.result.result.info.duration)//
                    .setEndTimestamp(10)
                    .setImage(dataJoox.data.result.result.image)//
                    .setTitle(dataJoox.data.result.result.info.song)//
                cardJoox.build()
                    .then(async (buffer) => {
                        canvas.write(buffer, `${senderr}_joox.png`)
                        await client.sendFile(from, `${senderr}_joox.png`, 'joox.png','Mohon tunggu media sedang dikirim..', id)
                        fs.unlinkSync(`${senderr}_joox.png`)
                        await client.sendFileFromUrl(from, dataJoox.data.result.result.audio[0].link, 'joox.mp3', '', id)
                        await client.reply(from, `Lirik :\n\n${dataJoox.data.result.result.lirik}`, id)
                    })
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, 'Error!', id)
                    })
            break */
         /* case 'wallpaper':
            if (args.length == 0) return client.reply(from, 'Wrong Format!', id)
            const query = body.slice(6)
            const walls = await wall(query)
            console.log(walls)
            await client.sendFileFromUrl(from, walls, 'walls.jpg', '', id)
            break*/
             case 'wall':
              //  if (!isRegistered) return await zn.reply(from, msg.notRegistered(), id)
               // if (!isGroupMsg) return zn.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
               // if (!q) return await zn.reply(from, msg.wrongFormat(), id)
               // if (limit.isLimit(senderr, _limit, limitCount, isPremium, isOwner)) return await zn.reply(from, msg.limit(), id)
               // limit.addLimit(senderr, _limit, isPremium, isOwner)
                const wal1 = await fetch(`https://lolhuman.herokuapp.com/api/wallpaper?apikey=${config.lol}&query=${q}`)
                const wal2 = await wal1.json()
                client.sendFileFromUrl(from, wal2.result, 'randomwall.jpg', `Hasil Dari ${q}`, id)
                .then(() => console.log('Success sending wall..'))
                    .catch(async (err) => {
                        console.error(err)
                        await client.reply(from, 'Error!', id)
                    })
            break

        case 'animeneko':
            client.sendFileFromUrl(from, akaneko.neko(), 'neko.jpg', 'Neko *Nyaa*~')
            break
        case 'doggo':
            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
            let kya = list[Math.floor(Math.random() * list.length)]
            client.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Doggo ✨️', id)
            break
        case 'neko':          
            q4 = Math.floor(Math.random() * 900) + 300;
            q3 = Math.floor(Math.random() * 900) + 300;
            client.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q4, 'neko.png','Neko 🌠️', id)
            break
        case 'roll':
            const dice = Math.floor(Math.random() * 6) + 1
            await client.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png')
            break
        case 'flip':
            const side = Math.floor(Math.random() * 2) + 1
            if (side == 1) {
               client.reply(from, 'TAILS', message.id)
            } else {
               client.reply(from, 'HEADS', message.id)
            }
            break
        case 'ship':
            arg = body.trim().split(' ')
            const per = Math.floor(Math.random() * 100)

if (per < 25) { 
var sentence = `${per}% Worse than average ♦️`
} else if (per < 50) {
var sentence = `${per}% I don't know how i feel about it ❇️` 
} else if (per < 75) {
var sentence = `${per}% Good, I guess... ⭐️` 
} else if (per < 90) {
var sentence = `${per}% Sugoii! Go for it!🤩️` 
} else {
var sentence = `${per}% Incredible! You two will be an amazing couple 😍️` 
}

var shiptext = `❣️ *Matchmaking...*

---------------------------------
    *${arg[1]}  x  ${arg[2]}*
---------------------------------

${sentence}`
        await client.sendTextWithMentions(from, shiptext )
        break
        case 'pokemon':
            arg = body.trim().split(' ')
            if (arg.length < 2) {
            client.reply(from, 'Give me a pokemon name, Baka!', id)
	    } else {
		if (pkarrs.includes(body.slice(9).toLowerCase())) {
            const pokedta = await pokefunc.pkmzdata(body.slice(9).toLowerCase(), dex)
	    await client.sendFileFromUrl(from, pokedta.url, 'pkmn.png',pokedta.data, id)
                } else {
		client.reply(from, `No such pokemon (${body.slice(9).toLowerCase()})`, id)
		}
	    }
	    break
	/*case 'debug':
		try {
		fs.writeFileSync('./debug/debug.json', message)
		} catch(e) {
		fs.writeFileSync('./debug/debugE.json', JSON.stringify(message))
		}
		break*/
        case 'rpaper' :
            const walnime = ['https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']
            let walnimek = walnime[Math.floor(Math.random() * walnime.length)]
            client.sendFileFromUrl(from, walnimek, 'Nimek.jpg', '', message.id)
            break
        case 'meme':
            const response = await axios.get('https://meme-api.herokuapp.com/gimme/wholesomeanimemes');
            const { postlink, title, subreddit, url, nsfw, spoiler } = response.data
            await client.sendFileFromUrl(from, `${url}`, 'meme.jpg', `${title}`, id)
            break

        case 'info':
            client.reply(from, 'THIS IS A WHATSAPP BOT.', id) 
            break
	case 'pokegame': 
	    await client.reply(from, pokegame, id)
	    break
        case 'profile':
	    if (!isGroupMsg) return 
            if (mentionedJidList.length > 0) return profile.sendProfile(mentionedJidList[0], message, groupAdmins, ban )
	    if (quotedMsg) return profile.sendProfile(quotedMsgObj.sender.id, message, botadmins)
	    return profile.sendProfile(sender.id, message, groupAdmins,ban  )
	    break
   case 'help':
            const listc = ['https://1.bp.blogspot.com/-F4SCl5_-M-A/YM2S3LivnDI/AAAAAAAABa4/mMykocklgBQIcxlhYJxvBqKiGxRersd-QCLcBGAsYHQ/s640/IMG-20210619-WA0054.jpg','https://1.bp.blogspot.com/-HSv6X4jtJCQ/YM2S3a-ojTI/AAAAAAAABa8/R1VIKLXGi8wmicnfN52sreFkh0pxkMAiACLcBGAsYHQ/s754/IMG-20210619-WA0055.jpg','https://1.bp.blogspot.com/-tgehydieQPY/YM2S3VkzeyI/AAAAAAAABbA/Xz-2ZCwWrbcR_I6BV_R2c13k_RX746jCgCLcBGAsYHQ/s752/IMG-20210619-WA0056.jpg','https://1.bp.blogspot.com/-fSnYgM_abwg/YJ4J50r9n9I/AAAAAAAABXM/MlsGGOdAczAIEjjTqEStFmX8aAasPeveQCLcBGAsYHQ/s1920/IMG-20210514-WA0026.jpg','https://1.bp.blogspot.com/-uAxnSJxKcMI/YJ4J5iir6YI/AAAAAAAABXI/s6GrecLykDwJ98W-65uQDl35ckcCgJyuwCLcBGAsYHQ/s1728/IMG-20210514-WA0025.jpg']
            let kyap = listc[Math.floor(Math.random() * listc.length)]
            client.sendFileFromUrl(from, kyap, 'dk.jpg', help , message.id)
            break
            
	case 'report':
                 //if (message.mentionedJidList[0] == '60143039770@c.us') return sclient.reply(message.from, 'LoL, funny', message.id)
                  if (!isGroupMsg) return await client.reply(from, 'Group msg only', id)
                  const q12 = args.join(' ')
                  if (!q12) return await client.reply(from, 'wrongFormat', id)
                  await client.sendText('27656035811-1611259388@g.us', `⊷[ REPORT ]⊷\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q12}`)
                 // const thank = '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'
                  const thank = 'https://img.devilchan.com/original/c4/50/kyoka-kyoka-princess-connect-princess-connect-re-dive-1883-1289x1500.jpeg'
                  client.sendFileFromUrl(from, `${thank}`, 'tahnks.jpg', 'Your report hass been submited and action will be taken soon...', id)
                  break



               case 'support':
                  if (!isGroupMsg) return await client.reply(from, 'Group msg only', id)
                 const q11 = args.join(' ')
                  if (!q11) return await client.reply(from, 'wrongFormat .. please state the kind of support you need ', id)
                  await client.sendText('27656035811-1611259388@g.us', `⊷[ REPORT ]⊷\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q11}`)
                  const thanks = 'https://i.imgur.com/vsQv0bR.png'
                  client.sendFileFromUrl(from, `${thanks}`, 'tahnks.jpg', 'you will soon get a message from a astro bot admin.', id)
                  break     

case'snk':  
        client.reply(from, snk, message.id)
        default:
             if (isGroupMsg){
         // const up = await axios.get('https://nekos.life/api/v2/img/wallpaper')

           client.reply(from, '𝐁𝐚𝐤𝐚! 𝐓𝐡𝐞 𝐛𝐨𝐭 𝐰𝐢𝐥𝐥 𝐨𝐧𝐥𝐲 𝐥𝐢𝐬𝐭𝐞𝐧 𝐭𝐨 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐞𝐝 𝐢𝐧 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 \n𝐥𝐢𝐬𝐭.𝐓𝐲𝐩𝐞 :𝐡𝐞𝐥𝐩 𝐢𝐟 𝐲𝐨𝐮 𝐝𝐨𝐧𝐭 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐛𝐞 𝐛𝐥𝐨𝐜𝐤𝐞𝐝.', id)
        }
           //  else if (command.startsWith(':')) {
             //return await   client.reply(from, `Don't use unlisted commands, Baka!`, id)
            
      //  }
            console.log(color('[UNLISTED]', 'red'), color(time, 'yellow'), 'Unregistered Command from', color(pushname))
            break
      
        }
    }

    } catch (err) {

             	const tr = ['https://cdn141.picsart.com/338169980054201.jpg?type=webp&to=min&r=640','https://iphone-wallpaper-hd.art/wp-content/uploads/5674.jpg', 'https://cdn130.picsart.com/291224346033201.jpg?type=webp&to=min&r=640', 'https://i.pinimg.com/originals/69/3e/44/693e44b04e1f1bd9262a29a12630c049.png','https://cdn140.picsart.com/280279776029211.png', 'https://pbs.twimg.com/profile_images/1228355020246130688/qEfv0Iok.jpg']
             	let slapp45 = tr[Math.floor(Math.random() * tr.length)]
        client.sendFileFromUrl(message.from, slapp45, '*well.jpg', `_*Internal Server Error*_ \n_*your request was not found in our database*_`,message.id)
        console.log(color('[ERROR]', 'red'), err)
    }
}







