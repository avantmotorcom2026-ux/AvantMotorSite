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
                blog_index: resolve(__dirname, 'blog/index.html'),
                blog_post1: resolve(__dirname, 'blog/post-1.html'),
                blog_post2: resolve(__dirname, 'blog/post-2.html'),
                blog_post3: resolve(__dirname, 'blog/post-3.html'),
                blog_post4: resolve(__dirname, 'blog/post-4.html'),
                blog_post5: resolve(__dirname, 'blog/post-5.html'),
                blog_post6: resolve(__dirname, 'blog/post-6.html'),
                blog_post7: resolve(__dirname, 'blog/post-7.html'),
                blog_post8: resolve(__dirname, 'blog/post-8.html'),
                blog_post9: resolve(__dirname, 'blog/post-9.html'),
                blog_post10: resolve(__dirname, 'blog/post-10.html'),
            },
        },
    },
});
