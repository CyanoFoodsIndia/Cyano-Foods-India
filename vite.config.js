import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname),
      '@/components': resolve(__dirname, 'Components'),
      '@/pages': resolve(__dirname, 'Pages'),
      '@/entities': resolve(__dirname, 'Entities'),
      '@/utils': resolve(__dirname, 'utils'),
      // components: resolve(__dirname, 'Components'),
      pages: resolve(__dirname, 'Pages'),
      entities: resolve(__dirname, 'Entities'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});


