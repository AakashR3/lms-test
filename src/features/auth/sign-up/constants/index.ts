export const signUp = {
	title: "Sign Up",
	loginText: "Already have an account?",
	loginLinkText: "Login",
	btnTxt: "Create Account",
	marketingTxt: "Send me Marketing Emails about Tata Technologies Products and Services",
	form: {
		firstName: {
			placeholder: "First Name",
			error: {
				required: "First Name is required"
			}
		},
		lastName: {
			placeholder: "Last Name",
			error: {
				required: "Last Name is required"
			}
		},
		email: {
			placeholder: "Email",
			error: {
				required: "Email is required",
				regex: "Invalid email address"
			}
		},
		password: {
			placeholder: "Password",
			error: {
				required: "Password is required",
				regex: "Use 12 or more characters with a mix of letters, numbers & symbols"
			}
		},
		confirm_password: {
			placeholder: "Confirm Password",
			error: {
				required: "Confirm Password is required",
				mismatch: "Password do not match"
			}
		},
		otpVerified: { required: "otp not verified" }
	}
};
