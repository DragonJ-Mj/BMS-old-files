const fs = require('fs-extra')
const giveArr = JSON.parse(fs.readFileSync('../data/giveaway.json'))



function getIt(arr) {
	console.log(arr)
	for (let i = 0; i < 5; i++) {
		try {
			let rNo = Math.floor(Math.random() * arr.length) 
			let w = arr[rNo]
			let inx = arr.indexOf(w)
                	arr.splice(inx, 1)
			sclient.sendTextWithMentions(msg.from, `*${i+1}.* 🎊️ Congratulations *@${w.replace('@c.us', '')}*!\n\n*5000* Gold has been added to your wallet! ♥️`)
			//let g = tb.get(`${w}.gold`)
			//tb.set(`${w}.gold`, g+5000)
		} catch(err) {
			console.log(err)
			continue
		}
	}

}

getIt(giveArr)
