import typescript from '@rollup/plugin-typescript'

export default {
    input: './index.ts', // 入口文件
    output: {
        file: 'dist/bundle.js', // 输出文件
        format: 'cjs' // 输出格式：CommonJS
    },
    plugins: [typescript()]
}
