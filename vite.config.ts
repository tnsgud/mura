import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  // root: resolve(__dirname, 'src/app'),
  // base: '/',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@app', replacement: resolve(__dirname, './src/app') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
      { find: '@features', replacement: resolve(__dirname, './src/features') },
      { find: '@shared', replacement: resolve(__dirname, './src/shared') },
      { find: '@lib', replacement: resolve(__dirname, './src/shared/lib') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
  plugins: [react(), tsConfigPaths()],
});
