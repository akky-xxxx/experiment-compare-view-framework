const DIRECTORIES = ["*", "root", "server"]

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [0, "always"],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", DIRECTORIES],
    "type-enum": [
      2,
      "always",
      ["chore", "feat", "fix", "docs", "style", "refactor", "test", "revert"],
    ],
  },
}
