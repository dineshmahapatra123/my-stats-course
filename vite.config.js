import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // If you are deploying to https://<USERNAME>.github.io/<REPO>/
  // Set base to '/<REPO>/'
  // Example: base: '/stats-learning-app/',
  base: '/my-stats-course/',
})
