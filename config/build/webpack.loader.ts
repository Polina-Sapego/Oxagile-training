import MiniCssExtractPlugin = require('mini-css-extract-plugin');
import { RuleSetRule } from 'webpack';

export const rules: RuleSetRule[] = [
  {
    test: /\.(png|jpg|jpeg|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',

      },
    ],
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
      },
    },
  },
  {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {

  },
];
