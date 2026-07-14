/** @type {import('stylelint').Config} */
const config = {
  ignoreFiles: ["src/reset.css"],
  extends: ["stylelint-config-standard", "stylelint-config-html/vue", "stylelint-config-css-modules"],
  rules: {
    "selector-class-pattern": "^[a-z]+[a-zA-Z0-9]*$",
  },
}
export default config
