import * as path from 'path';
import { Configuration } from 'webpack';

export const resolve: Configuration['resolve'] = {
  alias: {
    '@components': path.resolve(__dirname, 'components/'),
  },
  extensions: ['.tsx', '.ts', '.js'],
};
