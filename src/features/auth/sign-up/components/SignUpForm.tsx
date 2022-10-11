import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppSelector } from "~/config/store";
import { navigateLink } from "~/config/api/links";
import { signUp } from "~/features/auth/sign-up/constants";
import { SingUpRequest } from "~/features/auth/sign-up/@types";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import { signupFormValidationSchema } from "~/features/auth/sign-up/validation";
import { useSignUpMutation, useSendOtpMutation } from "~/features/auth/sign-up/store";

export const SignUpForm = React.memo(() => {
	const navigate = useNavigate();
	const [createAccount, { isLoading }] = useSignUpMutation();
	const [verifyEmail, verifyEmailOption] = useSendOtpMutation();
	const signup = useAppSelector((state: any) => state.authSignUp);
	const { register, handleSubmit, getValues, formState } = useForm<SingUpRequest>({
		resolver: yupResolver(signupFormValidationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;
	const onSubmit: SubmitHandler<SingUpRequest> = async formData => {
		console.log(formData);
		await createAccount(formData).unwrap();
		navigate(navigateLink.auth.login);
	};
	const handleVerifyEmail = React.useCallback(async () => {
		await verifyEmail({ Email: getValues("Email") })
			.unwrap()
			.catch(() => navigate(navigateLink.auth.login));

		//eslint-disable-next-line
	}, []);
	return (
		<section className="space-y-4">
			<div className="flex flex-col space-y-1">
				<div className="flex space-x-3">
					<FloatingLabelInput error={!!errors?.FirstName} register={register("FirstName")} />
					<FloatingLabelInput error={!!errors.LastName} register={register("LastName")} />
				</div>
				{errors.FirstName && !errors.LastName && (
					<span className="text-red-500 text-xs ml-2">{errors.FirstName?.message}</span>
				)}
				{!errors.FirstName && errors.LastName && (
					<span className="text-red-500 text-xs ml-2">{errors.LastName?.message}</span>
				)}
				{errors.FirstName && errors.LastName && (
					<span className="text-red-500 text-xs ml-2">Enter first and last names</span>
				)}
			</div>
			<div className="w-full relative">
				<FloatingLabelInput
					isVerify={!!getValues("Email") && !errors.Email && !signup.isOtpVerified}
					handleVerify={handleVerifyEmail}
					error={!!errors?.Email}
					register={register("Email")}
				/>
				{verifyEmailOption.isLoading && (
					<span className="bg-white inline-flex w-24 h-10 items-center justify-end absolute top-1 right-3">
						<Icon width={22} icon="tabler:loader-2" color="#666" className="animate-spin" />
					</span>
				)}
				{signup.isOtpVerified && (
					<span className="bg-white inline-flex w-24 h-10 items-center justify-end absolute top-1 right-3">
						<Icon width={24} icon="mdi:email-check-outline" className="text-green-500" />
					</span>
				)}

				{errors.Email && <span className="text-red-500 text-xs ml-2">{errors.Email?.message}</span>}
			</div>

			<div className="flex flex-col space-y-1">
				<div className="flex space-x-3">
					<FloatingLabelInput type="password" error={!!errors?.Password} register={register("Password")} />
					<FloatingLabelInput
						type="password"
						error={!!errors?.CPassword}
						name="Confirm Password"
						register={register("CPassword")}
					/>
				</div>
				<p className="hidden text-xs pl-2 text-[rgba(0,0,0,0.6)">
					Use 8 or more characters with a mix of letters, numbers & symbols
				</p>
				{errors.Password && <span className="text-red-500 text-xs ml-2">{errors.Password?.message}</span>}
				{!errors.Password && getValues("Password") && errors.CPassword && (
					<span className="text-red-500 text-xs ml-2">{errors.CPassword?.message}</span>
				)}
			</div>
			<div className="pt-2 flex select-none text-[#0000008A]">
				<input
					id="marketing"
					type="checkbox"
					{...register("MarketingEmail")}
					className="form-checkbox is-outline h-5 w-5 rounded border-slate-400/70 bg-slate-100 before:bg-primary checked:border-primary hover:border-primary focus:border-primary dark:border-navy-500 dark:bg-navy-900 dark:before:bg-accent dark:checked:border-accent dark:hover:border-accent dark:focus:border-accent"
				/>
				<label htmlFor="marketing" className="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
					{signUp.marketingTxt}
				</label>
			</div>
			<button
				disabled={!isDirty || !isValid || isLoading || !signup.isOtpVerified}
				onClick={handleSubmit(onSubmit)}
				className="btn w-full h-12 mt-6 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
			>
				{signUp.btnTxt}
			</button>
		</section>
	);
});
