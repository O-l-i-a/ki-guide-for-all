import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/ki-guide-for-all/",
  plugins: [react()],
})

