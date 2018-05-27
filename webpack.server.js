const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we are building a bundle for node.js,
  // rather than for the browser
  target: 'node',

  // Tell webpack the root file of our server application
  entry: './src/index.js',

  // Tell webapck where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // Tell weback not to bundle any external libraries to the resource bundle, if that module
  // exists inside the node_modules folder.
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
