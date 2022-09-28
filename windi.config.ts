import { defineConfig } from "windicss/helpers";

export default defineConfig({
	darkMode: "class",
	preflight: true,
	shortcuts: {
		btn: {
			color: "white",
			background: "#1869B3",
			"@apply": "block w-full rounded-md py-4 font-bold mt-4",
			"&:disabled": {
				"@apply": "opacity-40 cursor-not-allowed"
			}
		}
	},
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('/assets/images/banner_bg.png')",
				blue: "url('/assets/images/blue_bg.png')"
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"]
			}
		}
	},
	plugins: []
});
