import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    const port = 5173;
    const origin = `${process.env.VITE_APP_URL}:${port}`;
    return defineConfig({
        server: {
            port: port,
            strictPort: true,
        },
        origin: origin,
        plugins: [
            laravel({
                input: 'resources/js/app.jsx',
                refresh: true,
            }),
            react(),
        ],
    });
};
