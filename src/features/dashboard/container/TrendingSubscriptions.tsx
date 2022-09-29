const TrendingSubscriptions = () => {
	return (
		<div className="w-full  flex flex-col px-6 py-6 rounded-lg bg-[#FFFFFF]  mb-6 xl:col-span-2 xl:mx-auto">
			<span className="text-[#232D42] text-2xl font-bold leading-7">Trending subscriptions</span>
			<section className="flex">
				<div className="my-6 flex mx-6 ml-0">
					<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
						<div className="mb-6">
							<img className="object-cover  " src="/assets/images/Sub-1.png" alt="Placeholder" />
						</div>
						<div className="mx-6">
							<div className="flex flex-col">
								<span className="font-bold text-[#25313D] text-base">3D Experience training</span>
								<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
									44 courses
								</div>
							</div>
							<div className="flex mt-27 mb-7">
								<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
									<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">₹7150</span>{" "}
									/per user
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="my-6 flex mx-6 ml-0">
					<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
						<div className="mb-6">
							<img className="object-cover  " src="/assets/images/Sub-2.png" alt="Placeholder" />
						</div>
						<div className="mx-6">
							<div className="flex flex-col">
								<span className="font-bold text-[#25313D] text-base">Autodesk training</span>
								<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
									44 courses
								</div>
							</div>
							<div className="flex mt-27 mb-7">
								<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
									<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">₹7150</span>{" "}
									/per user
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="my-6 flex mx-6 ml-0">
					<div className="flex flex-col w-66 rounded-lg border border-solid border-[#D7DBE0] ">
						<div className="mb-6">
							<img className="object-cover  " src="/assets/images/Sub-3.png" alt="Placeholder" />
						</div>
						<div className="mx-6">
							<div className="flex flex-col">
								<span className="font-bold text-[#25313D] text-base">CATIA V5 training</span>
								<div className="my-2 text-[#6A7681] text-[14px] font-normal leading-[17px]">
									44 courses
								</div>
							</div>
							<div className="flex mt-27 mb-7">
								<div className="w-auto text-[#697179] text-[8px] flex items-center justify-center">
									<span className="text-[12px] leading-5 text-[#1268B3]   font-semibold">₹7150</span>{" "}
									/per user
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TrendingSubscriptions;
