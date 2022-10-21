import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useUserNotificationQuery } from "~/config/api";
import { useAppSelector } from "~/config/store";
import { selectCartItems } from "~/features/cart/store";

export function Header(props: any) {
	const cartItems = useAppSelector(selectCartItems);
	const notification = useUserNotificationQuery();
	return (
		<nav className="shrink-0 z-20 flex h-[61px] w-full border-b border-slate-150 transition-all duration-[.25s] dark:border-navy-700 print:hidden">
			<div className="px-[var(--margin-x)] transition-[padding,width] duration-[.25s] relative flex w-full bg-white dark:bg-navy-750 print:hidden">
				<div className="flex w-full items-center justify-between">
					<div className="h-7 w-7">
						<button className="menu-toggle flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<div className="relative mr-4 flex h-8">
						<input
							placeholder="Search here..."
							className="form-input peer h-full rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:none dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
							type="text"
							x-ref="popperRef"
						/>
						<div className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
							<Icon icon="mingcute:search-line" className="h-5 w-5 transition-colors duration-200" />
						</div>
					</div>
					<div className="flex items-center space-x-1 w-max font-medium">
						<Icon
							icon="mingcute:copper-coin-line"
							className="h-5 w-5 transition-colors duration-200 text-orange-400"
						/>
						<span>{props?.Point || 0} points</span>
					</div>
					<button className="btn relative h-8 w-8 rounded-md p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
						<Icon icon="mingcute:sun-fill" className="h-6 w-6 text-slate-500 dark:text-navy-100" />
					</button>
					<button className="btn relative h-8 w-8 rounded-md p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
						<Icon icon="mingcute:palette-fill" className="h-6 w-6 text-slate-500 dark:text-navy-100" />
					</button>
					<Link
						to="cart"
						className="btn relative h-6 w-6 rounded-md p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
					>
						<Icon
							icon="mingcute:shopping-cart-2-line"
							className="h-6 w-6 text-slate-500 dark:text-navy-100"
						/>
						<div className="absolute -top-1 -right-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
							{cartItems.length}
						</div>
					</Link>
					<button className="btn relative h-6 w-6 rounded-md p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
						<Icon icon="mingcute:notification-line" className="h-6 w-6 text-slate-500 dark:text-navy-100" />
						{notification.data?.NotificationsCount && (
							<div className="absolute -top-1 -right-1 flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary px-1 text-tiny font-medium leading-none text-white dark:bg-accent">
								{notification.data?.NotificationsCount}
							</div>
						)}
						{notification.data?.NotificationsCount && (
							<span className="hidden absolute -top-px -right-px flex h-3 w-3 items-center justify-center">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-80" />
								<span className="inline-flex h-2 w-2 rounded-full bg-primary" />
							</span>
						)}
					</button>
					<button className="btn h-8 w-8 rounded-md p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
						<Icon icon="mingcute:grid-line" className="h-6 w-6 text-slate-500 dark:text-navy-100" />
					</button>
				</div>
			</div>
		</nav>
	);
}
