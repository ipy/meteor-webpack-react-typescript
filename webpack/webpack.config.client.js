var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    './lib/core-js-no-number',
    'regenerator/runtime',
    '../app/main_client',
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'client.bundle.js',
    publicPath: '/assets/',
  },
  resolve: {
    extensions: ['',  '.ts', '.tsx', '.js', '.jsx'],
    root: path.join(__dirname, '../app'),
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel?stage=0!ts-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel?stage=0',
        exclude: /node_modules|lib/,
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ],
  },
  plugins: [
    new webpack.PrefetchPlugin("react"),
    new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
  ]
};
