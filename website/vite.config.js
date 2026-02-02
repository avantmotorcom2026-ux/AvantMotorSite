import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                evhybrid: resolve(__dirname, 'ev-hybrid.html'),
            },
        },
    },
});
