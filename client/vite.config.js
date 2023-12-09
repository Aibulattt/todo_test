import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  publicDir: './static',
  build: {
    outDir: './public'
    // rollupOptions: {
    //   output: {
    //     manualChunks: propsPath => propsPath.split('/').reverse()[propsPath.split('/').reverse().indexOf('node_modules') - 1]
    //   }
    // }
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
      Config: path.resolve(__dirname, './src/configs/production.ts'),
      Models: path.resolve(__dirname, './src/models/index.ts'),
      Requests: path.resolve(__dirname, './src/requests/index.ts'),
      Stores: path.resolve(__dirname, './src/stores'),
      Ui: path.resolve(__dirname, './src/ui'),
      Utils: path.resolve(__dirname, './src/utils')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: true
  }
});
