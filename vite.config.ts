import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseApiUrl = 'https://app.uk.megavoice.ai/'

// Log proxy configuration on startup
console.log('\n🔧 Vite Proxy Configuration:');
console.log(`   API target: ${baseApiUrl}\n`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    cors: true,
    proxy: {
      // Proxy API calls to the backend
      '^/(api|mcp|\\.well-known)': {
        target: baseApiUrl,
        secure: false,
        changeOrigin: true,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            console.log(`[Vite Proxy] → ${req.method} ${req.url} → ${baseApiUrl}${req.url}`);
          });
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log(`[Vite Proxy] ← ${req.method} ${req.url} ← ${proxyRes.statusCode}`);
          });
          proxy.on('error', (err, req, res) => {
            console.error(`[Vite Proxy] ✗ Error proxying ${req.url}:`, err.message);
          });
        },
      },
      '^/signalr': {
        target: baseApiUrl,
        ws: true,
        secure: false,
        changeOrigin: true,
      },
    },
  },
})
