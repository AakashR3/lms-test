import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { sso } from "~/features/auth/sso-login/constants";
import { SsoLoginRequest } from "~/features/auth/sso-login/@types";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import { SsoValidationSchema } from "~/features/auth/sso-login/validation";

export const DomainForm = React.memo(() => {
	const { register, handleSubmit, formState } = useForm<SsoLoginRequest>({
		resolver: yupResolver(SsoValidationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;
	const onSubmit: SubmitHandler<SsoLoginRequest> = async formData => {
		console.log("formData", formData);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="form-group flex flex-col">
				<FloatingLabelInput name={sso.form.domain.placeholder} register={register("domain")} />
				{errors.domain && <p className="mt-0.5 ml-1.5 text-xs text-red-600">{errors.domain.message}</p>}
			</div>
			<button disabled={!isDirty || !isValid} className="btn">
				{sso.btnTxt}
			</button>
		</form>
	);
});
