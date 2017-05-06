const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new PrepackWebpackPlugin
  ]
}
