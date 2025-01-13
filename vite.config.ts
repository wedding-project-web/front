import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 외부 접속을 허용하려면 이렇게 설정
    port: 5173,        // 포트 번호는 5173으로 유지
  },
})
