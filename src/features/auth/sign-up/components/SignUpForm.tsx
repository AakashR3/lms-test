import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { signupFormValidationSchema } from "~/features/auth/sign-up/validation";
import { SingUpRequest } from "~/features/auth/sign-up/@types";

export const SignUpForm = React.memo(() => {
	const { register, handleSubmit, formState } = useForm<SingUpRequest>({
		resolver: yupResolver(signupFormValidationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;
	const onSubmit: SubmitHandler<SingUpRequest> = async formData => {
		console.log("formData", formData);
	};
	return <form onSubmit={handleSubmit(onSubmit)}></form>;
});
