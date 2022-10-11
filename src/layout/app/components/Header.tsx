export function Header() {
	return (
		<nav className="header print:hidden">
			<div className="header-container relative flex w-full bg-white dark:bg-navy-750 print:hidden">
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
