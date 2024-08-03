import {defineConfig} from 'umi';

import ApplicationTheme from './src/theme';

export default defineConfig({
    npmClient: 'yarn',
    theme: ApplicationTheme,

    plugins: ['umi-plugin-electron-builder'],

    //
    // https://www.npmjs.com/package/umi-plugin-electron-builder
    //
    electronBuilder: {
        //可选参数
        //buildType: 'vite', //webpack或vite，当编译出现问题，可尝试切换为webpack
        //并行构建，默认关闭，如开启出现问题，请关闭此功能
        parallelBuild: false, //并行构建，开启时主进程和渲染进程同时编译
        mainSrc: 'src/main', //默认主进程目录
        preloadSrc: 'src/preload', //默认preload目录，可选，不需要可删除
        outputDir: 'dist_electron', //默认打包目录
        //debugPort: 5858, //主进程调试端口
        //2.1.0新增
        preloadEntry: {
            //默认值 key为preload文件名 值为preload输出文件名
            //输出文件名不能为main.js会和主进程文件名冲突
            //文件名为preload目录下多文件名
            //多级目录时key为xxxx/xxxx.ts
            //使用时输出文件会和主进程在同一目录下 preload: path.join(__dirname, 'preload.js')
            'index.ts': 'preload.js'
        },
        logProcess(log: string, type: "normal" | "error") {
            if (type === 'normal') {
                console.log(log);
            } else if (type === 'error') {
                console.error(log);
            }
        },
        builderOptions: {
            appId: 'com.skitsanos.app.electron',
            productName: 'umiapp',
            copyright: 'Copyright © 2020, Skitsanos',
            mac: {
                category: 'public.app-category.developer-tools'
            }
        }
    },

    title: 'UmiJs Sample app',

    headScripts: [
        {
            content: 'console.log("loaded")'
        }
    ],
    styles: [
        'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap',
        'body {font-weight: 300; font-family: "Work Sans", sans-serif;} a {cursor: pointer;}'
    ],
    scripts: [
        {
            content: 'console.log("loaded in the end")'
        }
    ]
});
