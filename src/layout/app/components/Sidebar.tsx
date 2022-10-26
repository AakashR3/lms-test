import { Icon } from "@iconify/react";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional
import { useUserMenuQuery } from "~/config/api";
import { navigateLink } from "~/config/api/links";

const menus = [
	{ name: "Dashboard", icon: "mingcute:home-3-fill", link: "/" },
	{ name: "Learning", icon: "mingcute:book-5-fill", link: "/learning" },
	{ name: "Objectives", icon: "mingcute:target-fill", link: "/objectives" },
	{ name: "Quick Start", icon: "mingcute:play-circle-fill", link: "/quick-start" },
	{ name: "Tech Tips", icon: "mingcute:bulb-fill", link: "/tech-tips" },
	{ name: "Report", icon: "mingcute:chart-bar-fill", link: "/report" }
];

export function Sidebar({ menus }: any) {
	return (
		<div className="z-40 h-full w-[var(--main-sidebar-width)] shrink-0">
			<div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
				<div className="flex pt-4 px-1.5">
					<Link to="/">
						<img src="/assets/images/logo.png" alt="logo" />
					</Link>
				</div>
				<div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
					{menus.map((menu: any) => (
						<Tippy key={menu.Link} content={menu.Name} placement="right">
							<Link
								to={menu.Link}
								className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20"
							>
								<Icon icon={menu.Icon} color="#B1B9C5" className="h-7 w-7 dark:fill-navy-200" />
							</Link>
						</Tippy>
					))}
				</div>
				<div className="flex flex-col items-center space-y-3 py-3">
					<Link
						to={navigateLink.auth.logout}
						className="flex h-11 w-11 text-slate-500 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
					>
						<Icon icon="humbleicons:logout" className="h-7 w-7" />
					</Link>
					<div className="flex">
						<button className="avatar h-12 w-12">
							<img className="rounded-full" src="/assets/images/profile-2.svg" alt="avatar" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
