import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
    vue({
      template:{
        compilerOptions:{
          isCustomElement:(tag)=>tag==="capacitor-google-map"
        }
      }
    }),
    legacy()
  ],
  optimizeDeps: {
    include: ['vue', 'capacitor-google-map']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
