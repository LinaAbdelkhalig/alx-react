const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Use 'static' instead of 'contentBase'
        },
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: ['image-webpack-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
    ],
    devtool: 'inline-source-map',
};
