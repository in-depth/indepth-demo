const { readdirSync } = require('fs')
const { resolve, basename, extname } = require('path')

const sharp = require('sharp')

const imgDir = resolve(__dirname, 'src/static/images/collection-items')

const images = readdirSync(imgDir, { encoding: 'utf8' })

images.forEach(img => {
  sharp(`${imgDir}/${img}`)
  .tile({ size: 1024 })
  .toFile(`${imgDir}/${basename(img, extname(img))}.dzi`, (err, info) => {
    if (err) return console.error(err)
    return console.info(info)
  })
})
