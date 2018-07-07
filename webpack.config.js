const path = require('path');

module.exports = {
  entry: {
    app: './src/main.js',
    print: './src/static/js/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      // ./static/css/style.css
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ],
      include: [
        path.resolve(__dirname, 'src/static/css')
      ]
    }]
  }
};