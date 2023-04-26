/*eslint-disable*/
const fs = require('fs')
const path = require('path')

const folderPath = 'public/images/sequence-1/' // Replace with your folder path

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err)
    return
  }

  let count = 1
  files.forEach(file => {
    const ext = path.extname(file)
    const oldPath = path.join(folderPath, file)
    const newPath = path.join(folderPath, count + ext)

    fs.rename(oldPath, newPath, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Renamed ${oldPath} to ${newPath}`)
    })

    count++
  })
})
