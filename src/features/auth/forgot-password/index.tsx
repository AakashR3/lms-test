import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { navigateLink } from "~/config/api/links";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import { BackToLogin } from "~/features/auth/forgot-password/components";
import { forgotPassword } from "~/features/auth/forgot-password/constants";
import { ForgotPasswordRequest } from "~/features/auth/forgot-password/@types";
import { useForgotPasswordMutation } from "~/features/auth/forgot-password/store";
import { forgotPasswordValidationSchema } from "~/features/auth/forgot-password/validation";

function ForgotPasswordPage() {
	const navigate = useNavigate();
	const [doForgotPassword, option] = useForgotPasswordMutation();
	const { register, handleSubmit, formState } = useForm<ForgotPasswordRequest>({
		resolver: yupResolver(forgotPasswordValidationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;
	const onSubmit: SubmitHandler<ForgotPasswordRequest> = async formData => {
		await doForgotPassword(formData).unwrap();
		navigate(navigateLink.auth.login);
	};

	return (
		<div className="flex w-full max-w-md grow flex-col justify-center p-5 bg-white">
			<BackToLogin />
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">{forgotPassword.title}</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">{forgotPassword.description}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group flex flex-col">
					<FloatingLabelInput name={forgotPassword.form.email.placeholder} register={register("Email")} />
					{errors.Email && <p className="mt-0.5 ml-1.5 text-xs text-red-600">{errors.Email.message}</p>}
				</div>
				<button
					disabled={!isDirty || !isValid || option.isLoading}
					className="btn w-full h-12 mt-6 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
				>
					{forgotPassword.btnTxt}
				</button>
			</form>
		</div>
	);
}

export default ForgotPasswordPage;
