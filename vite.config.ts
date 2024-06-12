import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [react(), dts(), svgr()],
});
