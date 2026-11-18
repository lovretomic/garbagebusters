import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr({include: '**/*.svg?react'})],

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
	  "/reports":{
		target: 'http://localhost:3001',
	  }
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/global.scss" as *;\n`,
      },
    },
  },
});
