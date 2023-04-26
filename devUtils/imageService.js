/*eslint-disable*/
const fs = require('fs')
const sharp = require('sharp')

const folder = 'public/images/sequence-1'

fs.readdir(folder, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  fs.mkdir(`${folder}/converted`, () => {})

  files.forEach(async file => {
    console.log(file)

    const inputPath = `${folder}/${file}`
    const outputPath = `${folder}/converted/${file.replace(
      /\.[^/.]+$/,
      ''
    )}.webp`

    await sharp(inputPath)
      .toFormat('webp', {
        quality: 60,
        reductionEffort: 6,
        smartSubsample: true,
        alphaQuality: 0,
        lossless: false,
        force: true,
      })
      .toFile(outputPath)
  })
})
