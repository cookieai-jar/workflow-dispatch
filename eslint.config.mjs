import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-trailing-spaces': 'error',
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'next|res|req' }],
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'preserve-caught-error': 'off',
    },
  },
  {
    ignores: ['dist/', 'node_modules/'],
  },
)
