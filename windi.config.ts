import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	preflight: true,
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: []
});
