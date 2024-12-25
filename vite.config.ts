import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // 将所有依赖拆分到 vendor.js
          }
        },
      },
    },
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        (name) => {
          if (name.startsWith('El')) {
            return { name, from: 'element-plus' };
          }
        },
      ],
    }),
  ],
  server: {
    port: 3000,  // 将端口设置为 3000，或者任何你想要的端口号
  }
})
