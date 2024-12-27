const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Точка входа
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для сборки
        filename: '[name].bundle.js', // Имя итогового файла
    },
    plugins: [
        new CleanWebpackPlugin(), // Очищает папку dist перед каждой сборкой
        new HtmlWebpackPlugin({
            title: 'Webpack Project',
            template: path.resolve(__dirname, 'src/pages/index.html'), // Путь к шаблону для index.html
            filename: 'index.html', // Имя выходного файла в папке dist
        }),
        new HtmlWebpackPlugin({
            title: 'О моих интересах',
            template: path.resolve(__dirname, 'src/pages/about.html'), // Путь к шаблону для about.html
            filename: 'about.html', // Имя выходного файла в папке dist
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        hot: true,
        open: true,
    },
};





