import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/jest-css-modules.ts',
    '\\.svg$': '<rootDir>/jest-svg-transform.ts',
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.svg$': '<rootDir>/jest-svg-transform.ts',
  },
};

export default config;
