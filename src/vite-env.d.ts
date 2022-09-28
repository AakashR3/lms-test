/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
	readonly VITE_G_CLIENT_ID: string;
	readonly VITE_L_CLIENT_ID: string;
	readonly VITE_FB_APP_ID: string;
	readonly VITE_L_STATE_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
