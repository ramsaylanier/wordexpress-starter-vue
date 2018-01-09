const path = require('path')
// const projectRoot = path.resolve(__dirname, '../')
const Config = require('config')
const fs = require('fs')
const vueConfig = require('./vue-loader.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

fs.writeFileSync(path.resolve(__dirname, '../config/client.json'), JSON.stringify(Config))
const theme = require('../config/client.json').theme

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/core/ssr/client-entry.js',
    vendor: ['vue', 'vue-router', 'vuex', 'vuex-router-sync', 'axios']
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'core': path.resolve(__dirname, '../src/core'),
      '@': path.resolve('src/themes/default'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'config': path.resolve('config/client.json')
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
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          },
          extractCSS: true,
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
    new ExtractTextPlugin("style.css")
  ]
}
