import { type Config } from "prettier"

const config: Config = {
  semi: false,

  overrides: [
    {
      files: ["*.yaml"],
      options: {
        singleQuote: true,
      },
    },
  ],
}

export default config
