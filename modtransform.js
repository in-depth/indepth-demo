const preprocessCSS = () => {
  return [
    require('precss')(),
    require('postcss-math'),
    require('postcss-modules-values'),
    require('autoprefixer')({ browsers: ['last 2 versions'] }),
  ]
}
module.exports = preprocessCSS
