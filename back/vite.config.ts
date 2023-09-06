import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // Caminho dos testes
    // Ambiente criado
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
  },
})
