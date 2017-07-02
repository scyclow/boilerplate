'use strict';

const webpack = require('webpack');
const defaults = require('./webpack.default');

process.env.BABEL_ENV = "development";

defaults.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: 'development'
    }
  })
);

defaults.devtool = 'cheap-module-source-map';

module.exports = defaults;
