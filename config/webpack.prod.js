'use strict';

const webpack = require('webpack');
const defaults = require('./webpack.default');

process.env.BABEL_ENV = "production";

defaults.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: 'production'
    }
  })
);

module.exports = defaults;
