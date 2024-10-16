const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isAnalyzer = process.env.ANALYZER === 'true';

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../../public", "index.html"),
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        ...(isAnalyzer ? [new BundleAnalyzerPlugin()] : []),
    ],
};

