// webpack.config.prod.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'bootstrap-material-design': path.join(__dirname, 'node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css')
    }
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'API_URL': JSON.stringify('https://wnt-project-backend.herokuapp.com/api')
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.png$/,
        loader: 'url-loader'
      }
    ]
  }
};

new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
});