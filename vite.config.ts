import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {

            // 入口文件
            entry: path.resolve(__dirname, 'index.ts'),

            // 库的名称
            formats: ['es']
        },
        rollupOptions: {

            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {

                // 指定输出文件名及扩展名
                entryFileNames: 'index.mjs',

                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    plugins: [vue(), dts()]
})
