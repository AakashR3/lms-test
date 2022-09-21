import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { gapi, loadAuth2 } from "gapi-script";
import { useNavigate } from "react-router";
import { navigateLink } from "~/config/api/links";
import { useDoSocialSignUpMutation } from "~/services/auth";
import { toast } from "react-hot-toast";

export const gAuth2 = async () => await loadAuth2(gapi, import.meta.env.VITE_G_CLIENT_ID, "");

export const GoogleLogin = () => {
	const navigate = useNavigate();
	const [doSignup, option] = useDoSocialSignUpMutation();

	useEffect(() => {
		const setAuth2 = async () => {
			const auth2 = await gAuth2();
			if (auth2.isSignedIn.get()) {
				await updateUser(auth2.currentUser.get());
			} else {
				const loginBtnElement = document.getElementById("gLogin") as HTMLButtonElement;
				attachSignIn(loginBtnElement, auth2);
			}
		};
		setAuth2();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateUser = async (currentUser: any) => {
		const profile = currentUser.getBasicProfile();
		const user = {
			FirstName: profile.getGivenName(),
			LastName: profile.getFamilyName(),
			Email: profile.getEmail(),
			SocialID: profile.getId(),
			SocialType: "GoogleId"
		};
		const resp: any = await doSignup(user);
		if (resp.data.Status === "F") {
			toast.error(resp.data.Message);
			return;
		} else {
			localStorage.setItem("loginType", user.SocialType);
			localStorage.setItem("user", JSON.stringify(resp.data.Data));
			navigate(navigateLink.dashboard, { replace: true });
		}
	};

	const attachSignIn = (element: HTMLButtonElement, auth2: any) => {
		auth2.attachClickHandler(element, {}, successResponse, errorHandling);
	};

	const successResponse = async (googleUser: any) => {
		await updateUser(googleUser);
	};
	const errorHandling = (error: any) => {
		console.log(JSON.stringify(error));
	};
	if (option.isLoading) {
		return (
			<span className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
				<Icon width={22} className="animate-spin" icon="bx:loader-alt" />
			</span>
		);
	}
	return (
		<button
			id="gLogin"
			className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			<Icon width={22} icon="flat-color-icons:google" />
		</button>
	);
};
