export const endPoints = {
	baseUrl: import.meta.env.VITE_API_URL,
	auth: {
		login: "Users/UserAuthentication",
		forgotPassword: "Users/ForgotPassword",
		sendOtp: "Users/SendOTP",
		verifyOtp: "Users/VerifyOTP",
		ssoRequest: "/SSO/SSORequest"
	},
	account: {
		create: "Users/UserRegistration",
		resetPassword: "Users/UpdatePassword"
	}
};

export const LoginType = {
	basic: "BASIC",
	social: "SOCIAL",
	sso: "SSO"
};
