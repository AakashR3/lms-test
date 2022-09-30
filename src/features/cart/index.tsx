import React, { Fragment } from "react";
import { EmptyCart } from "~/features/cart/components";
import { Icon } from "@iconify/react";
import { FloatingLabelInput } from "~/components/FloatingLabelInput";

function CartPage() {
	return (
		<section className="flex flex-col">
			<section className="flex items-center bg-[#EFF8FC] h-30">
				<h1 className="text-[#020A12DE] font-bold text-2xl container mx-auto px-4">Cart</h1>
			</section>
			<section className="container mx-auto px-4 flex w-full gap-6 py-6">
				<div className="w-1/3">
					<h1 className="text-2xl font-bold">In cart</h1>
					<p className="text-[#6A7681] text-sm">Please share your payment details to proceed</p>
					<div className="flex p-3 bg-white rounded-lg border border-gray-200 mt-5">
						<img src="/assets/images/sample_lib.png" alt="lib" height={70} />
						<div className="flex flex-col p-3 gap-1">
							<h5 className="text-lg font-bold text-[#25313D]">CATIA V5 training subscription</h5>
							<div className="flex items-center text-xs space-x-2 text-[#697179]">
								<span>44 courses</span>
								<span className="bg-gray-200 w-2 h-2 rounded-full" />
								<span className="underline cursor-pointer">Remove</span>
							</div>
						</div>
					</div>
					<div className="p-4 bg-white rounded-lg border border-gray-200 mt-6 gap-4 flex flex-col">
						<div className="space-y-1">
							<label htmlFor="coupon" className="text-[#25313D]">
								Apply coupon code
							</label>
							<div className="flex">
								<input
									id="coupon"
									className="focus:outline-none rounded-none rounded-l-lg border block flex-1 w-full text-sm p-2.5 border-r-0"
									placeholder="Enter referral code"
								/>
								<button className="hover:(bg-[#1268B3] bg-opacity-20) inline-flex items-center px-3 text-sm text-[#1268B3] rounded-r-md border border-[#1268B3]">
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
							<p className="flex-1 text-sm text-[#697179] truncate">Neil Sims</p>
							<div className="inline-flex items-center text-base text-[#25313D]">$320</div>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm text-[#697179] truncate">Discount price</p>
							<div className="inline-flex items-center text-base text-[#25313D]">$1000</div>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm text-[#697179] truncate">Total</p>
							<div className="inline-flex items-center text-base text-[#1869B3] font-medium">$1320</div>
						</div>
					</div>

					<div className="text-lg text-[rgba(2, 10, 18, 0.87)] my-2 font-semibold mt-5">Try 7 days trail</div>
					<label
						htmlFor="7"
						className="hover:(border-[#3098E4] bg-[#E2F5FF82]) flex items-baseline p-4 bg-white rounded-lg border select-none space-x-3 cursor-pointer"
					>
						<input type="checkbox" id="7" />
						<div className="flex flex-col">
							<h5 className="text-gray-900 font-semibold">7 days trail</h5>
							<p className="font-normal text-[#020A1299] text-sm">
								Access your custom training plan for 7 days
							</p>
						</div>
					</label>
				</div>
				<div className="w-2/3">
					<h1 className="text-2xl font-bold">Payment details</h1>
					<p className="text-[#6A7681] text-sm mb-5">Please share your payment details to proceed</p>
					<div className="flex gap-3 mb-5 w-full">
						<label
							htmlFor="cc"
							className="group bg-[#E2F5FF82]) hover:(border-[#3098E4] bg-[#E2F5FF82]) w-full flex flex-col items-start py-4 px-5 bg-white rounded-lg border select-none space-y-1.5 cursor-pointer"
						>
							<input
								type="radio"
								id="cc"
								name="pay-type"
								className="w-4 h-4 text-[#1268B3] bg-gray-100 border-gray-300 focus:ring-[#1268B3]"
							/>
							<div className="flex justify-between w-full">
								<div className="flex flex-col">
									<h5 className="text-gray-900 font-semibold">Credit card</h5>
									<p className="font-normal text-[#020A1299] text-sm">Master card / Visa</p>
								</div>
								<Icon
									icon="mingcute:bank-card-line"
									className="text-5xl text-[#020A12BD] group-hover:text-[#1268B3]"
									width={40}
								/>
							</div>
						</label>
						<label
							htmlFor="paypal"
							className="group hover:(border-[#3098E4] bg-[#E2F5FF82]) w-full flex flex-col items-start py-4 px-5 bg-white rounded-lg border select-none space-y-1.5 cursor-pointer"
						>
							<input
								type="radio"
								id="paypal"
								name="pay-type"
								className="w-4 h-4 text-[#1268B3] bg-gray-100 border-gray-300 focus:ring-[#1268B3]"
							/>
							<div className="flex justify-between w-full">
								<div className="flex flex-col flex-1">
									<h5 className="text-gray-900 font-semibold">Credit card</h5>
									<p className="font-normal text-[#020A1299] text-sm">Online payment</p>
								</div>
								<Icon
									icon="mingcute:paypal-line"
									className="text-5xl text-[#020A12BD] group-hover:text-[#1268B3]"
									width={40}
								/>
							</div>
						</label>

						<label
							htmlFor="razorpay"
							className="group hover:(border-[#3098E4] bg-[#E2F5FF82]) w-full flex flex-col items-start py-4 px-5 bg-white rounded-lg border select-none space-y-1.5 cursor-pointer"
						>
							<input
								type="radio"
								id="razorpay"
								name="pay-type"
								className="w-4 h-4 text-[#1268B3] bg-gray-100 border-gray-300 focus:ring-[#1268B3]"
							/>
							<div className="flex justify-between w-full">
								<div className="flex flex-col">
									<h5 className="text-gray-900 font-semibold">Razorpay</h5>
									<p className="font-normal text-[#020A1299] text-sm">Online payment</p>
								</div>
								<Icon
									icon="simple-icons:razorpay"
									className="text-5xl text-[#020A12BD] group-hover:text-[#1268B3]"
									width={40}
								/>
							</div>
						</label>
					</div>
					<div className="pt-4 pb-6 px-5 w-full bg-white rounded-lg border">
						<form className="flex flex-col gap-4" action="#">
							<h5 className="font-medium text-[#020A12BD]">Card information</h5>
							<div className="flex gap-3">
								<FloatingLabelInput name="Card holder name" />
								<FloatingLabelInput name="Card number" />
							</div>
							<div className="flex gap-3">
								<FloatingLabelInput name="Exp. month/year" />
								<FloatingLabelInput name="CVV" />
							</div>
						</form>
					</div>

					<div className="pt-4 pb-6 px-5 w-full bg-white rounded-lg border mt-4">
						<form className="flex flex-col gap-4" action="#">
							<h5 className="font-medium text-[#020A12BD]">information</h5>
							<div className="flex gap-3">
								<FloatingLabelInput name="First name" />
								<FloatingLabelInput name="Last name" />
							</div>
							<div className="flex gap-3">
								<FloatingLabelInput name="Email" />
							</div>
						</form>
					</div>

					<div className="flex items-center select-none mt-4 text-[#0000008A]">
						<Icon icon="mingcute:information-line" width={18} className="fill-current" />
						<label htmlFor="agree" className="relative cursor-pointer ml-1.5 block text-sm">
							By clicking on "Submit" you agree to the Terms of Use and Privacy Policy.
						</label>
					</div>
					<button className="btn w-auto px-4 py-2 font-normal">Submit</button>

					<div className="flex items-center select-none mt-4 text-[#0000008A]">
						<Icon icon="mingcute:information-line" width={18} className="fill-current" />
						<label htmlFor="agree" className="relative cursor-pointer ml-1.5 block text-sm">
							By clicking on "subscribe with Paypal" you agree to the Terms of Use and Privacy Policy.
						</label>
					</div>
					<button className="btn w-auto px-4 py-2 font-normal">Subscribe with Paypal</button>

					<div className="flex items-center select-none mt-4 text-[#0000008A]">
						<Icon icon="mingcute:information-line" width={18} className="fill-current" />
						<label htmlFor="agree" className="relative cursor-pointer ml-1.5 block text-sm">
							By clicking on "Proceed to pay" you agree to the Terms of Use and Privacy Policy.
						</label>
					</div>
					<button className="btn w-auto px-4 py-2 font-normal">Proceed to pay</button>
				</div>
			</section>
		</section>
	);
}

export default CartPage;
