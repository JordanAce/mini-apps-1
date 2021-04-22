const path = require('path');

module.exports = {
  entry: './src/app.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx?/,
      exclude: /node_modules/
    }]
  },

  devServer : {
    contentBase: path.join(__dirname, 'public')
  }

}