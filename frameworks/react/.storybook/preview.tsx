import "../src/app/reset.css"
import "../src/app/globals.css"

import type { Preview } from "@storybook/nextjs-vite"

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
