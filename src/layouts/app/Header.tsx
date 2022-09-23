import { Icon } from "@iconify/react";
import { gapi } from "gapi-script";
import { Link, useNavigate } from "react-router-dom";
import { navigateLink } from "~/config/api/links";
import headerIcon from "../../../public/assets/images/header-icon.svg";
import headerPoints from "../../../public/assets/images/header-points-icon.svg";

export function AppHeader() {
	const navigate = useNavigate();

	const signOut = () => {
		const auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(() => {
			console.log("User signed out.");
			navigate(navigateLink.auth.login, { replace: true });
		});
	};

	return (
		<header className="bg-white">
			<section className="container mx-auto px-4 flex justify-between py-2 w-full font-bold text-[#6A7681]">
				<div className="flex items-center">
					<Link to="#!">
						<img className="object-cover" src="/assets/images/logo.png" alt="Store Logo" />
					</Link>
				</div>
				<div className="flex space-x-5">
					<div className="flex items-center space-x-3 font-bold">
						<div className=" flex items-center">
							<img className="mr-2" src={headerPoints} alt="#" />
							<span className="mr-2">60 points</span>
						</div>
						<Icon className="mr-2" width={20} icon="ion:help-circle-outline" />
						<Icon className="mr-2" width={20} icon="ci:heart-outline" />
						<div>
							<Icon className="relative mr-2" width={20} icon="ant-design:shopping-cart-outlined" />
							<span className="absolute right-11rem top-10px rounded-full bg-[#1268B3] w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
								5
							</span>
						</div>
						<Icon className="mr-2" width={20} icon="carbon:notification" />
					</div>
					{/* <button onClick={() => signOut()}>lo</button> */}
					<div className="flex items-center space-x-2">
						<div className="inline-flex overflow-hidden relative justify-center items-center">
							<img src={headerIcon} alt="#" />
						</div>
						<div className="font-medium leading-5 flex">
							<div>
								<h1 className="flex items-center font-bold mr-2">
									Steve
									<Icon className="ml-2" width={15} icon="akar-icons:chevron-down" />
								</h1>
							</div>
							{/* <div className="text-sm text-gray-500">Joined in August 2014</div> */}
						</div>
					</div>
				</div>
			</section>
		</header>
	);
}
