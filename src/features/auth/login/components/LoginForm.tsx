import React from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { navigateLink } from "~/config/api/links";
import { login } from "~/features/auth/login/constants";
import { LoginRequest } from "~/features/auth/login/@types";
import { useLoginMutation } from "~/features/auth/login/store";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import { loginValidationSchema } from "~/features/auth/login/validation";
import { ForgotPasswordPageLink } from "~/features/auth/login/components/PageLinks";

export const LoginForm = React.memo(() => {
	const navigate = useNavigate();
	const [doLogin, option] = useLoginMutation();
	const { register, handleSubmit, formState } = useForm<LoginRequest>({
		resolver: yupResolver(loginValidationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;

	const onSubmit: SubmitHandler<LoginRequest> = async formData => {
		await doLogin(formData).unwrap();
		navigate(navigateLink.dashboard, { replace: true });
	};

	return (
		<div className="login-form">
			<div className="group mb-4">
				<FloatingLabelInput name={login.form.email.placeholder} register={register("Email")} />
				{errors.Email && <p className="mt-0.5 ml-1.5 text-xs text-red-600">{errors.Email.message}</p>}
			</div>
			<div className="group mb-4">
				<FloatingLabelInput
					type="password"
					name={login.form.password.placeholder}
					register={register("EncPassword")}
				/>
				{errors.EncPassword && (
					<p className="mt-0.5 ml-1.5 text-xs text-red-600">{errors.EncPassword.message}</p>
				)}
			</div>
			<div className="flex items-center justify-end">
				<ForgotPasswordPageLink />
			</div>
			<button
				onClick={handleSubmit(onSubmit)}
				disabled={!isDirty || !isValid || option.isLoading}
				className="btn btn-green"
			>
				{login.btnTxt}
			</button>
		</div>
	);
});
