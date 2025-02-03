import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        home: 'home.html',
        girls: 'girls.html',
        boys: 'boys.html',
        unisex: 'unisex.html',
        international: 'international.html',
        dolly: 'dolly.html',
      },
    },
  },
});