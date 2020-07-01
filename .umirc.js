import {defineConfig} from 'umi';

import ApplicationTheme from './src/theme';

export default defineConfig({
    theme: ApplicationTheme,

    electronBuilder: {
        outputDir: 'dist_electron', //默认打包目录
        //externals: ['serialport'],  //不配置的无法使用
        builderOptions: {
            appId: 'com.skitsanos.app.electron',
            productName: 'umiapp',
            copyright: 'Copyright © 2020, Skitsanos',
            mac: {
                category: 'public.app-category.developer-tools'
            }
        }
    },

    hash: false,
    ignoreMomentLocale: true,

    title: 'UmiJs Sample app',
    //publicPath: '/static/',
    analytics: {
        ga: 'UA-62269729-10'
    },

    nodeModulesTransform: {
        type: 'none'
    },

    dynamicImport: {
        loading: '@/components/Loading/index.js'
    },

    metas: [
       /* {
            'http-equiv': 'Content-Security-Policy',
            'content': 'default-src \'none\''
        }*/
    ],

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
