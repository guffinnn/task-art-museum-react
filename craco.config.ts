import { CracoConfig } from '@craco/types';
import path from 'path';

import { compilerOptions } from './tsconfig.json';

const aliases = Object.entries(compilerOptions.paths).reduce(
  (acc, [key, value]) => {
    acc[key.replace('/*', '')] = path.resolve(
      __dirname,
      'src',
      value[0].replace('/*', ''),
    );
    return acc;
  },
  {} as Record<string, string>,
);

const config: CracoConfig = {
  webpack: {
    alias: aliases,
  },
};

export default config;
