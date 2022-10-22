import useRazorpay, { RazorpayOptions } from "react-razorpay";
import { MailingAddress, CartList, AgreePrivacyPolicy, EmptyCart } from "./components";
import { Page, Price } from "~/components";
import { Spinner } from "~/components/spinner";
import { dispatch, useAppSelector } from "~/config/store";
import { changeCurrencyType, useCartCheckoutMutation, useCartListQuery, useCartResponseMutation } from "./store";
import { Icon } from "@iconify/react";
import React from "react";
import { useNavigate } from "react-router-dom";

type RazorpayOption = RazorpayOptions & { subscription_id?: string };

function CartPage() {
	const Razorpay = useRazorpay();
	const { isLoading, refetch } = useCartListQuery();
	const navigate = useNavigate();
	const [checkout, checkoutOption] = useCartCheckoutMutation();
	const [checkoutResponse, checkoutResponseOption] = useCartResponseMutation();
	const { isCartEmpty, cartItems, isDollarCurrency } = useAppSelector((state: any) => state.cartReducer);

	const handleRazorpayPayment = React.useCallback(
		({ data }: any) => {
			const { Data } = data;
			const options: RazorpayOption = {
				key: Data.razorpayKey,
				amount: Data.amount,
				currency: Data.currency,
				name: "CodinLMS",
				order_id: Data?.orderId || null,
				subscription_id: Data?.rzp_subscriptionId,
				prefill: {
					email: Data.email,
					contact: Data.contactNumber
				},
				handler: async res => {
					await checkoutResponse({
						...res,
						id: Data.id,
						userId: Data.userId,
						accountId: Data.accountId,
						firstName: Data.firstName,
						middleName: Data.middleName,
						lastName: Data.lastName,
						address: Data.address,
						email: Data.email,
						contact_number: Data.contactNumber,
						plan_name: Data?.planName?.toString(),
						rzp_planId: Data.planID,
						quantity: Data.quantity,
						no_of_users: Data.no_of_users,
						transactionId: "string",
						orderId: res.razorpay_order_id,
						signature: res.razorpay_signature,
						paymentId: res.razorpay_payment_id,
						subscriptionId: Data.razorpay_subscription_id,
						rzp_subscriptionId: Data.rzp_subscriptionId,
						amount: Data.amount,
						chargeAt: Data.dtChargeAt,
						startAt: Data.dtStartAt,
						endAt: Data.dtEndAt,
						trial_startAt: Data.dtTrialStartAt,
						trial_endAt: Data.dtTrialEndAt,
						isTrial: Data.isTrial,
						purchaseType: Data.purchaseType,
						cartId: Data.cartId
					}).unwrap();
					refetch();
					navigate("/cart-success");
				}
			};
			const rzpay = new Razorpay(options);
			rzpay.open();
		},
		[Razorpay]
	);

	const handleCheckout = () => {
		const { cartId, purchaseType, subscriptionId, planCode } = cartItems[0];
		checkout({
			planCode,
			purchaseType,
			subscriptionId,
			cartId
		}).then(handleRazorpayPayment);
	};

	if (isLoading || isCartEmpty) return isLoading ? <Spinner /> : <EmptyCart />;

	return (
		<Page title="Cart">
			{(checkoutOption.isLoading || checkoutResponseOption.isLoading) && (
				<div className="absolute inset-0 z-[99] bg-slate-900/60 backdrop-blur transition-opacity duration-300 flex items-center justify-center ">
					<Spinner />
				</div>
			)}
			<section className="flex gap-4">
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
								price={isDollarCurrency ? cartItems[0].price_usd : cartItems[0].price_inr}
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
								price={isDollarCurrency ? cartItems[0].price_usd : cartItems[0].price_inr}
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
