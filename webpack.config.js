const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');

const prodConfig = require('./webpack.prod');
const devConfig = require('./webpack.dev');

const resolveApp = (relativePath) => path.resolve(__dirname, relativePath);

const getPublicPath = () => {
  const homePage = require(resolveApp('package.json')).homepage;

  if (process.env.NODE_ENV === 'development') {
    return '';
  } else if (process.env.PUBLIC_URL) {
    return process.env.PUBLIC_URL;
  } else if (homePage) {
    return homePage;
  }
  return '/';
};

const getEnvVariables = () => ({
  PUBLIC_URL: getPublicPath(),
  VERSION: require(resolveApp('package.json')).version,
});

module.exports = function () {
  const isEnvProduction = process.env.NODE_ENV === 'production';

  const commonConfig = {
    entry: './src/index.ts',
    output: {
      filename: '[name].bundle.js',
      clean: true,
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'public',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        template: resolveApp('public/index.html'),
        ...getEnvVariables(),
      }),
      new MiniCssExtractPlugin({ filename: '[name].bundle.css' }),
    ],

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'swc-loader',
          include: [resolveApp('src')],
          exclude: [/node_modules/],
        },
        {
          test: /.(scss|css)$/,

          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',

              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',

              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          type: 'asset/resource'
        },
      ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };

  if (isEnvProduction) return merge(commonConfig, prodConfig);
  else return merge(commonConfig, devConfig);
};
