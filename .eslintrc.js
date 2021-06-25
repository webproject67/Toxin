module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:fsd/all'],
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
    'no-undef': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-useless-escape': 'off',
    'no-empty-pattern': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
  },
};
