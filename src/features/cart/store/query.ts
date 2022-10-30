import { api } from "~/config/api";
import { endPoints } from "~/config/api/endPoints";
import { getLoggedUser } from "~/helpers/auth";

export interface Cart {
	id: number;
	name: string;
	fetched_at: string;
}

type CartResponse = Cart[];

export const CartApi = api.injectEndpoints({
	endpoints: builder => {
		const user = getLoggedUser();
		return {
			cartList: builder.query<CartResponse, void>({
				query: () => ({ url: `${endPoints.cart.list}/${user.UserId}` })
			}),
			shippingAddress: builder.query<any, void>({
				query: () => ({ url: `${endPoints.cart.shippingAddress.replace("{UserID}", user.UserId)}` })
			}),
			addToCart: builder.mutation({
				query: form => {
					const user = getLoggedUser();
					return {
						url: endPoints.cart.addToCart,
						method: "POST",
						body: {
							UserID: user.UserId,
							AccountID: user.AccountId,
							SubscriptionID: form.subscriptionId,
							PurchaseType: "Monthly"
						}
					};
				}
			}),
			removeCartItem: builder.mutation({
				query: (CartID): any => {
					const user = getLoggedUser();
					console.log(CartID);
					return {
						url: endPoints.cart.removeCartItem,
						method: "DELETE",
						body: {
							UserID: user.UserId,
							CartID
						}
					};
				}
			}),
			cartCheckout: builder.mutation({
				query: body => {
					const user = getLoggedUser();
					return {
						url: endPoints.cart.payment.checkout,
						method: "POST",
						body: {
							UserID: Number(user.UserId),
							AccountID: Number(user.AccountId),
							FirstName: user.FirstName,
							MiddleName: "",
							LastName: user.LastName,
							Email: user.Email,
							ContactNumber: "917200183184",
							Address: "hyderabad",
							Quantity: 1,
							NoOfUsers: 1,
							PromoCode: "",
							TotalCount: 12,
							...body
						}
					};
				}
			}),
			cartResponse: builder.mutation({
				query: body => ({ url: endPoints.cart.payment.response, method: "POST", body })
			})
		};
	}
});

export const {
	useCartListQuery,
	useShippingAddressQuery,
	useCartCheckoutMutation,
	useCartResponseMutation,
	useAddToCartMutation,
	useRemoveCartItemMutation
} = CartApi;
