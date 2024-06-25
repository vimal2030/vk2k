import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/vk2k/",
  resolve: {
    alias: {
      '@assets': './src/assets', 
      '@css': './src/App.css',
    },
  },
});
