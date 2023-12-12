import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {createHtmlPlugin} from 'vite-plugin-html';

export default defineConfig({
  publicDir: './static',
  build: {
    outDir: './public'
  },
  plugins: [
    react({
      include: '**/*.{jsx,tsx}'
    }),
    createHtmlPlugin()
  ],
  optimizeDeps: { exclude: ['js-big-decimal'] },
  resolve: {
    alias: {
      Models: path.resolve(__dirname, './src/models/index.tsx'),
      Stores: path.resolve(__dirname, './src/stores/'),
      Api: path.resolve(__dirname, './src/api/'),
      '@': path.resolve(__dirname, './src/'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  }
});
