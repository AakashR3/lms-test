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
		<div className="animate-opacity flex md:(mt-20 max-w-md mx-auto) lg:(justify-center) flex-col px-8 w-full h-full">
			<BackToLogin />
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">{forgotPassword.title}</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">{forgotPassword.description}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form-group flex flex-col">
					<FloatingLabelInput name={forgotPassword.form.email.placeholder} register={register("Email")} />
					{errors.Email && <p className="mt-0.5 ml-1.5 text-xs text-red-600">{errors.Email.message}</p>}
				</div>
				<button disabled={!isDirty || !isValid || option.isLoading} className="btn">
					{forgotPassword.btnTxt}
				</button>
			</form>
		</div>
	);
}

export default ForgotPasswordPage;
