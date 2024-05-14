import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {

            // 入口文件
            entry: path.resolve(__dirname, 'index.ts'),

            // 库的名称
            name: 'MyLibrary',

            // 文件名格式
            fileName: (format) => `my-library.${format}.js`
        },
        rollupOptions: {

            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {

                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
