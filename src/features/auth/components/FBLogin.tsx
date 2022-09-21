import { Icon } from "@iconify/react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import { navigateLink } from "~/config/api/links";
import { toast } from "react-hot-toast";
import { dispatch } from "~/config/store";
import { login } from "~/features/auth/state/authSlice";
import { useNavigate } from "react-router-dom";
import { useDoSocialSignUpMutation } from "~/services/auth";

export function FBLogin() {
	const navigate = useNavigate();
	const [doSignup, option] = useDoSocialSignUpMutation();
	const onLoginSuccess = async (profile: any) => {
		const SocialType = "FacebookID";
		const user = {
			FirstName: profile.first_name,
			LastName: profile.last_name,
			Email: profile.email,
			SocialID: profile.id,
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

	return (
		<FacebookLogin
			fields="email,first_name,last_name"
			appId={import.meta.env.VITE_FB_APP_ID}
			onSuccess={response => {
				console.log("Login Success!", response);
			}}
			onFail={error => {
				console.log("Login Failed!", error);
			}}
			onProfileSuccess={(response: any) => onLoginSuccess(response)}
			render={({ onClick, logout }) => (
				<button
					onClick={onClick}
					className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]"
				>
					<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
				</button>
			)}
		/>
	);
}
