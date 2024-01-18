const { create ,ev} = require('@open-wa/wa-automate')
const msgHandler = require('./msgHandler')
const fs = require('fs-extra')
const bmsArr = ['919089248348-1621058051@g.us','27640170108-1616848307@g.us',' 919089248348-1621058051@g.us','27656035811-1600249425@g.us','918412054787-1621004288@g.us','916238312046-1617686827@g.us','994404364430-1607502294@g.us','27656035811-1600517112@g.us','27656035811-1605600286@g.us','27656035811-1601317905@g.us' ,'6737229309-1609745442@g.us','60143039770-1609745110@g.us']
//const pokefunc = require('./lib/poke.js')
giveArr = JSON.parse(fs.readFileSync('./data/giveaway.json'))
db = require('quick.db')
const canvacord = require("canvacord")
const express = require('express')
 const bmsArrC = ['919089248348-1624781808@g.us']
//const welcome = require('./lib/welcome.js')
  // const = ["https://1.bp.blogspot.com/-4XKu4gStr9M/YCt1ZjDtM8I/AAAAAAAABCs/qQimVBJWD_Ee-imTKn9FmE5c69OGem2AACLcBGAsYHQ/s1000/Ephoto360.com_1602a6b99178b6.jpg","https://1.bp.blogspot.com/--bVXBXZZa7g/YCt1ZCBA7TI/AAAAAAAABCo/AFxEzK4pVRs3uxX5-1WpvKlAc_Upu2TsgCLcBGAsYHQ/s1081/Ephoto360.com_1602a6d524b5f2.jpg","https://1.bp.blogspot.com/-QH5pwAk5c1A/YCt1Z5MRbwI/AAAAAAAABCw/uaVmXO4Pk_UG3wGmW_FctQhFc1A-6GW-ACLcBGAsYHQ/s1000/Ephoto360.com_1602a7cec3d636.jpg","https://1.bp.blogspot.com/-rVIOnrVrPsg/YCt1afIUVBI/AAAAAAAABC0/usCDH5j7i3o8RIl_Jau1aFhBMPvKz0gQgCLcBGAsYHQ/s900/Ephoto360.com_1602a9e9b8f102.jpg","https://1.bp.blogspot.com/-h0F7TSDIgMU/YCt1bXkHnuI/AAAAAAAABC4/PTWyvPugmxAiQiopylaX6fFT1rmhZKQAACLcBGAsYHQ/s900/Ephoto360.com_1602a9f8c20810.jpg","https://1.bp.blogspot.com/-WBiCoxPTtoU/YCt1fCAXS3I/AAAAAAAABDQ/PMbKTM_i00YKACidOyGEbnI9qI0gPrAtACLcBGAsYHQ/s2560/PicsArt_02-15-07.33.19.jpg"]
//const  listcc =`goodbye @${event.who.replace('@c.us', '')}`
const farewell = require('./lib/farewell.json')
const wel = require('./lib/welcome.json')
const astro = require('./lib/astro.json')
const app = express()
tb = new db.table('exp')
gb = new db.table('grp')
duri = ''
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
async function getUserInfo(message) {

	const data = await sclient.getContact(message.mentionedJidList[0])
	console.log(data) 
	return data.pushname

}


/*((const opsys = process.platform
if (opsys === 'win32' || opsys === 'win64') {
    serverOption.executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
} else if (opsys === 'linux') {
    serverOption.browserRevision = '737027'
} else if (opsys === 'darwin') {
    serverOption.executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
} */

const startServer = async (client) => {
    global.sclient = client
    global.Asuza = client
    sendingSticker = []
    queueSticker = []
    global.sendingAnimatedSticker = []
    global.queueAnimatedSticker = []
    global.amdownloaden = []
    global.queuemp3 = []
    global.queuemp4 = []
    sendingWebp = []
    queueWebp = []
     welarr = []
    spamarr = []
     botNumber = await client.getHostNumber()
    //botadmins = await client.getGroupAdmins('919744375687-1611057283@g.us') 
        console.log('[ASTRO] Server Started!')
        // Force it to keep the current session
        client.onStateChanged((state) => {
                console.log('[Client State]', state)
                if (state === 'CONFLICT') client.forceRefocus()
        })
        // listening on message
        client.onMessage((message) => {
            msgHandler(client, message)
        })
       /* client.onGlobalParticipantsChanged(async(event) => {
            const farewell = JSON.parse(fs.readFileSync('./lib/farewell.json'))
            const isfarewell = farewell.includes(event.chat)
            if (event.action === 'remove') { 
                if (isfarewell == true) {
                let hm = listcc[Math.floor(Math.random() * listcc.length)]
                return client.sendText(event.chat, hm)
                }
            }
        })*/

       

        

        //farewell
        
        client.onGlobalParticipantsChanged(async(event) => {
            const astro = JSON.parse(fs.readFileSync('./lib/astro.json'))
            const isastro = astro.includes(event.chat)
            const farewell = JSON.parse(fs.readFileSync('./lib/farewell.json'))
            const isfarewell = farewell.includes(event.chat)
            const  listcc = ['goodbye',' we wont miss you bish',' tata,see you later!!','adios.']
           // const ct = `${person.pushname}`
            if (event.action === 'remove') { 
                if (isfarewell == true) {
                let hm = listcc[Math.floor(Math.random() * listcc.length)]
                return client.sendText(event.chat, hm )
                }
            }
           // if (event.action === 'add') { 
                if (isastro == true) {
                    if (event.action === 'add') {
                     if (bmsArrC.includes(event.chat)) {
                          const det = await client.getChatById(event.chat)
                const person = await client.getContact(event.who)
                const title = (det['name']) ? det['name'] : 'ASTRO SUPPORT'
                const pfp = await client.getProfilePicFromServer(event.chat)
                const fg = `
🎉️ *WELCOME TO ASTRO OFFICIAL HENTAI GROUP* 🎉️
|   *${title}*   |

*NOTE THIS SUPPORT IS FOR HENTAI ONLY AND NOTHING ELSE*

*ENJOY THE GROUP SIMPS*

*NO PORN ALLOWED ONLY HENTAI PORN ALLOWED*

_PLEASE NO SPAMMING_

*${person.pushname}*

*ENJOY 🚀𝔸𝕊𝕋ℝ𝕆*
`
return client.sendFileFromUrl(event.chat, pfp ,'pfp.jpg' , fg)

                     } 
                        if (bmsArr.includes(event.chat)) {
                
                const det = await client.getChatById(event.chat)
                const person = await client.getContact(event.who)
                const title = (det['name']) ? det['name'] : 'ASTRO SUPPORT'
                const pfp = await client.getProfilePicFromServer(event.chat)
                //const pc = 'https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png'
                const cv = `
🎉️ *WELCOME TO ASTRO OFFICIAL SUPPORT GROUP* 🎉️

|   *${title}*   |

*PLEASE NOTE THIS SUPPORT GROUP IS FOR ANY* 
*QUESTIONS REALTED TO THE ASTRO BOTS AND FOR BOT USE*
              
*DO NOT SPAM OR YOU WILL BE REMOVED*

*${person.pushname}*

*ENJOY 🚀𝔸𝕊𝕋ℝ𝕆*
              
`
return client.sendFileFromUrl(event.chat, pfp ,'pfp.jpg' , cv)
                    

               



               
                }
                const group = await client.getChatById(event.chat)
               // const desc = chat.groupMetadata.desc
              // const det = await client.getChatById(event.chat)
               // const det = await client.getChatById(event.chat)
               // const person = await client.getContact(event.who)
               if (welarr.length > 2) return 0
    welarr.push(event.chat)
   // const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
   // const isWel = wel.includes(event.chat)
    const randomHexs = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
    const randomHex = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
    const randomHexz = `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
   // try {
       // if (event.action == 'add' && isWel) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const pfp = await client.getProfilePicFromServer(event.who)
            const namae = (person.pushname) ? person.pushname : 'Member'
            const img = (pfp) ? pfp : 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
            var userId = event.who.substring(7, 11)
            console.log(userId)
            const wel2 = new canvacord.Welcomer()
            .setUsername(namae)
            .setDiscriminator(userId)
            .setMemberCount(det.groupMetadata.participants.length)
            .setGuildName(det.formattedTitle)
            .setAvatar(img)
            .setColor("border", randomHex)
            .setColor("username-box", randomHex)
            .setColor("discriminator-box", randomHexs)
            .setColor("message-box", randomHexz)
            .setColor("title", randomHex)
            .setColor("avatar", randomHexz)
            .setColor("background", randomHexs)
            .setBackground('https://wallpapercave.com/wp/wp5501287.png')
            const data = await wel2.build()
                  //  sclient.sendImage(event.chat, `data:image/png;data,${data.toString('base64')}`, 'wel.png', `*Welcome To ${det.formattedTitle}!*`)
           
       // } 
                const title = (det['name']) ? det['name'] : 'ASTRO SUPPORT'
               // const pfp = await client.getProfilePicFromServer(event.chat)
                const ct = 
`welcome to |   *${title}*   | 

*${person.pushname}*

Have fun with us✨

Group Description

${det.groupMetadata.desc}
 `
return client.sendImage(event.chat, `data:image/png;data,${data.toString('base64')}`, 'wel.png' ,ct )
welarr = []
            }
        }
   
    })
        
        
        
       
        
     // listening on Incoming Call
        client.onIncomingCall( async(call) => {
            client.sendText(call.peerJid, '...')
            client.contactBlock(call.peerJid)
            ban.push(call.peerJid)
            fs.writeFileSync('./lib/banned.json', JSON.stringify(ban))
        })
     
    
      // welcome
       /* client.onGlobalParticipantsChanged(async(event) => {
         const farewell= JSON.parse(fs.readFileSync('./lib/farewell.json'))
         const isfarewell = farewell.includes(event.chat)
         if (event.action === 'add') { 
         if (isfarewell == true) {
            if (bmsArr.includes(event.chat)) {
            const det = await client.getChatById(event.chat)
            const person = await client.getContact(event.who)
            const pfp = await client.getProfilePicFromServer(event.chat)
            const title = (det['name']) ? det['name'] : 'ASTRO SUPPORT'
             const text = `🎉️ WELCOME TO ASTRO OFFICIAL SUPPORT GROUP 🎉️

|   *${title}*   |

PLEASE NOTE THIS SUPPORT GROUP IS FOR ANY 
QUESTIONS REALTED TO THE ASTRO BOTS AND FOR BOT USE

DO NOT SPAM OR YOU WILL BE REMOVED

*${person.pushname}*


ENJOY 🚀𝔸𝕊𝕋ℝ𝕆`

return client.sendFileFromUrl(event.chat, pfp, 'pfp.jpg', text)
}
const group = client.getChatById(event.chat)
return client.sendTextWithMentions(event.chat, `Hello, Welcome to the group @${event.who.replace('@c.us', '')} \n\nHave fun with us✨\nGroup Description\n\n${group.groupMetadata.desc}`).then(() => client.sendFileFromUrl(event.chat, 'https://www.pngitem.com/pimgs/m/110-1109116_welcome-anime-anime-girl-welcome-sign-hd-png.png', 'welcome.png'))
          }
       }
    })*/

    /*client.onGlobalParticipantsChanged(async(event) => {
        const wel = JSON.parse(fs.readFileSync('./lib/welcome.json'))
        const iswel = wel.includes(event.chat)
        if (event.action === 'remove') { 
            if (iswel == true) {
           // let hm = listcc[Math.floor(Math.random() * listcc.length)]
            return client.sendText(event.chat, '.')
            }
        }
    })*/
        
     //added to group 
    client.onAddedToGroup( async(chat) => {
            let totalMem = chat.groupMetadata.participants.length
            if (totalMem < 30) { 
            	client.sendText(chat.id, `This group only has ${totalMem} members, Its needs atleast 30 members to activate the services`).then(() => client.leaveGroup(chat.id))
            	client.deleteChat(chat.id)
            } else {
                client.sendText(chat.groupMetadata.id, `
                Thanks for adding me *${chat.contact.name}*. A ᴡʜᴀᴛsᴀᴘᴘ BOT ᴇɴᴀʙʟᴇs ʏᴏᴜ ᴛᴏ ᴇᴍʙᴀʀᴋ ᴏɴ ᴄᴏɴᴠᴇʀsᴀᴛɪᴏɴᴀʟ ᴄᴏᴍᴍᴇʀᴄᴇ ᴀɴᴅ ᴍᴀɴᴀɢᴇ ɪssᴜᴇs.
                Uɴᴀᴜᴛʜᴏʀɪᴢᴇᴅ ᴜsᴇ ᴏғ ʙᴏᴛs ,sᴘᴀᴍᴍɪɴɢ ɪɴ ʙᴏᴛ's ᴅᴍ ᴡɪʟʟ ʟᴇᴀᴅ ᴛᴏ ʙᴀɴ.
                Wᴇ ᴀʀᴇ ᴄᴏᴍᴍɪᴛᴛᴇᴅ ᴛᴏ ʀᴇɪɴғᴏʀᴄɪɴɢ ᴛʜᴇ ᴘʀɪᴠᴀᴛᴇ ɴᴀᴛᴜʀᴇ ᴏғ ᴏᴜʀ ᴘʟᴀᴛғᴏʀᴍ ᴀɴᴅ ᴋᴇᴇᴘɪɴɢ ᴜsᴇʀs sᴀғᴇ ғʀᴏᴍ ᴀʙᴜsᴇ.
                use :help to see cmds
                 
                🚀𝔸𝕊𝕋ℝ𝕆 
                `)
            }
        })

    
}
readline.question(`ENTER BOT ID: `, (name) => {
  console.log(`LOGGING ON ${name}!`)
  readline.close()
const serverOption = {
    sessionId: name,
    headless: true,
    cacheEnabled: false,
    useChrome: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromiumArgs: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--aggressive-cache-discard',
        '--disable-cache',
        '--disable-application-cache',
        '--disable-offline-load-stale-cache',
        '--disk-cache-size=0'
    ]
}

create(serverOption)
    .then(async (client) => startServer(client))
    .catch((error) => console.log(error))
})
