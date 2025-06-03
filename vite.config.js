import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // Replace with your actual repo name
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  },
});