import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configurations if any
  esbuild: {
    loader: {
      '.js': 'jsx', // Handle .js files as JSX
    },
  },
});
