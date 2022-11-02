import React from "react";
import { Icon } from "@iconify/react";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

import { Page, Price } from "~/components";
import { Spinner } from "~/components/spinner";
import { dispatch, useAppSelector } from "~/config/store";
import { MailingAddress, CartList, AgreePrivacyPolicy, EmptyCart, CartSuccess } from "./components";
import { changeCurrencyType, useCartCheckoutMutation, useCartListQuery, useCartResponseMutation } from "./store";

type RazorpayOption = RazorpayOptions & { subscription_id?: string };

function CartPage() {
	const Razorpay = useRazorpay();
	// const navigate = useNavigate();
	const { isLoading, refetch } = useCartListQuery();
	const [checkout, checkoutOption] = useCartCheckoutMutation();
	const [isPaymentSuccess, setIspaymentSuccess] = React.useState<boolean>(false);
	const [checkoutResponse, checkoutResponseOption] = useCartResponseMutation();
	const { isCartEmpty, cartItems, isDollarCurrency } = useAppSelector((state: any) => state.cartReducer);

	const handleRazorpayPayment = React.useCallback(
		({ data }: any) => {
			const { Data } = data;
			const options: RazorpayOption = {
				key: Data.RazorpayKey,
				amount: Data.Amount,
				currency: Data.Currency,
				name: "TATA Technologies",
				order_id: Data?.OrderID || null,
				subscription_id: Data?.RZP_SubscriptionID,
				prefill: {
					email: Data.Email,
					contact: Data.ContactNumber
				},
				handler: async res => {
					console.log(res);
					await checkoutResponse({
						...Data,
						Signature: res.razorpay_signature,
						PaymentID: res.razorpay_payment_id,
						ChargeAt: Data?.DtChargeAt || 0,
						StartAt: Data?.DtStartAt || 0,
						EndAt: Data?.DtEndAt || 0,
						TrialStartAt: Data?.DtTrialStartAt || 0,
						TrialEndAt: Data?.DtTrialEndAt || 0,
						PlanName: Data?.PlanName?.toString() || ""
					}).unwrap();
					refetch();
					setIspaymentSuccess(true);
				}
			};
			const rzpay = new Razorpay(options);
			rzpay.open();
		},
		[Razorpay]
	);

	const handleCheckout = () => {
		const { CartID, PurchaseType, SubscriptionID, PlanCode, IsTrial } = cartItems[0];
		checkout({
			IsTrial,
			PlanCode,
			PurchaseType,
			SubscriptionID,
			CartID
		}).then(handleRazorpayPayment);
	};

	if (isPaymentSuccess) return <CartSuccess />;

	if (isLoading || isCartEmpty) return isLoading ? <Spinner /> : <EmptyCart />;

	return (
		<Page title="Cart">
			{(checkoutOption.isLoading || checkoutResponseOption.isLoading) && (
				<div className="absolute inset-0 z-[99] bg-slate-900/60 backdrop-blur transition-opacity duration-300 flex items-center justify-center ">
					<Spinner />
				</div>
			)}
			<div className="alert flex overflow-hidden rounded-lg bg-info/10 text-info dark:bg-info/15">
				<div className="w-1.5 text-info" />
				<div className="flex flex-1 items-center space-x-3 p-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<div className="flex-1">
						System will support purchase of one cart item for now. Kindly remove the other items or system
						will consider only the first item displayed in the cart.
					</div>
				</div>
			</div>
			<section className="flex gap-4 mt-5">
				<CartList />
				<div className="flex shirnk-0 flex-col gap-4 w-1/3">
					<MailingAddress />
					<div className="card p-4 border border-gray-200 gap-4 flex flex-col">
						<div className="space-y-3">
							<h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
								Apply coupon code
							</h2>
							<div className="relative flex">
								<input
									className="form-input peer w-full rounded-l-md border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:none dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
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
							<Price
								isDollarCurrency={isDollarCurrency}
								price={isDollarCurrency ? cartItems[0].Price_USD : cartItems[0].Price_INR}
							/>
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm truncate">Discount price</p>
							<Price isDollarCurrency={isDollarCurrency} price="0" />
						</div>

						<div className="flex items-center space-x-4">
							<p className="flex-1 text-sm truncate">Summary</p>
							<Price
								isDollarCurrency={isDollarCurrency}
								price={isDollarCurrency ? cartItems[0].Price_USD : cartItems[0].Price_INR}
							/>
						</div>
					</div>

					<div className="flex space-x-3">
						<select
							onChange={(e: any) => dispatch(changeCurrencyType(e.target.value))}
							className="form-select w-18 rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:none dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
						>
							<option value="INR">INR</option>
							<option value="USD">USD</option>
						</select>
						<button
							disabled={checkoutOption.isLoading}
							onClick={() => handleCheckout()}
							className="flex-1 btn text-lg bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 disabled:pointer-events-none disabled:select-none disabled:opacity-60 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
						>
							Proceed to pay
						</button>
					</div>
					<AgreePrivacyPolicy />
				</div>
			</section>
		</Page>
	);
}

export default CartPage;
