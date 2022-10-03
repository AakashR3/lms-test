import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { navigateLink } from "~/config/api/links";
import headerIcon from "../../../public/assets/images/header-icon.svg";
import headerPoints from "../../../public/assets/images/header-points-icon.svg";

export function AppHeader() {
	const navigate = useNavigate();

	const signOut = async () => {
		console.log("User signed out.");
		localStorage.clear();
		navigate(navigateLink.auth.login, { replace: true });
	};

	return (
		<header className="bg-white border-b box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;">
			<section className="container mx-auto px-4 flex justify-between py-2 w-full font-bold text-[#6A7681]">
				<div className="flex items-center">
					<Link to="#!">
						<img className="object-cover" src="/assets/images/logo.png" alt="Store Logo" />
					</Link>
				</div>
				<div className="flex space-x-5">
					<div className="flex items-center space-x-3">
						<span>60 points</span>
						<Icon width={20} icon="ion:help-circle-outline" />
						<Icon width={20} icon="ci:heart-outline" />
						<Icon width={20} icon="clarity:shopping-cart-solid" />
						<Icon onClick={signOut} width={20} icon="ant-design:logout-outlined" />
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
