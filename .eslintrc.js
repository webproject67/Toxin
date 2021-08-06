module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
  },
  extends: [
    'airbnb-base',
    'plugin:fsd/all',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  plugins: ['fsd'],
  rules: {
    'no-var': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      { js: 'never', ts: 'never' },
    ],
    'func-names': ['error', 'never'],
    'no-unused-vars': 'off',
  },
};
