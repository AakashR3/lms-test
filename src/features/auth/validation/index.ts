import * as Yup from "yup";

const regex = {
	email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{12,}$/
};

export const message = {
	email: {
		required: "Email is required",
		regex: "Invalid email address"
	},
	password: {
		required: "Password is required",
		regex: "Use 12 or more characters with a mix of letters, numbers & symbols",
		cpassword: "Password are not match"
	},
	firstName: {
		required: "First Name is required"
	},
	lastName: {
		required: "Last Name is required"
	},
	otpVerified: { required: "Email not verified" }
};

const emailSchema = Yup.object().shape({
	Email: Yup.string().required(message.email.required).matches(regex.email, message.email.regex)
});
const passwordSchema = Yup.string().required(message.password.required);

const passwordsSchema = Yup.object().shape({
	Password: passwordSchema.matches(regex.password, message.password.regex),
	CPassword: Yup.string()
		.required(message.password.required)
		.matches(regex.password, message.password.regex)
		.oneOf([Yup.ref("Password"), null], message.password.cpassword)
});

export const loginSchema = Yup.object().concat(emailSchema).shape({ EncPassword: passwordSchema });

export const forgotPasswordSchema = Yup.object().shape({}).concat(emailSchema);

export const signUpSchema = Yup.object()
	.shape({
		FirstName: Yup.string().required(message.firstName.required),
		LastName: Yup.string().required(message.lastName.required),
		MarketingEmail: Yup.boolean(),
		optVerified: Yup.boolean().required(message.otpVerified.required)
	})
	.concat(emailSchema)
	.concat(passwordsSchema);
