const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/app.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'source-map-loader'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.png$/,
                include: [
                    path.resolve(__dirname, 'asset')
                ],
                loader: 'file-loader?name=[name].[ext]&publicPath=asset' +
                    '&outputPath=asset'
            }
        ]
    },
    devtool: '#source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Card Battle'
        })
    ]
}