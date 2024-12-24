import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@routes', replacement: resolve(__dirname, './src/routes') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
    ],
  },
  plugins: [react(), tsConfigPaths()],
});
