import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  publicDir: './static',
  build: {
    outDir: './public',
  },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      Models: path.resolve(__dirname, './src/models/index.tsx'),
      Stores: path.resolve(__dirname, './src/stores/'),
      Api: path.resolve(__dirname, './src/api/'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
