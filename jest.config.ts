import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
};

export default config;