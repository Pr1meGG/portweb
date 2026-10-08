import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dev-server only — does not affect the production build.
  server: {
    port: 3000,
    open: false,
    allowedHosts: ['.trycloudflare.com'],
  },
});
