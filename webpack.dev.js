/* eslint-disable */
require('dotenv').config()

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const postcssConfig = require('./postcss.config')
/* eslint-enable */

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/client/app.js'),
  dist: path.join(__dirname, 'dist'),
  client: path.join(__dirname, 'src', 'client'),
}

const webpackconfig = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000', // Webpack dev server
      'webpack/hot/dev-server', // Webpack dev server auto refresh / hot loading
      'react-hot-loader/patch', // Add react hot loader 3
      PATHS.app,
    ],
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js', // Output name of bundle
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Javascript loader
        include: [PATHS.src, '/node_modules/react-medium-editor-es6'],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['modern-browsers', 'react', 'stage-2'],
          plugins: [
            'react-hot-loader/babel',
            'transform-class-properties',
          ],
        },
      },
      {
        test: /\.css/,
        exclude: 'node_modules',
        include: PATHS.src,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.scss/,
        include: /react-toolbox/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]!postcss!sass',
      },
    ],
  },
  postcss: () => postcssConfig,
  sassLoader: {
    data: '@import "shared/styles/main.scss";',
    includePaths: [PATHS.src],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html'), // Use index.html as template for index.html
      chunksSortMode: 'dependency', // Order the dependacy so that bundle comes first
      filename: 'index.html', // Output file name
      inject: 'body', // Enject into the end of the body tag
    }),
    new webpack.HotModuleReplacementPlugin(), // Auto refresh page
    new webpack.DefinePlugin({ 'process.env': {
      IMAGE_STORAGE_URL: JSON.stringify(process.env.IMAGE_STORAGE_URL),
      NODE_ENV: JSON.stringify('development'),
      DEBUG: JSON.stringify(process.env.DEBUG === 'true'),
    } }),
  ],
}

new WebpackDevServer(webpack(webpackconfig), {
  inline: true,
  historyApiFallback: true, // Allows reloading of any URL
  hot: true, // Auto refresh page
  publicPath: webpackconfig.output.publicPath, // Public bath
  quiet: false, // Hides Errors
  stats: {
    chunks: false, // Hides the build chunks
    colors: true, // Colors the output
  },
  watchOptions: {
    ignored: /node_modules/, // Don't hot reload node modules
  },
  contentBase: 'src/',
  port: 3000,
  host: '0.0.0.0',
}).listen(3000, '0.0.0.0', (err, result) => {
  if (err) {
    console.log(err, result) //eslint-disable-line
  }
  console.log('Starting the development server on port 3000 👌') //eslint-disable-line
})
