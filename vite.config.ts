import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ngrok tunnel domains (leading dot = any subdomain).
const tunnelHosts = ['.ngrok-free.app', '.ngrok-free.dev', '.ngrok.app', '.ngrok.dev', '.ngrok.io'];

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: tunnelHosts,
  },
  preview: {
    host: true,
    allowedHosts: tunnelHosts,
  },
});
