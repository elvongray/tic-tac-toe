var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'app/app.js')
  ],

  output: {
    path: './build',
    filename: 'bundle.js'
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

  postcss: [ autoprefixer ],

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ]
}