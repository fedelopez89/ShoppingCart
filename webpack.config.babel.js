export const config = {
  mode: 'development',
/*   entry: '__dirname' + '/client', */
  entry: './client',
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
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },      
    ]
  },
  resolve: {
      extensions: ['.js', '.jsx']
  }
};
