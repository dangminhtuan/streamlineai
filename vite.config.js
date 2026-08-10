import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    port: 5120,
    strictPort: true,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dict: resolve(__dirname, 'dict.html'),
        popup: resolve(__dirname, 'popup.html'),
        vault: resolve(__dirname, 'vault.html'),
        read: resolve(__dirname, 'read.html'),
        streamline: resolve(__dirname, 'streamline.html'),
        content: resolve(__dirname, 'content.js')
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
