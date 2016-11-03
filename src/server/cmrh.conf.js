const sass = require('node-sass') //eslint-disable-line
const path = require('path')

module.exports = {
  // the custom template for the generic classes
  extensions: ['.scss', '.css'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  preprocessCss: (data, filename) => {
    return sass.renderSync({
      data,
      file: filename,
      includePaths: [
        path.join(__dirname, './src'),
        path.join(__dirname, './node_modules'),
      ],
    }).css
  },
}
