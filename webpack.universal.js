/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const modulevalues = require('postcss-modules-values')
const cssnext = require('postcss-cssnext')
const nested = require('postcss-nested')
const atImport = require('postcss-import')
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
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
          'postcss',
        ],
      },
    ],
  },
  postcss: () => ([
    atImport,
    nested,
    cssnext,
    modulevalues,
  ]),
  plugins: [
  ],
}

const complier = webpack(webpackconfig)

/* eslint-disable */
complier.run((err, stats) => {
  console.log(err)
  console.log(stats)
})
/* eslint-enable */
