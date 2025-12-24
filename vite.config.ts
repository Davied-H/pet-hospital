import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署时需要设置 base 路径
  // 如果部署到 https://<USERNAME>.github.io/<REPO>/ 需要设置为 '/<REPO>/'
  // 如果部署到 https://<USERNAME>.github.io/ 可以设置为 '/'
  base: '/pet-hospital/',
})
