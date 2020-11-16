var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200,
    open: true
  },
  optimization: {
    minimize: false
  }
};
