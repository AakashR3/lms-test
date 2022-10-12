export function Header() {
	return (
		<nav className="fixed top-0 right-0 z-20 flex h-[61px] w-full border-b border-slate-150 transition-all duration-[.25s] dark:border-navy-700 md:w-[calc(100%-var(--main-sidebar-width))] print:hidden">
			<div className="px-[var(--margin-x)] transition-[padding,width] duration-[.25s] relative flex w-full bg-white dark:bg-navy-750 print:hidden">
				<div className="flex w-full items-center justify-between">
					<div className="h-7 w-7">
						<button className="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
