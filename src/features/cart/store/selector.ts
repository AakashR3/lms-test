export const selectCartItems = (state: any) => state.cartReducer.cartItems;
export const CartIsEmpty = (state: any) => !state.cartReducer.cartItems.length;
