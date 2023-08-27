module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'object-curly-spacing': 'off',
    quotes: 'off',
    'quote-props': 'off',
    'import/no-unresolved': 'off',
    'require-jsdoc': 'off',
    'arrow-parens': 'off',
    'max-len': ['error', { code: 120 }],
    indent: 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'space-before-function-paren': 'off',
  },
};
