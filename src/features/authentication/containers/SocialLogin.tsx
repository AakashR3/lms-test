import { Icon } from '@iconify/react';

export function SocialLogin() {
	return (
		<section className="flex-col mt-10 space-y-5">
			<div className="relative">
				<hr className="h-1 w-full" />
				<span className="text-sm font-semibold absolute -top-3 bg-[#fafafa] text-[#646464] pr-2">
					You can also continue with
				</span>
			</div>
			<div className="flex space-x-3">
				<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="flat-color-icons:google" />
				</button>
				<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:linkedin-box-fill" color="#0e76a8" />
				</button>

				<button className="inline-flex w-12 h-12 rounded-md items-center justify-center border bg-white border-color[#eee]">
					<Icon width={22} icon="akar-icons:facebook-fill" color="#3b5998" />
				</button>
			</div>
		</section>
	);
}
