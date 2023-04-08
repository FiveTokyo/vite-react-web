import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/

const resolve = pathUrl => {
  return path.join(__dirname, pathUrl)
}

export default defineConfig((({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('command:', command)
  const result = {

    // plugins
    plugins: [
      react(),
      // vitePluginImp({
      //   libList: [
      //     {
      //       libName: "antd",
      //       style: (name) => `antd/es/${name}/style`,
      //     },
      //   ],
      // }),
      // createHtmlPlugin({
      //   inject: {
      //     data: {
      //       title: viteEnv.VITE_GLOB_APP_TITLE,
      //     },
      //   },
      // }),
      // viteEnv.VITE_BUILD_GZIP &&
      //   viteCompression({
      //     verbose: true,
      //     disable: false,
      //     threshold: 10240,
      //     algorithm: "gzip",
      //     ext: ".gz",
      //   }),
    ],
    esbuild: {
      pure: [],
    },
    build: {
      outDir: "dist",
      minify: "esbuild",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    }
  }
  if (command === 'serve') {
    return {
      // dev 独有配置
      ...result,
      build: { sourcemap: true },
      resolve: {
        alias: {
          '@': resolve('.'),
          '@src': resolve('src'),
          "@assets": resolve('src/assets'),
          "@common": resolve('src/common'),
          "@components": resolve('src/components'),
          "@pages": resolve('src/pages'),
          "@styles": resolve('src/styles'),
          "@api": resolve('src/api'),
          // store: resolve('src/store'),
          "@utils": resolve('src/utils')
        },
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            // additionalData: `@import "@/styles/var.less";`,
            // modifyVars: {
            //   "@primary-color": "#4377FE", //设置antd主题色
            // },
          },
        },
      },
      server: {
        host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        // port: viteEnv.VITE_PORT,
        // open: viteEnv.VITE_OPEN,
        cors: true,
        // 代理跨域地址配置（官网几种写法）
        proxy: {
          // 字符串简写写法
          '/foo': 'http://localhost:4567',
          // 选项写法
          '/api': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          },
          // 正则表达式写法
          '^/fallback/.*': {
            target: 'http://jsonplaceholder.typicode.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/fallback/, '')
          },
          // Proxying websockets or socket.io
          '/socket.io': {
            target: 'ws://localhost:3000',
            ws: true
          }
        }
      },
    }
  } else {
    // command === 'build'
    return {
      ...result,
      build: { sourcemap: false },
      // ...result
      // build 独有配置
    }
  }
}))


