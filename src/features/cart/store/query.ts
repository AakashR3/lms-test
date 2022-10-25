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
	endpoints: builder => ({
		cartList: builder.query<CartResponse, void>({
			query: () => {
				const user = getLoggedUser();
				return { url: `${endPoints.cart.list}/${user.UserId}` };
			}
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
		cartCheckout: builder.mutation({
			query: body => {
				const user = getLoggedUser();
				return {
					url: endPoints.cart.payment.checkout,
					method: "POST",
					body: {
						userId: user.UserId,
						accountId: user.AccountId,
						firstName: user.FirstName,
						middleName: "",
						lastName: user.LastName,
						email: user.Email,
						contactNumber: "917200183184",
						address: "hyderabad",
						quantity: 1,
						no_of_users: 1,
						promoCode: "",
						isTrial: 0,
						totalCount: 12,
						...body
					}
				};
			}
		}),
		cartResponse: builder.mutation({
			query: body => ({ url: endPoints.cart.payment.response, method: "POST", body })
		})
	})
});

export const { useCartListQuery, useCartCheckoutMutation, useCartResponseMutation, useAddToCartMutation } = CartApi;
