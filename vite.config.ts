import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
  base:'/StudyVerse/',
  plugins:[react(),VitePWA({
    registerType:'autoUpdate',
    manifest:{name:'StudyVerse',short_name:'StudyVerse',description:'Your personal academic operating system.',theme_color:'#f7f9fc',background_color:'#f7f9fc',display:'standalone',start_url:'/StudyVerse/',icons:[
      {src:'/StudyVerse/icons/icon-192.svg',sizes:'192x192',type:'image/svg+xml'},
      {src:'/StudyVerse/icons/icon-512.svg',sizes:'512x512',type:'image/svg+xml'}]},
    workbox:{navigateFallback:'index.html',globPatterns:['**/*.{js,css,html,svg,woff2}']}
  })]
})