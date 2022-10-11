export function Sidebar() {
	return (
		<div className="sidebar print:hidden">
			<div className="main-sidebar">
				<div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
					{/*Application Logo*/}
					<div className="flex pt-4">
						<a href="/">
							<img src="/assets/images/logo.png" alt="logo" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
