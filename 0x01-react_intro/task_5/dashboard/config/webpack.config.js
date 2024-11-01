const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // <-- Ensure this line is present
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist'),
      clean: true,
    },
  devtool: 'inline-source-map', // Enable inline source maps
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'),
    },
    hot: true, // Enable hot reloading
    port: 3000, // You can choose any port
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use the ES6 preset
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handle CSS files
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Handle image files
        type: 'asset/resource',
        use: {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Use this HTML file as a template
    }),
  ],
};
