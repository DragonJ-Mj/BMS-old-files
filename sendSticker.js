const { decryptMedia } = require('@open-wa/wa-decrypt')
const fs = require('fs-extra')
const mime = require('mime-types')
const nrc = require('node-run-cmd')
const sizeOf = require('image-size')
const gifFrames = require('gif-frames')
const Jimp = require('jimp')
const { GifFrame, GifUtil, GifCodec } = require('gifwrap')
const queuejs = require('./queue')
//const exif = require('./ex.js')
const { execSync } = require("child_process");
//make sure you have imagemagick and ffpmeg
//if (con)

exports.convertSticker = async function(message){
	if (sendingWebp.indexOf(message.from) > -1) {
    		queueWebp.push(message)
    		return
	}
	try {
		sendingWebp.push(message.from)
		const buffz = await decryptMedia(message)
		const filename = `./media/sticker/convert/${message.from}`
		await fs.writeFileSync(`${filename}.webp`, buffz)
		await exec(`webp2gif ${filename}.webp ${filename}.gif`)
		await exec(`ffmpeg -i ${filename}.gif -c:v libvpx -crf 12 -b:v 500K ${filename}.mp4`)
		const buffr = await fs.readFileSync(`${filename}.mp4`, { encoding: 'base64'})
		const mimetype = await mime.lookup(`${filename}.mp4`)
		await sclient.sendVideoAsGif(message.from, `data:${mimetype};base64,${buffr}`, 'sticker.mp4', 'Done!')
	} catch(err) {
		console.log(err)
		sclient.reply(message.from, 'An Error Occured!', message.id)
	} finally {
		for (let index = 0; index < sendingSticker.length; index++) {
    			if (sendingWebp[index] == message.from) {
      				sendingWebp.splice([index], 1)
    			}
  		} 
		if (queueWebp.length != 0) {
    			queuejs.webp(message)
  		}
  		delete require.cache[require.resolve('./queue')]
	}
}

exports.sendSticker = async function (message) {
  //console.log(sendingSticker)
  if (sendingSticker.indexOf(message.from) > -1) {
    queueSticker.push(message)
    return
  } else {
  }
  sendingSticker.push(message.from)
  const buffer = await decryptMedia(message)
  const fileName = `./media/sticker/temp${message.from}.${mime.extension(message.mimetype)}`
  fs.writeFile(fileName, buffer, function (err) {})
  await nrc.run('convert ./media/sticker/temp' + message.from + '.jpeg ./media/sticker/' + message.from + '.png')
  var dimensions = await sizeOf('./media/sticker/' + message.from + '.png')
  //console.log(dimensions.width + '  ' + dimensions.height)
  if (dimensions.width < dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border ' + (dimensions.height - dimensions.width) / 2 + 'x0 ./media/sticker/' + message.from + '.png')
  } else if (dimensions.width > dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border 0x' + (dimensions.width - dimensions.height) / 2 + ' ./media/sticker/' + message.from + '.png')
  } else {
  }
	
	//'sticker/' + message.from + '.png'
  await nrc.run(`cwebp ./media/sticker/${message.from}.png -o ./media/sticker/${message.from}.webp`)
  await nrc.run(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${message.from}.webp -o ./media/sticker/${message.from}.webp`)
  var b64 = await fs.readFile(`./media/sticker/${message.from}.webp`, { encoding: 'base64'})
  await sclient.sendRawWebpAsSticker(message.from, b64)
  fs.unlinkSync(`./media/sticker/${message.from}.webp`)
  for (let index = 0; index < sendingSticker.length; index++) {
    if (sendingSticker[index] == message.from) {
      sendingSticker.splice([index], 1)
    }
  }
  if (queueSticker.length != 0) {
    queuejs.sendSticker(message)
  }
  delete require.cache[require.resolve('./queue')]
}






exports.sendAnimatedSticker = async function (message) {
 try {
  // console.log(sendingAnimatedSticker)
  if (sendingAnimatedSticker.indexOf(message.from) > -1) {
    queueAnimatedSticker.push(message)
    return
  } else {
  }
  sendingAnimatedSticker.push(message.from)
  const buffer = await decryptMedia(message)
  const fileName = `./media/sticker/temp${message.from}.${mime.extension(message.mimetype)}`
  await fs.writeFileSync(fileName, buffer)
  await nrc.run(`ffmpeg -y -i ./media/sticker/temp${message.from}.mp4 ./media/sticker/${message.from}.gif`)
  await gifFrames({ url: './media/sticker/' + message.from + '.gif', frames: 'all' }).then(function (frameData) {
    frameData[0].getImage().pipe(fs.createWriteStream('./media/sticker/firstframe' + message.from + '.png'))
    frames = frameData
  })
  //  console.log(frames.length)

  if (frames.length < 7) {
    await nrc.run('convert ' + './media/sticker/' + message.from + '.gif ./media/sticker/' + message.from + '.gif  ./media/sticker/' + message.from + '.gif')
  }

  await nrc.run('convert ' + './media/sticker/' + message.from + '.gif -coalesce -delete 0 ./media/sticker/' + message.from + '.gif')
  var dimensions = await sizeOf('./media/sticker/' + message.from + '.gif')
  success = true
  while (success) {
    await Jimp.read('./media/sticker/firstframe' + message.from + '.png')
      .then((image) => {
        for (let i = 1; i < dimensions.width; i++) {
          for (let j = 1; j < dimensions.height; j++) {
            Sleep(1)
            colors = Jimp.intToRGBA(image.getPixelColor(i, j))
            if (colors.r > 155) {
              colors.r = colors.r - 5
            } else {
              colors.r = colors.r + 5
            }
            if (colors.g > 155) {
              colors.g = colors.g - 5
            } else {
              colors.g = colors.g + 5
            }
            if (colors.b > 155) {
              colors.b = colors.b - 5
            } else {
              colors.b = colors.b + 5
            }
            if (colors.a > 155) {
              colors.a = colors.a - 5
            } else {
              colors.a = colors.a + 5
            }

            hex = Jimp.rgbaToInt(colors.r, colors.g, colors.b, colors.a)

            //     console.log(hex)
            image.setPixelColor(hex, i, j) // sets the colour of that pixel
            success = false
          }
        }
        image.write(fileNameF + '.png')
      })
      .catch((err) => {
        // console.log('ERROR: ' + err)
      })
  }
  await Sleep(1000)
  // console.log(dimensions.width + '  ' + dimensions.height)
  if (dimensions.width < dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border ' + (dimensions.height - dimensions.width) / 2 + 'x0 ./media/sticker/' + message.from + '.gif')
    await nrc.run('mogrify -bordercolor transparent -border ' + (dimensions.height - dimensions.width) / 2 + 'x0 ./media/sticker/firstframe' + message.from + '.png')
  } else if (dimensions.width > dimensions.height) {
    await nrc.run('mogrify -bordercolor transparent -border 0x' + (dimensions.width - dimensions.height) / 2 + ' ./media/sticker/' + message.from + '.gif')
    await nrc.run('mogrify -bordercolor transparent -border 0x' + (dimensions.width - dimensions.height) / 2 + ' ./media/sticker/firstframe' + message.from + '.png')
  } else {
  }
  await nrc.run('convert ' + './media/sticker/firstframe' + message.from + '.png' + ' ./media/sticker/' + message.from + '.gif -resize 256x256' + ' ./media/sticker/' + message.from + '.gif')
  stats = fs.statSync('./media/sticker/' + message.from + '.gif')
  // console.log(stats['size'])
  try {
    await nrc.run(`gif2webp ../media/sticker/${message.from}.gif -o ./media/sticker/${message.from}`)
    await nrc.run(`webpmux -set exif ./media/sticker/data.exif ./media/sticker/${message.from}.webp -o ./media/sticker/${message.from}.webp`)
    const contents = await fs.readFile(`./media/sticker/${message.from}.webp`, {encoding: 'base64'}) 
    await sclient.sendRawWebpAsSticker(message.from, contents)
  } catch (error) {
    console.log(error)
    if (String(error) == 'Processed image is too large for the WebP format') {
      sclient.reply(message.from, String(error), message.id.toString()) //Error: Processed image is too large for the WebP format
    }
  }

  for (let index = 0; index < sendingAnimatedSticker.length; index++) {
    if (sendingAnimatedSticker[index] == message.from) {
      sendingAnimatedSticker.splice([index], 1)
    }
  }
  if (queueAnimatedSticker.length != 0) {
    queuejs.sendAnimatedSticker(message)
  }
  delete require.cache[require.resolve('./queue')]

  } catch(err) {
	// console.log(err)
}
}

module.exports.convertMp4BufferToWebpDataUrl = function (file, processOptions, stickername, packname) {
    if (processOptions === void 0 ) { processOptions = {
        fps: 10,
        startTime: "00:00:00.0",
        endTime: "00:00:05.0",
        loop: 0,
        crop: true
    }; }

    if (processOptions === "BMSZ") {
        //console.log('exif') 
        if (stickername === undefined) {stickername = "EWH", packname = "BMSZ"}
        processOptions = {
            fps: 10,
            startTime: "00:00:00.0",
            endTime: "00:00:05.0",
            loop: 0,
            crop: true,
            author: stickername,
            packname: packname,
            exif: true
        }
    }
    
    return __awaiter(this, void 0, void 0, function () {
        var tempFile, file2, r, stream, d;
        return __generator(this, (_a) => {
                switch (_a.label) {
                    case 0:
                        r = Math.random().toString(36).substring(7);
                        tempFile = path.join(os_1.tmpdir(), "processing." + r + ".webp");
                        stream = new (require('stream').Readable)();
                        stream.push(Buffer.isBuffer(file) ? file : Buffer.from(file.replace('data:video/mp4;base64,', ''), 'base64'));
                        stream.push(null);
                        return [4, new Promise((resolve, reject) => {
                            ffmpeg(stream)
                                .inputFormat('mp4')
                                .on('start', (cmd) => {
                                })
                                .on('error', (err) => {
                                    //console.log('An error occurred: ' + err.message);
                                    reject(err);
                                })
                                .on('end', async () => {
                                    if (processOptions.exif) {
                                        file2 = addMetadata(tempFile, processOptions.author, processOptions.packname);
                                    }
                                    await Sleep(1000)
                                    resolve(true);
                                })
                                .addOutputOptions(["-vcodec", "libwebp", "-vf", (processOptions.crop ? "crop=w='min(min(iw,ih),500)':h='min(min(iw,ih),500)'," : "") + "scale=500:500,setsar=1,fps=" + processOptions.fps, "-loop", "" + processOptions.loop, "-ss", processOptions.startTime, "-t", processOptions.endTime, "-preset", "default", "-an", "-vsync", "0", "-s", "512:512"])
                                .toFormat("webp")
                                .save(tempFile);
                        })];
                    case 1:
                        _a.sent();
                        return [4, datauri(tempFile)];
                    case 2:
                        d = _a.sent();
                        fs.unlinkSync(tempFile);
                        fs.unlinkSync(file2);
                        return [2, d];
                }
            });
    });
}

function Sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function addMetadata(file, packname, author) {
    const stickerpackid = "com.ewh.wa.stickerapp xxxxxxxx-xxxx-shel-ltea-rxxxxxxxxxxx"
    const json = {
        "sticker-pack-id": stickerpackid,
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
      }
      
      const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
      const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
      
      let len = JSON.stringify(json).length
      let last;
      
      if (len > 256) {
          len = len - 256
          bytes.unshift(0x01)
      } else {
          bytes.unshift(0x00)
      }
      
      if (len < 16) {
          last = len.toString(16)
          last = "0" + len
      } else {
          last = len.toString(16)
      }
      
      const buf2 = Buffer.from(last, "hex")
      const buf3 = Buffer.from(bytes)
      const buf4 = Buffer.from(JSON.stringify(json))
      
      const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])
    
      let name = Math.random().toString(36).substring(7);

      fs.writeFile(`${os_1.tmpdir()}/${name}.exif`, buffer, (err) => {
        if (err) {
            console.log(err);
        }
            execSync(`webpmux -set exif ${os_1.tmpdir()}/${name}.exif ${file} -o ${file}`)
    });
    return `${os_1.tmpdir()}/${name}.exif`
}

