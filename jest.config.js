module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/bin/cli.ts',
  ],
  coverageReporters: ['text', 'lcov', 'json', 'html'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^chalk$': '<rootDir>/src/__tests__/__mocks__/chalk.js',
    '^execa$': '<rootDir>/src/__tests__/__mocks__/execa.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(chalk|inquirer|execa|cosmiconfig)/)',
  ],
};
