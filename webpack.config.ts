import { Configuration } from 'webpack';
import { rules } from './config/build/webpack.loader';
import { plugins } from './config/build/webpack.plugins';
import { devServer } from './config/build/webpack.devServer';
import { config as buildWebpack } from './config/build/buildWebpack';
import { resolve } from './config/build/webpack.resolvers';

const config: Configuration = {
  ...buildWebpack,
  module: {
    rules,
  },
  plugins,
  devServer,
  resolve,
};

export default config;
