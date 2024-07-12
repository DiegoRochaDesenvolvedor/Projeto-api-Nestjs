module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "prettier",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    "linebreak-style": 0,
    'indent': ['error', 2],
    "prettier/prettier": ["error", { "useTabs": false, "tabWidth": 2 }],
    'semi': 'off', // Desativa a regra de ponto e vírgula
    'func-style': ['error', 'expression'],
    'quotes': ['error', 'single'],
    'space-before-blocks': 'off', // Desativa a regra de espaço antes dos blocos
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
  },
};
