const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const pagesList = [
  'aboutCrete',
  'contacts',
  'excursion',
  'feedback',
  'index',
  'sale',
  'services',
];

const pages = pagesList.map(pageName => (
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `vendor/html/${pageName}.template.ejs`),
    filename: `${pageName}.html`,
  })
));

module.exports = () => ({
  context: __dirname,
  entry: [
    path.resolve(__dirname, 'vendor/scripts/index.js'),
    path.resolve(__dirname, 'vendor/styles/index.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'js/script.[hash].js',
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  devtool: '#cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          forceEnv: devMode ? 'development' : 'production',
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            // loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    watchContentBase: true,
    port: 9000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.[hash].css',
    }),
  ]
    .concat(pages)
    .concat([
      new WebpackCleanupPlugin({
        exclude: [
          'img/**/*',
          '*.html',
        ],
      }),
    ]),
});
