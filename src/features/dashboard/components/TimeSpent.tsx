const TimeSpent = () => {
	return (
		<>
			<div className="mt-8 w-full">
				<div className="text-base mb-4 font-medium tracking-wide text-slate-700 line-clamp-1">Time Spent</div>
				<div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 mt-8">
					<div className="col-span-8">chart (YTD)</div>
					<div className="col-span-4">stats (YTD)</div>
				</div>
			</div>
		</>
	);
};
export default TimeSpent;
