import React from "react";

export interface IInterface {
	price: string;
	isDollarCurrency: boolean;
}

export const Price = React.memo(({ price, isDollarCurrency }: IInterface) => {
	return (
		<p className="font-medium text-primary space-x-0.5">
			<sup className="text-xs+">{isDollarCurrency ? "\u0024" : "\u20B9"}</sup>
			<span className="text-xl">{price}</span>
		</p>
	);
});
