/* eslint-disable */
const { readdirSync } = require('fs')
const { resolve, basename, extname } = require('path')

const sharp = require('sharp')

const imgDir = resolve(__dirname, 'src/static/images/collection-items')

const images = readdirSync(imgDir, { encoding: 'utf8' })

images.filter(img => img !== '.DS_Store').forEach(img => {
  sharp(`${imgDir}/${img}`)
  .tile({ size: 256 })
  .toFile(`${imgDir}/${basename(img, extname(img))}.dzi`, (err, info) => {
    if (err) {
      return console.error(img, err)
    }
    return console.info(info)
  })
})

/* eslint-enable */
