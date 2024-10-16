const path = require('path');
const { rules } = require('./webpack.loader');
const { plugins } = require('./webpack.plugins');
const { devServer } = require('./webpack.devServer');

module.exports = {
    entry: path.join(__dirname, "../../src", "index.js"),
    output: {
        path:path.resolve(__dirname, "../../dist"),
    },
};