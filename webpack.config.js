let path = require('path');
let webpack = require('webpack');
let assign = require('lodash').assign;
let map = require('lodash').map;

const name = 'ScrollToTop';

const base = {
  entry: {
    [name]: './index.js'
  },
  externals: {
    'jquery': 'jQuery'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { 
        test: require.resolve('jquery'), 
        loader: 'expose?$!expose?jQuery' 
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0'],
        },
      }
    ],
  },
};

let configs = {
  DEV: {
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'jquery.[name].js',
      publicPath: '/',
      libraryTarget: 'umd',
      library: name
    }
  },
  PROD: {
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'jquery.[name].min.js',
      publicPath: '/',
      libraryTarget: 'umd',
      library: name
    }
  }
};

module.exports = map(Object.keys(configs), key => {
  let config = assign(base, configs[key]);
  if (key === 'PROD') {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin( {
        compress: {
          warnings: false
        }
      } )
    )
  }
  return config;
});
