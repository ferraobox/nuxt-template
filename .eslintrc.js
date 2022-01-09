module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['jest'],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jest/consistent-test-it': ['error', { fn: 'it' }],
    'no-prototype-builtins': 'warn',
    'no-case-declarations': 'warn',
    'no-useless-escape': 'warn',
    'no-import-assign': 'warn',
    curly: 'error',
    'max-params': 'warn',
    'max-lines': 'warn',
    'no-extra-boolean-cast': 'warn',
  },
  globals: {
    $nuxt: true,
  },
}
