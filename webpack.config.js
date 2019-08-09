const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    hot: true,
    port: 9000,
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  }
};
