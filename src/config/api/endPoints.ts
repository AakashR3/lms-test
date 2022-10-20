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
	},
	dashboard: {
		courseList: "Dashboard/NewCoursesList",
		trendingSubscriptionByCode: "Dashboard/TrendingSubscription/:currencyCode",
		catalogList: "Dashboard/CatalogList"
	},
	cart: {
		list: "Cart/CartList/:UserId",
		payment: {
			checkout: "Payment/RazorpayCheckout",
			response: "Payment/RazorpayResponse"
		}
	}
};

export const LoginType = {
	basic: "BASIC",
	social: "SOCIAL",
	sso: "SSO"
};
