module.exports = {
  mode: 'development',
  entry: __dirname + '/client',
  output: {
    path: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};
