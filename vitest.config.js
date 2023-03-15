import { defineConfig } from 'vitest/config'

import { join } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src')
    }
  }
})
