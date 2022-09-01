/** @type {import('vite').UserConfig} */

import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

const globalVendorPackages = ['react', 'react-dom', '@tanstack/react-location'];

export default defineConfig((option) => ({
	plugins: [react(), WindiCSS()],
	resolve: {
		alias: {
			'~': resolve(__dirname, './src')
		}
	},
	build: {
		sourcemap: option.mode === 'development',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: globalVendorPackages
				}
			}
		}
	}
}));
