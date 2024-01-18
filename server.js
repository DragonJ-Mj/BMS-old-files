const puppeteer = require('puppeteer');

const http = require('http');
const url = require('url');

(async() => {

browser = await puppeteer.launch({"headless": true,  args: ['--no-sandbox'] })

})();

http.createServer(async function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  if (!queryObject.q) {

	res.writeHead(200, {'Content-Type': 'application/json'});
  	return res.end(JSON.stringify({ msg : 'Wrong format'}));
  }	
try {
  console.log(queryObject)
  const z = await get(queryObject.q)
  console.log(z)

  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ url : z}));

} catch {

	res.writeHead(200, {'Content-Type': 'application/json'});
  	return res.end(JSON.stringify({ error : 'Error'}));
}
}).listen(8080);

async function get(text) {
    let inputText = text;

     //Disable it if using in WA BOT
    const page = await browser.newPage();
    await page.goto('https://en.ephoto360.com/light-text-effect-futuristic-technology-style-648.html');
    //console.log("Website Loaded!");
    const genBtn = await page.$("#submit");
    //console.log("Button Loaded");
    const textField = await page.$("#text-0");
    //console.log("Text");
    await page.type("#text-0", inputText);
    //console.log("Inputed Text")
    await genBtn.evaluate(genBtn => genBtn.click());
    //console.log("Generating Image");
    await page.waitForSelector('.bg-image', {
        visible: true,
    });
    let generated_Image = await page.$$eval('.bg-image', imgs => imgs.map(img => img.getAttribute('src')));
    //let image_Url = await document.querySelector(".generated-image").src;
    let image_Url = generated_Image.toString()
    //console.log("Grabbed image!");
    //onsole.log("URL:" + image_Url);
	return image_Url
    //return image_Url;
    //await browser.close() //Comment out this line to keep it running 
    // Follow me on instagram cuz i have to feed my doge your human meat 
    // @samurai3247

}


