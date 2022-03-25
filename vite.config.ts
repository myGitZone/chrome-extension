import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import createImportPlugin from 'vite-plugin-import';
import path from 'path';

const { resolve } = path;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        createImportPlugin({
            onlyBuild: false,
            babelImportPluginOptions: [
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: 'css',
                },
            ],
        })
    ],
    build: {
        rollupOptions: {
            input: {
                /**
                 * 点击插件图标出现的弹窗
                 * */
                popup: resolve(__dirname, 'pages/popup/index.html'),
                /**
                 * chrome devtool pane 页面
                 * */
                devtoolPage: resolve(__dirname, 'pages/devtoolPage/index.html'),
                /**
                 * 插件的核心 JS，一直活跃在后台，来监听所有请求
                 * */
                background: resolve(__dirname, 'pages/background/main.tsx'),
                /**
                 * 加载 chrome devtool pane 的入口
                 * */
                devtool: resolve(__dirname, 'pages/devtool/index.html'),
                /**
                 * 插件设置页面
                 * */
                options: resolve(__dirname, 'pages/options/index.html')
                // /**
                //  * 与页面同级，并在某个时机执行，可以拿到页面的 document
                //  * */
                // content: resolve(__dirname, 'content.ts'),
            },
            output: {
                entryFileNames: '[name].js'
            }
        }
    }
});
