/* eslint-disable */
require('dotenv').config()

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const postcssConfig = require('./postcss.config')
/* eslint-enable */

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src', 'client', 'app.js'),
  dist: path.join(__dirname, 'dist', 'js'),
}

const webpackconfig = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    app: [
      PATHS.app,
    ],
  },
  output: {
    path: PATHS.dist,
    filename: 'bundle.js', // Output name of bundle
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
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
      },
      {
        test: /\.scss/,
        include: /react-toolbox/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        ),
      },
    ],
  },
  postcss: () => postcssConfig,
  sassLoader: {
    data: '@import "shared/styles/main.scss";',
    includePaths: [PATHS.src],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('../common.css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({ 'process.env': {
      IMAGE_STORAGE_URL: JSON.stringify(process.env.IMAGE_STORAGE_URL),
    } }),
  ],
}

const complier = webpack(webpackconfig)

/* eslint-disable */
complier.run((err, stats) => {
  console.log(err)
  console.log(stats)
})
/* eslint-enable */
