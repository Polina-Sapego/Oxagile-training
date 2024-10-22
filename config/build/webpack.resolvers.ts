import * as path from 'path';
import { Configuration } from 'webpack';

export const resolve: Configuration['resolve'] = {
  // alias: {
  //   '@images': path.resolve(__dirname, 'src/assets/images'),
  // },
  extensions: ['.tsx', '.ts', '.js'],
};
