var webpack = require("webpack");
module.exports = {
  // webpack folder’s entry js — excluded from jekll’s build process.
  entry: './app/entry.js',
  output: {
    path: __dirname + "/static/",
    filename: 'bundle.js',
    publicPath: "static"
  },
  module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader', // ‘babel-loader’ is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }
    ]
  }
};
