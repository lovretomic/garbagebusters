import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/*.js",
      "docs/**",
    ],
  },

  ...tseslint.configs.recommended,

  eslintConfigPrettier,
];
