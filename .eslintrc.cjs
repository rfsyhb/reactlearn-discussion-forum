module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'cypress/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'cypress'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'no-underscore-dangle': 'off',
    'no-alert': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
  },
};
