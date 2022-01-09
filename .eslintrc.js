module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 'off',
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
