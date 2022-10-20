import React from "react";
import { Price } from "~/components";
import { useAppSelector } from "~/config/store";

import { Cart } from "../@types";

const CartItem = React.memo((cart: any) => (
	<div
		title={cart.description}
		className="group bg-white p-4 rounded-md rounded-md border border-gray-200 flex items-center justify-between space-x-3"
	>
		<div className="flex items-center space-x-4">
			<div className="relative flex">
				<img src={cart.imagePath} className="mask is-star h-11 w-11 origin-center object-cover" alt={""} />
			</div>
			<div className="flex flex-col space-y-1">
				<div className="flex items-center space-x-1">
					<p className="text-lg font-medium text-slate-700 line-clamp-1 dark:text-navy-100">{cart.title}</p>
				</div>
				<div className="flex items-center text-xs+ space-x-2">
					<span>{cart.courseCount} courses</span>
					<span className="bg-gray-200 w-1.5 h-1.5 rounded-full" />
					<span>{cart.course_duration}</span>
				</div>
			</div>
		</div>
		<Price
			isDollarCurrency={cart.isDollarCurrency}
			price={cart.isDollarCurrency ? cart.price_usd : cart.price_inr}
		/>
	</div>
));

export const CartList = React.memo(() => {
	const { cartItems, isDollarCurrency } = useAppSelector((state: any) => state.cartReducer);
	return (
		<div className="flex-1 flex flex-col space-y-4 w-2/3">
			{cartItems.map((cart: Cart) => (
				<CartItem key={cart.cartId} {...cart} isDollarCurrency={isDollarCurrency} />
			))}
		</div>
	);
});