const isPorn = require('is-porn')


async function well(site) {


		isPorn(site, (z, m) => {
		
 		console.log(z, m)
		})

}

well('nhentai')
