import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.__API_KEY__),
  },
  
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', 
    },
  },
  
  appType: 'custom', 
});