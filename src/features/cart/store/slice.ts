import { createSlice } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartItems: [
			{
				id: 1,
				title: "i GET IT Professional Engineer Bundle Annual Subscription",
				description: "i GET IT Professional Engineer Bundle Annual Subscription",
				image: "/sample.png",
				price: 499,
				discount_price: 0,
				currency_type: "USD",
				course_duration: "3 Months",
				no_of_course: 40,
				subscribtion: true
			}
		]
	},
	reducers: {}
});

export const selectCartItems = (state: any) => state.cartReducer.cartItems;

const cartReducer = { cartReducer: cartSlice.reducer };

addRootReducer(cartReducer);
