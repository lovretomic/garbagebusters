import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**', '**/*.js'],
  },

  ...tseslint.configs.recommended,

  eslintConfigPrettier,

  {
    rules: {
      semi: ['error', 'always'],
    },
  },
];
