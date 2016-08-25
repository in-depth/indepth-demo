/* eslist-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var modulevalues = require('postcss-modules-values')
var cssnext = require('postcss-cssnext')
var nested = require('postcss-nested')
var atImport = require('postcss-import')

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/app.js'),
  dist: path.join(__dirname, 'dist')
};

var webpackconfig = {
  entry: {
    app: [
      'react-hot-loader/patch', // Add react hot loader 3
      'webpack-dev-server/client' + '?/', // Webpack dev server
      'webpack/hot/dev-server', // Webpack dev server auto refresh / hot loading
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
    filename: '[name].js', // Output name of bundle
    publicPath: '/'
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
          presets: [ 'modern-browsers', 'react' ],
          plugins: [
            'react-hot-loader/babel',
          ]
        }
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
    ]
  },
  postcss: function () {
    return [
      atImport,
      nested,
      cssnext,
      modulevalues,
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html'), // Use index.html as template for index.html
      chunksSortMode: 'dependency', // Order the dependacy so that bundle comes first
      filename: 'index.html', // Output file name
      inject: 'body', // Enject into the end of the body tag
    }),
    new webpack.HotModuleReplacementPlugin(), // Auto refresh page
  ]
};

new WebpackDevServer(webpack(webpackconfig), {
  historyApiFallback: true, // Allows reloading of any URL
  hot: true, // Auto refresh page
  publicPath: webpackconfig.output.publicPath, // Public bath
  quiet: false, // Hides Errors
  stats: {
    chunks: false, // Hides the build chunks
    colors: true, // Colors the output
  },
  watchOptions: {
    ignored: /node_modules/ // Don't hot reload node modules
  }
}).listen(3000, (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Starting the development server on port 3000');
});
