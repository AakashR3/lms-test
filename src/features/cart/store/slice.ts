import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";
import { notify } from "~/helpers";
import { CartApi } from "./query";

const { cartList, cartCheckout, cartResponse } = CartApi.endpoints;

const rejectedMatches = isAnyOf(cartList.matchRejected, cartCheckout.matchRejected, cartResponse.matchRejected);

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
				state.isCartEmpty = !Data.length;
				state.cartItems = Data;
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