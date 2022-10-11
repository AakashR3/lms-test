import * as Yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";
// @ts-ignore
import { useResetPasswordMutation, useVerifyEmailLinkMutation } from "~/services/auth";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { navigateLink } from "~/config/api/links";
import toast from "react-hot-toast";
import { encryptPassword } from "~/helpers";
import { useEffect, useState } from "react";

interface IResetPasswordFormInput {
	password?: String | null;
	cpassword?: String | null;
}

function ResetPasswordContainer() {
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const [valid, setValid] = useState<string | undefined>(undefined);
	const [checkToken] = useVerifyEmailLinkMutation();
	const [resetPassword, option] = useResetPasswordMutation();

	// form validation rules
	const validationSchema = Yup.object().shape({
		password: Yup.string()
			.required("password is required")
			.matches(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
				"Use 8 or more characters with a mix of letters, numbers & symbols"
			),
		cpassword: Yup.string()
			.required("Confirm Password is required")
			.matches(
				/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
				"Use 8 or more characters with a mix of letters, numbers & symbols"
			)
	});

	// get functions to build form with useForm() hook
	const { register, handleSubmit, formState, watch } = useForm<IResetPasswordFormInput>({
		resolver: yupResolver(validationSchema),
		mode: "onChange"
	});
	const { errors, isDirty, isValid } = formState;
	const watchPassword = watch("password");
	const watchCPassword = watch("cpassword");
	const EmailSessionId = params.get("tokenID");

	const onSubmit: SubmitHandler<IResetPasswordFormInput> = user => {
		const password = encryptPassword(user?.cpassword);
		resetPassword({ EmailSessionId: params.get("tokenID"), password }).then((resp: any) => {
			if (resp.data.Status === "S") {
				toast.success(resp.data.Message);
				navigate(navigateLink.auth.login, { replace: true });
			}
		});
	};

	useEffect(() => {
		if (EmailSessionId) {
			checkToken({ EmailSessionId }).then((resp: any) => {
				if (resp.error) {
					setValid(resp.error.data.Message);
					toast.error(resp.error.data.Message);
					navigate(navigateLink.auth.forgotPassword);
				} else setValid(undefined);
			});
		} else navigate(navigateLink.auth.forgotPassword);
	}, []);

	return (
		<section className="flex flex-col h-full w-full animate-opacity">
			<header className="bg-white">
				<section className="container mx-auto px-4 flex justify-between py-2 w-full">
					<div className="flex items-center">
						<Link to="#!">
							<img className="object-cover" src="/assets/images/logo.png" alt="Store Logo" />
						</Link>
					</div>
				</section>
			</header>
			{valid && (
				<div
					className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
					role="alert"
				>
					<span className="font-medium">Alert!</span> {valid}
				</div>
			)}
			{!valid && (
				<div className="flex-1 flex items-center md:(justify-center max-w-md mx-auto mt-0) mt-10 flex-col px-8 w-full h-full">
					<h1 className="tracking-wide font-bold text-2xl leading-7 mb-7 mt-5 capitalize">Reset password</h1>
					<p className="hidden tracking-wide text-center text-sm font-normal text-[#00000099] mb-7">
						Enter your email and we'll send you instructions on how to reset your password.
					</p>
					<div className="w-full space-y-3">
						<div className="w-full">
							<FloatingLabelInput name="New Password" type="password" register={register("password")} />
							{errors.password && (
								<span className="text-red-500 text-xs ml-2">{errors.password?.message}</span>
							)}
						</div>
						<div className="w-full">
							<FloatingLabelInput
								name="Confirm new password"
								type="password"
								register={register("cpassword")}
							/>
							{errors.cpassword && (
								<span className="text-red-500 text-xs ml-2">{errors.cpassword?.message}</span>
							)}
						</div>
						{!errors.password && !errors.cpassword && watchPassword !== watchCPassword && (
							<span className="text-red-500 text-xs ml-2">Password do not match</span>
						)}
					</div>
					<button
						disabled={!isDirty || !isValid || option.isLoading || watchPassword !== watchCPassword}
						onClick={handleSubmit(onSubmit)}
						className="disabled:(opacity-40 cursor-not-allowed) block w-full bg-[#1869B3] py-4 font-bold mt-4 rounded-md text-white mb-2"
					>
						Set Password
					</button>

					<p className="hidden space-x-1 tracking-wide text-sm font-normal text-[#00000099] mt-5">
						<span>If you are still having trouble this</span>
						<span className="text-[#1869B3] underline cursor-pointer">article</span>
						<span>might help</span>
					</p>
				</div>
			)}
		</section>
	);
}

export default ResetPasswordContainer;
