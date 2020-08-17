module.exports = {
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  preset: 'ts-jest',
  rootDir: __dirname,
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/.eslintrc.js'
  ],
  testEnvironmentOptions: { resources: 'usable' }
};
