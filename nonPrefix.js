module.exports = { msg }
async function msg(message, color, p, time) {
	if (message.type == 'chat') {
		const text = message.body.toLowerCase() 
		switch (true) {
			case text.startsWith('hi'): 
			const hr = 'https://i.imgur.com/EQxuUig.png'
				return sclient.sendFileFromUrl(message.from,`${hr}`, 'gt.png', 'yo!', message.id)
				break
		         case (text.startsWith(':')): 
				sclient.reply(message.from, 'hi', message.id) 
				break
		}
	}
	if (p) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(message.sender.pushname))
	if (!p) return console.log('[RECV]', color(time, 'yellow'), 'Message from', color(message.sender.pushname), 'in', color(message.chat['name']))
}

		