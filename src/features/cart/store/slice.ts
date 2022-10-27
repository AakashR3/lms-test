import { toast } from "react-hot-toast";
import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import { CartApi } from "./query";
import { notify } from "~/helpers";
import { addRootReducer } from "~/config/store/reducers";

const { cartList, cartCheckout, cartResponse, addToCart, removeCartItem } = CartApi.endpoints;

const rejectedMatches = isAnyOf(
	cartList.matchRejected,
	cartCheckout.matchRejected,
	cartResponse.matchRejected,
	addToCart.matchRejected,
	removeCartItem.matchRejected
);

const initialState = {
	cartItems: [],
	isCartEmpty: true,
	isDollarCurrency: false
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		changeCurrencyType: (state, action: PayloadAction<string>) => {
			state.isDollarCurrency = action.payload === "USD";
		}
	},
	extraReducers(builder) {
		builder
			.addMatcher(cartList.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.isCartEmpty = !Data?.length;
				state.cartItems = Data || [];
			})
			.addMatcher(isAnyOf(addToCart.matchFulfilled, removeCartItem.matchFulfilled), (state, action: any) => {
				const { Message } = action.payload;
				toast.success(Message);
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const { data } = action.payload;
				notify("cart_error_message", data);
			});
	}
});

export const { changeCurrencyType } = cartSlice.actions;
const cartReducer = { cartReducer: cartSlice.reducer };

addRootReducer(cartReducer);
