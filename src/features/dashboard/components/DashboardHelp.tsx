const DashboardHelp = () => {
	return (
		<>
			<div className="col-span-12 lg:col-span-6 pt-7 flex justify-between bg-[#FCE0A9] rounded-lg px-11">
				<div>
					<div className=" text-xl font-bold text-slate-600 dark:text-navy-100 leading-[26px]">
						Continue learning on the go
					</div>
					<div className="mt-[5px] font-normal text-[14px] leading-7 text-[#020a1299]">
						Download our IGETIT mobile app
					</div>
					<div className="flex mt-6 mb-5">
						<img src="/assets/images/google-play.png" className="cursor-pointer" alt="google-play-banner" />
						<img
							src="/assets/images/app-store.png"
							className="ml-4 cursor-pointer"
							alt="app-store-banner"
						/>
					</div>{" "}
				</div>
				<img src="/assets/images/cell-help.svg" alt="cell-help" />
			</div>
			<div className="col-span-12 lg:col-span-6 pt-7 flex justify-between bg-[#C1D4FB] rounded-lg px-11">
				<div>
					<div className=" text-xl font-bold text-slate-600 dark:text-navy-100 leading-[26px]">
						Any queries contact us
					</div>
					<div className="mt-[5px] font-normal text-[14px] leading-7 text-[#020a1299]">
						We are here to help you
					</div>
					<div className="flex mt-6 mb-5">
						<button className="bg-primary rounded px-[22px] py-[11px] text-white font-bold">
							Contact us
						</button>
					</div>{" "}
				</div>
				<img src="/assets/images/user-help.svg" alt="cell-help" />
			</div>
		</>
	);
};

export default DashboardHelp;
