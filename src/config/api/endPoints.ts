export const endPoints = {
	baseUrl: import.meta.env.VITE_API_URL,
	common: {
		menu: "HeadersAndMenu/MenuItems", //:UserId added on url
		points: "HeadersAndMenu/Points", //:UserId added on url
		nofitication: "HeadersAndMenu/UserNotification" //:UserId added on url
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
		LeaderBoard: "Dashboard/GetLeaderBoard/:accountID",
		Scorecard: "Dashboard/Scorecard/:userID",
		RecommendedCourseList: "Dashboard/RecommendedCourseList/:userID",
		PeersCourseList: "Dashboard/PeersCourseList/:userID",
		LearningPath: "Dashboard/LearningPath/:userID",
		UpcomingEventsTodayList: "Dashboard/UpcomingEventsList/:userID/T",
		UpcomingEventsWeekList: "Dashboard/UpcomingEventsList/:userID/W",
		UpcomingEventsMonthList: "Dashboard/UpcomingEventsList/:userID/M",
		TimeSpent: "Dashboard/TimeSpent/:userID",
		TimeSpentGraph: "Dashboard/TimeSpentGraph/:userID",
		PopularRoles: "Dashboard/PopularRoles/:userID"
	},
	cart: {
		list: "Cart/CartList", //:UserId added on url
		addToCart: "Cart/AddToCart",
		removeCartItem: "Cart/DeleteCartItem",
		shippingAddress: "Cart/ShippingInfo/{UserID}",
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
