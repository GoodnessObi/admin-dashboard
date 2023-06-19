import { defineConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
type ViteConfig = UserConfig & { test: InlineConfig };

const config: ViteConfig = {
	plugins: [svgr(), react()],
	// root: 'src',
	test: {
		environment: 'happy-dom',
		setupFiles: ['./setupVitest.js'],
	},
	resolve: {
		alias: [
			{
				// this is required for the SCSS modules
				find: /^~(.*)$/,
				replacement: '$1',
			},
		],
	},
};

export default defineConfig(config);
