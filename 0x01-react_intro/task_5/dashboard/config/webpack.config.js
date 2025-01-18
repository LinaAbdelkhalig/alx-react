const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,        // Match both .js and .jsx files
        exclude: /node_modules/,    // Exclude node_modules folder
        use: {
          loader: 'babel-loader',   // Use babel-loader to transpile JS/JSX files
        },
      },
      {
        test: /\.css$/,            // Match CSS files
        use: ['style-loader', 'css-loader'], // Use style-loader and css-loader for CSS files
      },
      {
        test: /\.(jpg|png|gif)$/i, // Match image files
        use: [
          {
            loader: 'file-loader', // Use file-loader for images
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx extensions
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
  },
};
