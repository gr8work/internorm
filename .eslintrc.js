const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    React: 'readable',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR],
    'import/no-named-as-default': OFF,
    'import/prefer-default-export': OFF,
    'import/extensions': OFF,
    'import/no-unresolved': ERROR,
    'import/no-extraneous-dependencies': OFF,
    'import/first': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-duplicates': ERROR,
    'import/order': OFF,
    'react/no-array-index-key': OFF,
    'react/prop-types': OFF,
    'react/no-unused-prop-types': OFF,
    'react/require-default-props': OFF,
    'react/function-component-definition': [
      ERROR,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'consistent-return': [ERROR, { treatUndefinedAsUnspecified: false }],
    'no-restricted-exports': [ERROR, { restrictedNamedExports: [] }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src'],
      },
      alias: [
        ['assets', './src/assets'],
        ['atoms', './src/components/atoms'],
        ['molecules', './src/components/molecules'],
        ['organisms', './src/components/organisms'],
        ['data', './src/data'],
        ['hooks', './src/hooks'],
        ['pages', './src/pages'],
        ['templates', './src/templates'],
        ['builders', './src/builders'],
        ['theme', './src/theme'],
        ['types', './src/types'],
        ['src', 'src'],
        ['utils', 'src/utils'],
      ],
    },
  },
};
