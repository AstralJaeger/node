// @ts-check

import eslint from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: ['**/dist/*', '**/tests/*', 'tsconfig.json'],
    },
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            'unused-imports': unusedImports,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',

            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
        },
    },
);