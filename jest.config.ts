import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/tests/?(*.)+(spec|test).[tj]s?(x)'],
    verbose: true,
    noStackTrace: true,
    setupFilesAfterEnv: ['<rootDir>/src/utils/tests/jest.setup.ts']
  };
};