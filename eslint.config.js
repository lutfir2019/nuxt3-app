import antfu from '@antfu/eslint-config';

export default antfu(
  {
    typescript: true,
    vue: true,
    // Adjust the following options as needed
    ignores: ['**/dist/**', '**/node_modules/**'],
  },
  {
    rules: {
      'node/prefer-global/process': 'off', // Turn off the rule causing the error
      'quotes': 'off', // Turn off the rule for enforcing quote style
      'style/semi': ['error', 'always'], // Enforce semicolons
      // Add more rules here and set them to 'error' to fail the build
      'no-console': 'error', // Example: fail build if console.log is found
      'vue/no-unused-vars': 'error',
      'style/quotes': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'style/arrow-parens': 'off',
      'style/comma-dangle': 'off',
      'style/member-delimiter-style': 'off',
    },
  },
);
