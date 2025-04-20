import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node', // Dependiendo de tu entorno (node o jsdom)
  transform: {
    '^.+\\.ts$': 'ts-jest', // Indica a Jest que debe usar ts-jest para archivos .ts
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};

export default config;
