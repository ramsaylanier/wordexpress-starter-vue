const path = require('path')
const Config = require('config')
const fs = require('fs')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

fs.writeFileSync(path.resolve(__dirname, '../config/client.json'), JSON.stringify(Config))
const theme = require('../config/client.json').theme

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/core/ssr/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'core': path.resolve(__dirname, '../src/core'),
      '@': path.resolve(__dirname, `../src/themes/${theme}`),
      'assets': path.resolve(__dirname, '../src/assets'),
      'config': path.resolve('config/client.json'),
    }
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'client-bundle.[chunkhash].js'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, `../src/themes/${theme}`),
          path.resolve(__dirname, `../src/core`)
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, `../src/themes/${theme}`),
          path.resolve(__dirname, `../src/core`)
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: {
          loader: 'graphql-tag/loader'
        }
      },
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin("style.css")
  ]
}
