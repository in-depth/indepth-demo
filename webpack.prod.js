/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const modulevalues = require('postcss-modules-values')
const cssnext = require('postcss-cssnext')
const nested = require('postcss-nested')
const atImport = require('postcss-import')
/* eslint-enable */

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/client/app.js'),
  dist: path.join(__dirname, 'dist'),
  client: path.join(__dirname, 'src', 'client'),
  distStatic: path.join(__dirname, 'dist_static'),
}

const webpackconfig = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: [
      PATHS.app,
    ],
  },
  output: {
    path: PATHS.distStatic,
    filename: '[name].js', // Output name of bundle
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
          cacheDirectory: false,
          presets: ['es2015', 'es2016', 'react'],
          plugins: [
            'babel-plugin-transform-object-rest-spread', // Adds ... spread operator for objects
            'babel-plugin-transform-class-properties', // Adds support for React classes
          ],
        },
      },
      {
        test: /\.css/,
        exclude: 'node_modules',
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
          'postcss'
        ),
      },
      {
        test: /\.scss/,
        include: /react-toolbox/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]',
          'postcss',
          'sass'
        ),
      },
    ],
  },
  postcss: () => ([
    atImport,
    nested,
    cssnext,
    modulevalues,
  ]),
  sassLoader: {
    data: '@import "shared/styles/main.scss";',
    includePaths: [PATHS.src],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.client, 'index.html'), // Use index.html as template for index.html
      chunksSortMode: 'dependency', // Order the dependacy so that bundle comes first
      filename: 'index.html', // Output file name
      inject: 'body', // Enject into the end of the body tag
    }),
    new ExtractTextPlugin('[name].[chunkhash].css', {
      allChunks: true,
    }),
  ],
}

module.exports = webpackconfig
