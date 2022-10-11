import * as Yup from "yup";

import { regex } from "~/helpers";
import { login } from "./../constants";

const { form } = login;

export const loginValidationSchema = Yup.object().shape({
	Email: Yup.string().required(form.email.error.required).matches(regex.email, form.email.error.regex),
	EncPassword: Yup.string().required(form.password.error.required)
});
