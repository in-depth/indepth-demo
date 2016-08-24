/* eslist-disable */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/app.js'),
  dist: path.join(__dirname, 'dist')
};

var webpackconfig = {
  devtool: 'source-map',
  entry: {
    app: [
      PATHS.app
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'redux',
      'react-redux',
      'reselect',
      'lodash',
    ]
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkhash].js', // Hashed output name
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Javascript loader
        include: PATHS.src,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true, // Dont transpile again if nothing has changed
          presets: [ 'es2015', 'es2016', 'react' ], // Support ES7
          plugins: [
            'babel-plugin-transform-object-rest-spread', // Adds ... spread operator for objects
            'babel-plugin-transform-class-properties', // Adds support for React classes
          ]
        }
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
        include: PATHS.src,
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html'), // Use index.html as template for index.html
      chunksSortMode: 'dependency', // Order the dependacy so that bundle comes first
      filename: 'index.html', // Output file name
      inject: 'body', // Enject into the end of the body tag
    }),
  ]
}

module.exports = webpackconfig
