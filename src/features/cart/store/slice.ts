import { toast } from "react-hot-toast";
import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";

import { CartApi } from "./query";
import { notify } from "~/helpers";
import { addRootReducer } from "~/config/store/reducers";

const { cartList, cartCheckout, cartResponse, addToCart, removeCartItem, shippingAddress } = CartApi.endpoints;

const rejectedMatches = isAnyOf(
	cartList.matchRejected,
	shippingAddress.matchRejected,
	cartCheckout.matchRejected,
	cartResponse.matchRejected,
	addToCart.matchRejected,
	removeCartItem.matchRejected
);

const initialState = {
	cartItems: [],
	isCartEmpty: true,
	isDollarCurrency: false,
	shippingDetails: {
		name: "",
		address: ""
	}
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
			.addMatcher(shippingAddress.matchFulfilled, (state, action: any) => {
				const { Data } = action.payload;
				state.shippingDetails = {
					name: `${Data.FirstName} ${Data.LastName}`,
					address: `${Data.Address1},${Data.Address2},${Data.City},${Data.State},${Data.Country} ${Data.PostalCode}`,
					...Data
				};
			})
			.addMatcher(isAnyOf(addToCart.matchFulfilled, removeCartItem.matchFulfilled), (state, action: any) => {
				const { Message } = action.payload;
				toast.success(Message, { id: "cart_error_message" });
			})
			.addMatcher(rejectedMatches, (state, action: any) => {
				const payload = action.payload;
				if (payload?.data) notify("cart_error_message", payload?.data);
			});
	}
});

export const { changeCurrencyType } = cartSlice.actions;
const cartReducer = { cartReducer: cartSlice.reducer };

addRootReducer(cartReducer);
