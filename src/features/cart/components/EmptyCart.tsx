import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const EmptyCart = React.memo(() => (
	<section className="hidden flex flex-col h-full items-center justify-center max-w-sm mx-auto">
		<Icon icon="pajamas:warning-solid" className="text-red-500 mb-3" fontSize={90} />
		<h1 className="text-[#25313D] text-lg font-semibold">Your cart is empty</h1>
		<p className="text-[#020A1299] my-2 text-center">
			Please check your payment details / internet connection and try again
		</p>
		<Link
			to="/library"
			className="hover:(bg-gray-50) rounded text-[#020A1299] border bg-white py-1 px-3 font-medium font-sm flex justify-center items-center gap-2"
		>
			<span>Go to library</span>
			<Icon icon="heroicons-solid:arrow-narrow-right" fontSize={20} />
		</Link>
	</section>
));
