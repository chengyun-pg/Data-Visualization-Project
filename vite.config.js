import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode, command }) => {
  const runEnv = command === 'build' ? 'production' : 'dev'
  process.env = {
    // eslint-disable-next-line no-undef
    ...process.env,
    // eslint-disable-next-line no-undef
    ...loadEnv(mode, process.cwd()),
    // eslint-disable-next-line no-undef
    ...loadEnv(`${mode}.${runEnv}`, process.cwd())
  }
  return defineConfig({
    base: process.env.VITE_APP_BASE || '',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@zt': fileURLToPath(new URL('./src/views/lianxinBorad', import.meta.url))
      }
    },
    server: {
      proxy: {
        '^/pip-board/.*': {
          target: 'https://pip.shangjin618.com',
          changeOrigin: true
        },
        '^/lianxin-wugan': {
          // target: 'http://10.1.110.119:8114', //测试环境
          target: 'https://pip-test.shangjin618.com', //测试环境
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/lianxin-wugan/, '/lianxin-sas')
        },
        '^/lianxin-merchant': {
          target: 'https://pip.shangjin618.com/', //测试环境
          changeOrigin: true
        },
        '^/api': {
          target: 'http://pip.shangjin618.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
