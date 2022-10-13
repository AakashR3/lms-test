export const endPoints = {
	baseUrl: import.meta.env.VITE_API_URL,
	auth: {
		login: "User/UserAuthentication",
		forgotPassword: "User/ForgotPassword",
		sendOtp: "User/SendOTP",
		verifyOtp: "User/VerifyOTP",
		verifyEmailLink: "User/VerifyEmailLink",
		ssoRequest: "User/SSORequest",
		socialLogin: "User/SocialValidation",
		linkedInLogin: "User/LinkedinValidation",
		logout: "User/UserLogout"
	},
	account: {
		create: "User/UserRegistration",
		resetPassword: "User/UpdatePassword"
	}
};

export const LoginType = {
	basic: "BASIC",
	social: "SOCIAL",
	sso: "SSO"
};
