module.exports = {
  env: { 
    browser: true, 
    es2020: true,
    "amd": true,
    "node": true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
  // setting up globals on 5/23/2023
  globals : {
    "require": "readonly",
  }
}
