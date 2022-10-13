import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import { login } from "~/helpers/auth";
import { navigateLink } from "~/config/api/links";
import { useTokenValidationMutation } from "~/features/auth/sso-login/store";

function SsoLoginAuthorize() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const [validateToken, { isLoading, isError }] = useTokenValidationMutation();
	const isSuccess = searchParams.get("status") === "success";

	useEffect(() => {
		const TokenId = searchParams.get("token");
		const sessionid = searchParams.get("sessionid");
		if (TokenId) {
			validateToken({ TokenId }).then((res: any) => {
				if (sessionid) {
					login(sessionid);
					navigate(navigateLink.dashboard, { replace: true });
				}
			});
		} else navigate(navigateLink.auth.login, { replace: true });
	}, [searchParams]);

	return (
		<div className="animate-opacity flex flex-col items-center justify-center w-full h-full">
			{(isSuccess || isLoading) && !isError && (
				<div className="flex flex-col items-center text-sm transition ease-in-out duration-150 space-y-2">
					<Icon icon="gg:spinner" className="animate-spin -ml-1 mr-3 h-10 w-10" />
				</div>
			)}
			{(!isSuccess || isError) && !isLoading && (
				<>
					<span>{searchParams.get("message") || "Something went wrong"}</span>
					<Link to={navigateLink.auth.login} className="text-blue-500">
						click here to login
					</Link>
				</>
			)}
		</div>
	);
}

export default SsoLoginAuthorize;
