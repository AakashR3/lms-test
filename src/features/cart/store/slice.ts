import { createSlice } from "@reduxjs/toolkit";
import { addRootReducer } from "~/config/store/reducers";

const cartSlice = createSlice({
	name: "cart",
	initialState: {},
	reducers: {}
});

const cartReducer = { cartReducer: cartSlice.reducer };
console.log("reducer", cartReducer);

addRootReducer(cartReducer);
