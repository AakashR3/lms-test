export const endPoints = {
	baseUrl: import.meta.env.VITE_API_URL,
	common: {
		menu: "HeadersAndMenu/GetMenuItems", //:UserId added on url
		points: "HeadersAndMenu/GetPoints", //:UserId added on url
		nofitication: "HeadersAndMenu/GetUserNotification" //:UserId added on url
	},
	auth: {
		login: "User/UserAuthentication",
		forgotPassword: "User/ForgotPassword",
		sendOtp: "User/SendOTP",
		verifyOtp: "User/VerifyOTP",
		verifyEmailLink: "User/VerifyEmailLink",
		ssoRequest: "User/SSORequest",
		TokenValidation: "User/TokenValidation",
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
		catalogList: "Dashboard/CatalogList",
		CourseListInProgress: "Dashboard/CourseListInProgress/:userID",
		TranscriptList: "Dashboard/TranscriptList/:userID",
		LeaderBoard: "Dashboard/GetLeaderBoard/:accountID"
	},
	cart: {
		list: "Cart/CartList", //:UserId added on url
		addToCart: "Cart/AddToCart",
		removeCartItem: "Cart/DeleteCartItem",
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
