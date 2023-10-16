module.export = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', 'react-refresh'],
  rule: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-minused-promises': [2, { checksVoidReturn: { attributes: false } }],
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
