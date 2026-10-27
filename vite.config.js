import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Custom Vite middleware to serve /api/contact during local development
function contactApiPlugin() {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          try {
            // Load environment variables for the server middleware
            const env = loadEnv('development', process.cwd(), '');
            Object.assign(process.env, env);

            let bodyStr = '';
            req.on('data', (chunk) => {
              bodyStr += chunk;
            });
            req.on('end', async () => {
              try {
                req.body = bodyStr ? JSON.parse(bodyStr) : {};
              } catch {
                req.body = {};
              }

              // Mock Express-like res helper functions for the serverless handler
              const jsonRes = {
                status(code) {
                  res.statusCode = code;
                  return this;
                },
                json(data) {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify(data));
                  return this;
                },
              };

              const { default: handler } = await server.ssrLoadModule('/api/contact.js');
              await handler(req, jsonRes);
            });
          } catch (err) {
            console.error('API plugin error:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: err.message }));
          }
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
})
