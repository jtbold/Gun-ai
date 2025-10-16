import { defineConfig } from 'vite';

export default defineConfig({
  // 1. Secure API Key Injection (Reads __API_KEY__ set in Render and exposes it)
  define: {
    // This tells Vite to securely read the key from the environment variable 
    // you set in the Render dashboard and make it available to your JS.
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.__API_KEY__),
  },
  
  // 2. Output and Build Configuration
  build: {
    // This MUST match the Publish Directory setting in Render
    outDir: 'dist', 
    rollupOptions: {
      input: 'index.html', 
    },
  },
  
  // 3. Display Fix
  // 'custom' prevents Vite from breaking the HTML structure, ensuring the 
  // <meta charset="UTF-8"> tag loads immediately to fix the garbled characters.
  appType: 'custom', 
});