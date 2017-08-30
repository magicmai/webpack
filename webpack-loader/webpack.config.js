var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',

	output: {
		path: __dirname + '/dist',
		filename: 'js/[name].bundle.js'
	},

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}, {
			test: /.html$/,
			use: [{
				loader: 'html-loader'
			}]
		}, {
			test: /\.tpl$/,
			use: [{
				loader: 'ejs-loader'
			}]
		}, {
			test: /\.css$/,
			use: ['style-loader', {
					loader: 'css-loader',
					options: {
						importLoaders: 1
					}
				},
				'postcss-loader'
			]
		}, {
			test: /\.less$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
		}, {
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
		}, {
			test: /\.(png|jpg|gif|svg)$/i,
			use: [{
				loader: 'file-loader'
			}]
		}]
	},

	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]

}