import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '0dad6a658e38.ngrok-free.app',
      '5c6da4887634.ngrok-free.app',
      "https://7175d28f1dbd.ngrok-free.app",
      "https://688cb6b7dc0bee00088c2389--sparkly-souffle-b49581.netlify.app/"
    ]
  }
})
