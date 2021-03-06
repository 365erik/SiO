const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
		entry: [
				path.resolve('src', 'js', 'index.js'),
				path.resolve('src', 'styles', 'index.css'),
		],
		output: {
				path: path.resolve('static', 'assets'),
				filename: 'main.js',
		},
		module: {
				rules: [
						{
								test: /\.js$/,
								exclude: /node_modules/,
								use: ['babel-loader'],
						},
						{
								test: /\.css$/,
								use: [
										MiniCssExtractPlugin.loader,
										'css-loader',
										'postcss-loader',
								],
						},

				]
		},
		plugins: [new MiniCssExtractPlugin()],
};
