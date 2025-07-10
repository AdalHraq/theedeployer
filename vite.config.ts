import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: "/theedeployer/", // ← this must match GitHub repo name
  plugins: [react()],
});
