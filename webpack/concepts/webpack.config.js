const path = require('path');
// npm install --save-dev css-loader
// npm install --save-dev ts-loader
// import 'style.css'; u entry file
// import 'typeSciptFile.ts'; u entry file
// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
	entry: {
		pageOne: './src/pageOne/index.js',
		pageTwo: './src/pageTwo/index.js',
		pageThree: './src/pageThree/index.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: 'css-loader'
			},
			{
				test: /\.css$/,
				use: 'ts-loader'
			}
		]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: './src/index.html'})
	],
	output: {
		filename: '[name].js',
		path: __dirname + '/dist'// dist/pageOne/index.js  dist/pageTwo/index.js  dist/pageThree/index.js
	}
};