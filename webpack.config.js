// Path is in Node for free and will make simple resolving of directories no
// matter which part of your file system your library lives in
const path = require('path');

const parentDir = path.join(__dirname, '../');

// Webpack is just a bunch of keys on module.exports!
module.exports = {
	// This is where our app starts. This is why we have done all this importing
	// and exporting, to get to here
	entry: './src/index.js',
	// module (I know it's a bit weird to have module.exports.module) is where we
	// define all the rules for how webpack will deal with thing.
	module: {
		// rules takes an array, each item containing the respective rules
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { modules: false }],
							['@babel/preset-react', { modules: false }],
						],
					},
				},
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true,
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				// Some image formats so you can import images
				test: /\.(png|gif|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 50000,
					},
				},
			},
		],
	},
	// Here we define explicitly the file types we intend to deal with
	resolve: {
		extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg'],
	},
	// This is where we define how everything gets output.
	// dist is a common output folder, and it should be gitignored. The build can
	// be run after publishing so you don't wind up with it in source control
	output: {
		path: parentDir + '/dist',
		publicPath: '',
		filename: 'csad-ui.js',
		libraryTarget: 'umd',
	},
	devServer: {
		contentBase: parentDir,
		historyApiFallback: true
	}
};
