import { setup } from "@storybook/vue3-vite"
import { createRouter, createWebHistory } from "vue-router"

import "../src/reset.css"
import "../src/style.css"

import type { Preview } from "@storybook/vue3-vite"

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/:pathMatch(.*)*", component: { template: "<div />" } }],
})

setup((app) => {
  app.use(router)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
