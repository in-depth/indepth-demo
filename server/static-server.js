/* eslint-disable */
const yargs = require('yargs')
const path = require('path')
const express = require('express')
/* eslint-enable */

const DIST = path.resolve(__dirname, '../dist')

const app = express()

app.use(express.static(DIST))

const port = yargs.argv.port || 80
app.listen(port, 'localhost', () => {
  console.log(`Server is now running at http://localhost:${port}.`)
})

module.exports = app
