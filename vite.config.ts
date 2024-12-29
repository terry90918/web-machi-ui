import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  build: {
    lib: {
      entry: {
        'machi-components': resolve(__dirname, 'src/components/index.ts'),
        'machi-plugin': resolve(__dirname, 'src/plugin/index.ts'),
      },
      name: 'MachiCatUI',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
      outDir: 'dist',
      staticImport: true,
      insertTypesEntry: true, // 自動生成類型聲明入口
      copyDtsFiles: true, // 複製 .d.ts 文件
      compilerOptions: {
        removeComments: false, // 保留註釋
      },
    }),
    vue(),
    vueJsx(),
    process.env.NODE_ENV === 'development' ? vueDevTools() : null,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
