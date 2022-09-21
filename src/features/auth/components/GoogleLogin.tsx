import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { gapi, loadAuth2 } from "gapi-script";
import { useNavigate } from "react-router";
import { navigateLink } from "~/config/api/links";
import { useDoLoginMutation, useDoSocialSignUpMutation } from "~/services/auth";
import { LoginType } from "~/config/api/endPoints";
import { toast } from "react-hot-toast";
import { dispatch } from "~/config/store";
import { login } from "~/features/auth/state/authSlice";

export const gAuth2 = async () => await loadAuth2(gapi, import.meta.env.VITE_G_CLIENT_ID, "");

type GoogleType = {
	isLoginPage?: boolean;
};

export const GoogleLogin = (props: GoogleType) => {
	const { isLoginPage } = props;
	const [user, setUser] = useState<any>(null);
	const [doLogin] = useDoLoginMutation();
	const navigate = useNavigate();
	const [doSignup, option] = useDoSocialSignUpMutation();

	useEffect(() => {
		const setAuth2 = async () => {
			const auth2 = await gAuth2();
			if (auth2.isSignedIn.get()) {
				updateUser(auth2.currentUser.get());
			} else {
				const loginBtnElement = document.getElementById("gLogin") as HTMLButtonElement;
				attachSignin(loginBtnElement, auth2);
			}
		};
		setAuth2();
	}, []);

	const updateUser = async (currentUser: any) => {
		console.log(currentUser);
		const name = currentUser.getBasicProfile().getName();
		const profileImg = currentUser.getBasicProfile().getImageUrl();
		console.log({
			name,
			profileImg,
			familyName: currentUser.getBasicProfile().getFamilyName(),
			email: currentUser.getBasicProfile().getEmail()
		});
		setUser({ name, profileImg });

		const SocialType = "GoogleID";
		const user = {
			FirstName: currentUser.wt.rV,
			LastName: currentUser.wt.uT,
			Email: currentUser.getBasicProfile().getEmail(),
			SocialID: currentUser.Ca,
			SocialType
		};
		const resp: any = await doSignup(user);
		if (resp.data.Status === "F") {
			toast.error(resp.data.Message);
			return;
		} else {
			dispatch(login);
			localStorage.setItem("loginType", SocialType);
			localStorage.setItem("user", JSON.stringify(resp.data.Data));
			navigate(navigateLink.dashboard, { replace: true });
		}
	};

	const attachSignin = (element: HTMLButtonElement, auth2: any) => {
		auth2.attachClickHandler(element, {}, successResponse, errorHandling);
	};

	const successResponse = (googleUser: any) => {
		updateUser(googleUser);
	};
	const errorHandling = (error: any) => {
		console.log(JSON.stringify(error));
	};

	return (
		<button
			id="gLogin"
			className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
		>
			<Icon width={22} icon="flat-color-icons:google" />
		</button>
	);
};
