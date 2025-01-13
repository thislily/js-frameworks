import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier'; // Prettier integration

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Define file patterns
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
    },
    rules: {
      'no-trailing-spaces': 'error', // Disallow trailing spaces
      'eol-last': ['error', 'always'], // Enforce a single newline at the end of files
      'no-multiple-empty-lines': ['error', { max: 1 }], // Limit consecutive empty lines
      indent: ['error', 2], // Enforce 2-space indentation
      'prettier/prettier': 'error', // Apply Prettier formatting rules
    },
  },

  // JavaScript and React configurations
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Add Prettier for code formatting
  {
    plugins: { prettier: pluginPrettier },
  },
];
