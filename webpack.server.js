require('dotenv').config()

const path = require('path')
const Webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const postcssConfig = require('./postcss.config')

const nodeModulesPath = path.resolve(__dirname, 'node_modules')
const sourcePath = path.resolve(__dirname, 'src')

const config = {
  context: process.cwd(),

  target: 'node',

  externals: [nodeExternals({
    importType: 'commonjs',
    modulesDir: nodeModulesPath,
    modulesFromFile: false,
    whitelist: [/\.scss$/, /^react-toolbox/],
  })],

  entry: path.resolve(__dirname, 'src/server/server.js'),

  output: {
    path: path.resolve(__dirname, 'server'),
    filename: 'index.js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: sourcePath,
        loader: 'babel-loader',
        query: {
          cacheDirectory: false,
          presets: ['es2015', 'es2016', 'stage-2', 'react'],
          plugins: [
            'babel-plugin-transform-object-rest-spread',
            'babel-plugin-transform-class-properties',
            'transform-class-properties',
            ['css-modules-transform', {
              extensions: ['.css', '.scss'],
              generateScopedName: '[name]__[local]___[hash:base64:5]',
            }],
          ],
        },
      },
      {
        test: /\.css$/,
        include: sourcePath,
        loader: 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss',
      },
      {
        test: /\.scss$/,
        include: nodeModulesPath,
        loader: 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass',
      },
    ],
  },
  plugins: [
    new Webpack.DefinePlugin({ 'process.env': {
      NODE_ENV: JSON.stringify('production'),
      PORT: JSON.stringify(process.env.PORT),
    } }),

    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compressor: { screw_ie8: true, keep_fnames: true, warnings: false },
      mangle: { screw_ie8: true, keep_fnames: true },
    }),
  ],

  postcss: () => postcssConfig,

  sassLoader: {
    data: '@import "shared/styles/main.qscss";',
    includePaths: [sourcePath],
  },
}

module.exports = config
