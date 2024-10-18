import * as path from 'path';
import MiniCssExtractPlugin = require('mini-css-extract-plugin');
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin = require('html-webpack-plugin');

const isAnalyzer = process.env.ANALYZER === 'true';

export const plugins: Configuration['plugins'] = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '../../public', 'index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
  ...(isAnalyzer ? [new BundleAnalyzerPlugin()] : []),
];
