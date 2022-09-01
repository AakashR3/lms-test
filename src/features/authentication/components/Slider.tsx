export function Slider() {
	return (
		<section
			className="flex w-1/2 justify-around bg-no-repeat bg-cover"
			style={{ backgroundImage: 'url(/login.png)' }}
		>
			<div className="flex-col max-w-lg mx-auto py-16 lg:px-8 xl:px-0 tracking-wide ">
				<img alt="logo_w" className="mb-10" width={87} height={31} src="/logo_w.png" />
				<h1 className="text-white font-semibold text-2xl leading-7">Start learning now</h1>
				<p className="text-white mt-1 mt-3">
					We provide an easy to use interface with adaptive content and clear direction. You'll find bitesize
					practical information from experts who are industry leaders in their field.
				</p>
				<div className="space-x-2 my-6">
					<span className="w-6 h-2 inline-block bg-white rounded-full" />
					<span className="w-2 h-2 inline-block bg-[#93CBF1] rounded-full" />
					<span className="w-2 h-2 inline-block bg-[#93CBF1] rounded-full" />
				</div>
			</div>
		</section>
	);
}
