/ vite.config.js content:
import { defineConfig } from 'vite';

export default defineConfig({
  // 1. Force environment variable injection (fixes API key missing error)
  define: {
    // This securely injects the value of the RENDER environment variable '__API_KEY__'
    // into the front-end code as 'import.meta.env.VITE_API_KEY'.
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.__API_KEY__),
  },
  
  // 2. Output and Build Configuration (fixes Publish Directory error)
  build: {
    outDir: 'dist', // Ensures output goes to the 'dist' folder
    // This is necessary because it tells Vite to process your single HTML file
    rollupOptions: {
      input: 'index.html',
    },
  },
  
  // 3. Prevent automatic HTML processing (fixes garbled characters)
  appType: 'custom', 
});