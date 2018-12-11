var webpack = require('webpack');
var path = require('path');
var APP_DIR = path.resolve(__dirname, './app');
var env = process.env.NODE_ENV.trim();

var config = {
  entry: {
    app: APP_DIR + '/main.js',
  },
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 9997
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react', "stage-2"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(svg|jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  }
};

module.exports = config;