import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/app/**/*.ts'],
};

export default config;

// /** @type {import('jest').Config} */
// module.exports = {
//     roots: ["<rootDir>/src/"],
//     transform: {
//         '^.+\\.tsx?$': 'ts-jest'
//     },
//     testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
//     moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"],
//     verbose: true,
//     collectCoverage: true,
//     collectCoverageFrom: ['<rootDir>/src/app/**/*.ts']
// }
