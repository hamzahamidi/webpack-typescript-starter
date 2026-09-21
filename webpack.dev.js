module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 4200,
    open: true,
    static: false,
    historyApiFallback: true
  },
  optimization: {
    minimize: false
  }
};
