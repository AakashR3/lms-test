import * as Yup from "yup";
import { regex } from "~/helpers";
import { sso } from "./../constants";

const { form } = sso;

export const SsoValidationSchema = Yup.object().shape({
	Email: Yup.string().required(form.domain.error.required)
});
