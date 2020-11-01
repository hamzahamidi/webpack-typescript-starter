const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const resolveApp = relativePath => path.resolve(__dirname, relativePath);

const getPublicPath = (env) => {
  const homePage = require(resolveApp('package.json')).homepage;

  if (env.NODE_ENV === 'development') {
    return '';
  }
  else if (env.PUBLIC_URL) {
    return env.PUBLIC_URL;
  }
  else if (homePage) {
    return homePage;
  }
  return '/';
}

const getEnvVariables = (env) => ({ PUBLIC_URL: getPublicPath(env), VERSION: require(resolveApp('package.json')).version });



module.exports = function (env) {
  const isEnvProduction = env.NODE_ENV === 'production';
  console.log('env.NODE_ENV', env.NODE_ENV);

  const commonConfig = {
    entry: './src/index.ts',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || 'development'),
        'process.env.PUBLIC_URL': JSON.stringify(env.PUBLIC_URL || null),
      }),
      new CleanWebpackPlugin(),
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveApp('public/index.html'),
        ...getEnvVariables(env)
      }),
      new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    ],

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'ts-loader',
          include: [resolveApp('src')],
          exclude: [/node_modules/]
        },
        {
          test: /.(scss|css)$/,

          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",

              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",

              options: {
                sourceMap: true
              }
            }]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },

    optimization: {
      minimizer: [new TerserPlugin()],

      splitChunks: {
        cacheGroups: {
          vendors: {
            priority: -10,
            test: /[\\/]node_modules[\\/]/
          }
        },

        chunks: 'async',
        minChunks: 1,
        minSize: 30000,
        name: false
      }
    }
  }

  if (isEnvProduction) return merge(commonConfig, prodConfig);
  else return merge(commonConfig, devConfig);

}