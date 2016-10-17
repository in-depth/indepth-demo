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
const cssnano = require('cssnano')
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
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?sourceMap&modules&&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
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
  postcss: () => ([
    atImport,
    nested,
    cssnext,
    modulevalues,
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ]),
  sassLoader: {
    data: '@import "shared/styles/main.scss";',
    includePaths: [PATHS.src],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: true,
      compress: {
        warnings: false,
        unused: true,
        dead_code: true,
        drop_console: true,
        comparisons: true,
        conditionals: true,
      },

      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
    }),
    new ExtractTextPlugin('../common.css', {
      allChunks: true,
    }),
  ],
}

const complier = webpack(webpackconfig)

/* eslint-disable */
complier.run((err, stats) => {
  console.log(err)
  console.log(stats)
})
/* eslint-enable */
