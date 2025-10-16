import { defineConfig } from 'vite';

export default defineConfig({
  // This section securely injects your API key's value into the final JavaScript bundle
  define: {
    // Reads the environment variable '__API_KEY__' set in Render and exposes it as 'VITE_API_KEY'
    'import.meta.env.VITE_API_KEY': JSON.stringify(process.env.__API_KEY__),
  },
  
  // These settings ensure the build outputs to the correct 'dist' folder
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: 'index.html', 
    },
  },
  
  // This is the essential fix for the garbled symbols (character encoding)
  appType: 'custom', 
});