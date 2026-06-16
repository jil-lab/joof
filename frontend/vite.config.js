import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
// @ts-check

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Force a single React instance — prevents "invalid hook call" from duplicate React copies in monorepo
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
  build: {
    // Optimize bundle size
    target: 'esnext',
    minify: 'esbuild', // Using esbuild for faster builds
    // Note: esbuild doesn't support drop_console. To remove console.log, install terser:
    // npm install -D terser, then set minify: 'terser' with terserOptions
    // Manual chunks for better code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer-motion': ['framer-motion'],
          'form-libs': ['react-hook-form', 'zod', '@hookform/resolvers'],
          'data-libs': ['@tanstack/react-query', 'axios'],
          'ui-libs': ['swiper', 'react-leaflet', 'leaflet'],
        },
      },
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Generate sourcemaps for production debugging (can disable if not needed)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@tanstack/react-query',
    ],
  },
  server: {
    hmr: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/api/**', 'src/hooks/**'],
    },
  },
})
