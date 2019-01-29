const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = () => ({
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { sourceMap: true } },
        { loader: 'sass-loader', options: { sourceMap: true } }
      ]
    }, {
      test: /\.(png|jpe?g|gif)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10 * 1024,
          name: 'images/[name].[ext]'
        }
      }, {
        loader: 'image-webpack-loader'
      }]
    }, {
      test: /\.svg$/,
      use: [{
        loader: 'svg-url-loader',
        options: {
          limit: 1 * 1024,
          noquotes: true,
          name: 'images/[name].[ext]'
        }
      }, {
        loader: 'image-webpack-loader'
      }]
    }]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        sourceMap: true,
        exclude: /node_modules/
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash].css',
      chunkFilename: 'style/[id].[hash].css'
    })
  ],
  devtool: 'source-map'
})
