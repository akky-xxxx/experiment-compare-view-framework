/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ['src/style.css', 'src/reset.css'],
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': '^[a-z]+[a-zA-Z0-9]*$',
  },
};
export default config;
