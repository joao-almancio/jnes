import path from 'path'
import { defineConfig } from 'vite'
import rollupOptions from './rollup.config'

export default defineConfig((args) => {
  return {
    server: {
      open: '/index.html',
    },
    build: {
      rollupOptions,
    },
    test: {
      globals: true,
    },
    resolve: {
      alias: {
        '@models': path.resolve(__dirname, '/src/models'),
        '@emulator': path.resolve(__dirname, '/src/emulator'),
      },
    },
  }
})
