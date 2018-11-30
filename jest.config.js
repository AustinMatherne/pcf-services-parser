const { pathsToModuleNameMapper } = require("ts-jest/utils");
const tsPaths = require("./tsconfig").compilerOptions.paths || {};

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  restoreMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(tsPaths, { prefix: "<rootDir>/" }),
  testResultsProcessor: "jest-sonar-reporter"
};
