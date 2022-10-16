export const endPoints = {
	baseUrl: import.meta.env.VITE_API_URL,
	auth: {
		login: "Users/UserAuthentication",
		forgotPassword: "Users/ForgotPassword",
		sendOtp: "Users/SendOTP",
		verifyOtp: "Users/VerifyOTP",
		VerifyEmailLink: "Users/VerifyEmailLink",
		ssoRequest: "SSO/SSORequest",
		socialLogin: "Users/SocialValidation",
		linkedInLogin: "Users/LinkedinValidation",
		logout: "Users/UserLogout"
	},
	account: {
		create: "Users/UserRegistration",
		resetPassword: "Users/UpdatePassword"
	},
	dashboard: {
		categoryByUserID: "Dashboard/CategoryByUserID/:userId"
	}
};

export const LoginType = {
	basic: "BASIC",
	social: "SOCIAL",
	sso: "SSO"
};
