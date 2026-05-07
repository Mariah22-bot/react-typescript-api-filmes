import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/react-typescript-api-filmes/',
  plugins: [
    react() as PluginOption,
    tailwindcss() as PluginOption
  ],
})