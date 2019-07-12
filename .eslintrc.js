module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',

    'no-console': ['error', { allow: ['tron'] }],
    'no-param-reassign': 'off',

    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': [2, { ignore: ['navigation', 'history', 'dispatch'] }],
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
