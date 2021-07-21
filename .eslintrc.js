module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['prettier'],
  env: {
    // 'react-native/react-native': true,
    node: true,
    jest: true,
  },
  rules: {
    'no-unused-vars': 'off',
    // TODO check cycle
    // TODO check import order
    // TODO check import groups
    // TODO check types -> interfaces
    // TODO no default exports
    // TODO import type
    // TODO no shadow variables
    // TODO no unused variables, imports
    // TODO no unsafe return
    // TODO no console
    // TODO no debugger
    // TODO no unsafe calls
    // TODO no implicit any catch
    // TODO no unncecessary type assertions
    // TODO prefer constant
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
