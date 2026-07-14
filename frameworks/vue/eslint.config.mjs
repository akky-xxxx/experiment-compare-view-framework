import { vueTsConfigs, withVueTs } from "@vue/eslint-config-typescript"
import eslintConfigPrettier from "eslint-config-prettier/flat"
import storybook from "eslint-plugin-storybook"
import pluginVue from "eslint-plugin-vue"
import { globalIgnores } from "eslint/config"

export default withVueTs(
  pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  eslintConfigPrettier,
  globalIgnores(["dist/**", "storybook-static/**"]),
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      // react/angular 版と名称を揃えるため、単語数ではなくディレクトリ階層で一意性を担保している
      "vue/multi-word-component-names": ["error", { ignores: ["Top", "Header", "Calendar"] }],
    },
  },
)
