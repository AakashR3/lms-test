import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { signupFormValidationSchema } from "~/features/auth/sign-up/validation";
import { SingUpRequest } from "~/features/auth/sign-up/@types";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
import { signUp } from "~/features/auth/sign-up/constants";

export const SignUpForm = React.memo(() => {
	const { register, handleSubmit, getValues, formState } = useForm<SingUpRequest>({
		resolver: yupResolver(signupFormValidationSchema),
		mode: "onSubmit"
	});
	const { errors, isDirty, isValid } = formState;
	const onSubmit: SubmitHandler<SingUpRequest> = async formData => {
		console.log("formData", formData);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="flex flex-col space-y-1">
				<div className="flex space-x-3">
					<FloatingLabelInput register={register("FirstName")} />
					<FloatingLabelInput register={register("LastName")} />
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
			<div className="w-full">
				<FloatingLabelInput register={register("Email")} />
				{errors.Email && <span className="text-red-500 text-xs ml-2">{errors.Email?.message}</span>}
			</div>

			<div className="flex flex-col space-y-1">
				<div className="flex space-x-3">
					<FloatingLabelInput type="password" register={register("Password")} />
					<FloatingLabelInput type="password" name="Confirm Password" register={register("CPassword")} />
				</div>
				<p className="hidden text-xs pl-2 text-gray-500">
					Use 8 or more characters with a mix of letters, numbers & symbols
				</p>
				{errors.Password && <span className="text-red-500 text-xs ml-2">{errors.Password?.message}</span>}
				{!errors.Password && getValues("CPassword") && errors.CPassword && (
					<span className="text-red-500 text-xs ml-2">{errors.CPassword?.message}</span>
				)}
			</div>
			<div className="pt-2 flex select-none text-[#0000008A]">
				<input
					id="marketing"
					type="checkbox"
					{...register("MarketingEmail")}
					className="h-4 w-4 cursor-pointer rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
				/>
				<label htmlFor="marketing" className="relative -top-[2px] cursor-pointer ml-1.5 block text-sm">
					{signUp.marketingTxt}
				</label>
			</div>
			<button className="btn">{signUp.btnTxt}</button>
		</form>
	);
});
