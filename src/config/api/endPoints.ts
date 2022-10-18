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
		create: "Users/UserRegistration",
		resetPassword: "Users/UpdatePassword"
	},
	dashboard: {
		courseList: "Dashboard/NewCoursesList",
		trendingSubscriptionByCode: "Dashboard/TrendingSubscription/:currencyCode",
		catalogList: "Dashboard/CatalogList"
	}
};

export const LoginType = {
	basic: "BASIC",
	social: "SOCIAL",
	sso: "SSO"
};
