import { Icon } from "@iconify/react";
import { useAppSelector } from "~/config/store";
import { selectCartItems } from "./store";

function CartPage() {
	const cartItems = useAppSelector(selectCartItems);
	return (
		<main className="main-content w-full pb-8">
			<div className="flex items-center space-x-4 py-5 lg:py-6">
				<h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">Cart</h2>
			</div>
			<section className="flex gap-4">
				<div className="flex-1 flex flex-col space-y-4">
					{cartItems.map((cart: any) => (
						<div
							key={cart.id}
							className="group bg-white p-4 rounded-md rounded-md border border-gray-200 flex items-center justify-between space-x-3"
						>
							<div className="flex items-center space-x-4">
								<div className="relative flex">
									<img
										src="https://cdn.myigetit.com/customcourseimages/customcourseimages/content_63916b51-73f7-4580-a0a9-085b28ba210b.png"
										className="mask is-star h-11 w-11 origin-center object-cover"
										alt="c"
									/>
								</div>
								<div className="flex flex-col space-y-1">
									<div className="flex items-center space-x-1">
										<p className="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
											{cart.title}
										</p>
									</div>
									<p className="hidden text-xs+ text-slate-400 dark:text-navy-300">
										{cart.description}
									</p>

									<div className="flex items-center text-xs space-x-2">
										<span>{cart.no_of_course} courses</span>
										<span className="bg-gray-200 w-1.5 h-1.5 rounded-full" />
										<span>{cart.course_duration}</span>
									</div>
								</div>
							</div>
							<p className="font-inter font-medium text-primary space-x-0.5">
								<sup className="text-xs+">{cart.currency_type === "USD" ? "\u0024" : "\u20B9"}</sup>
								<span className="text-xl ">{cart.price}</span>
							</p>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-4 w-1/4">
					<div className="p-4 bg-neutral-100 flex flex-col rounded-md">
						<h6>Address</h6>
						<p className="mt-2">Steve Jonas</p>
						<p>stevejonas@gmail.com</p>
						<address className="mt-5">
							Room #1 - Grounud Floor, AL hington building, 24 B street, India 620 001
						</address>
					</div>

					<div className="p-4 bg-white rounded-md border border-gray-200 gap-4 flex flex-col">
						<div className="space-y-3">
							<label htmlFor="coupon" className="text-[#25313D]">
								Apply coupon code
							</label>
							<div className="relative flex -space-x-px">
								<input
									className="form-input peer w-full rounded-l-md border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="Enter coupon code"
									type="text"
								/>
								<button className="btn rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
									Apply
								</button>
							</div>
						</div>
						<div className="flex items-center justify-between p-1 bg-[#E6F7E966] rounded-lg">
							<div className="ml-3 text-sm font-medium text-[#4FC666]">NWQ1000</div>
							<button type="button" className="p-1.5 inline-flex h-8 w-8" aria-label="Close">
								<Icon icon="mingcute:close-fill" />
							</button>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm truncate">Total Price</p>
							<div className="inline-flex items-center text-base text-[#25313D]">$320</div>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm truncate">Discount price</p>
							<div className="inline-flex items-center text-base text-[#25313D]">$1000</div>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm truncate">Summary</p>
							<div className="inline-flex items-center text-base text-[#1869B3] font-medium">$1320</div>
						</div>
					</div>
					<button className="btn w-full h-12 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
						Proceed to Pay
					</button>
					<p className="flex select-none text-xs+ space-x-2">
						<Icon icon="mingcute:information-line" width={20} className="fill-current" />
						<span>By clicking on "Proceed to pay" you agree to the Terms of Use and Privacy Policy.</span>
					</p>
				</div>
			</section>
		</main>
	);
}

export default CartPage;
