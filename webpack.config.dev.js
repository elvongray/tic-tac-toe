var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/app.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
  },

  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader!postcss-loader'
      }
    ]
  },

  postcss: [ autoprefixer ]
}