const autoprefixer = require('autoprefixer')
const postcssMath = require('postcss-math')
const postcssModVars = require('postcss-modules-values')
const postcssScss = require('postcss-scss')
const precss = require('precss')

const cfg = [
  precss(),
  postcssMath,
  postcssModVars,
  autoprefixer({ browsers: ['last 2 versions'] }),
]

module.exports = cfg
