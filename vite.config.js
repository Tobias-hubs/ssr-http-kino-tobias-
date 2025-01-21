import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Group-d-assignment/ when distributing project / and local server (tidigare '/Group-d-assignment/',)
  build: {
    sourcemap: true,
    rollupOptions: {
        input: {
            main:  'index.html',
            contact: 'contact.html',
            about: 'about.html',
            cafe: 'cafe.html', 
        },
    }
  }
});

