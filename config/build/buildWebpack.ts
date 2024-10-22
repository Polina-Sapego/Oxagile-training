import * as path from 'path';
import { Configuration } from 'webpack';

export const config: Configuration = {
  entry: path.join(__dirname, '../../src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
  },
};
