const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
      // match the output 'publicPath'
      publicPath: '/',
    },
    historyApiFallback: true,
    port: 8080,
    // contentBase: path.resolve(__dirname, './public'),
  },
};
