import React from "react";
import { Icon } from "@iconify/react";
import { Modal } from "~/components";
import { dispatch, useAppSelector } from "~/config/store";
import { updateMailingAddress, useShippingAddressQuery } from "../store";
import { Spinner } from "~/components/spinner";
import { useForm } from "react-hook-form";

export const MailingAddress = React.memo(() => {
	const { isLoading } = useShippingAddressQuery();
	const { shippingDetails } = useAppSelector((state: any) => state.cartReducer);
	const [isEditAddress, setEditAddress] = React.useState<boolean>(false);
	const { register, handleSubmit } = useForm({
		mode: "onChange"
	});

	const onSubmit = async (formData: any) => {
		dispatch(updateMailingAddress(formData));
		setEditAddress(false);
	};

	return (
		<React.Fragment>
			<div className="card p-4 sm:px-5">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100">
						Mailing Address
					</h2>
					<button
						onClick={() => setEditAddress(true)}
						className="btn relative h-8 w-8 rounded-md p-0 hover:bg-slate-300/20"
					>
						<Icon className="w-4 h-4 text-primary" icon="mingcute:pencil-line" />
					</button>
				</div>
				{isLoading && (
					<div className="pt-2 space-y-2">
						<div className="skeleton animate-wave h-4 w-6/12 rounded bg-slate-150 dark:bg-navy-500" />
						<div className="skeleton animate-wave h-4 w-full rounded bg-slate-150 dark:bg-navy-500" />
					</div>
				)}
				{!isLoading && (
					<div className="pt-2 text-base">
						<p>{shippingDetails?.name}</p>
						<p>{shippingDetails?.Email}</p>
						{shippingDetails.address !== ",,, " && (
							<address className="mt-5">{shippingDetails?.address}</address>
						)}
					</div>
				)}
			</div>
			{isEditAddress && (
				<Modal title="Update Mailing Address" onCancel={() => setEditAddress(false)}>
					<div className="space-y-3">
						<label className="block">
							<span className="text-sm">Address</span>
							<textarea
								defaultValue={shippingDetails?.Address1}
								placeholder="Address"
								className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
								{...register("Address1")}
							/>
						</label>
						<div className="flex space-x-3">
							<label className="block w-1/2">
								<span className="text-sm">State</span>
								<input
									defaultValue={shippingDetails.State}
									className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="State"
									type="text"
									{...register("State")}
								/>
							</label>
							<label className="block w-1/2">
								<span className="text-sm">City</span>
								<input
									defaultValue={shippingDetails.City}
									className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="City"
									type="text"
									{...register("City")}
								/>
							</label>
						</div>
						<div className="flex space-x-3">
							<label className="block w-1/2">
								<span className="text-sm">Country</span>
								<input
									defaultValue={shippingDetails.Country}
									className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="Country"
									type="text"
									{...register("Country")}
								/>
							</label>
							<label className="block w-1/2">
								<span className="text-sm">Zip Code</span>
								<input
									defaultValue={shippingDetails.PostalCode}
									className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="Zip Code"
									type="text"
									{...register("PostalCode")}
								/>
							</label>
						</div>
					</div>
					<div className="mt-6 text-right space-x-2">
						<button
							onClick={() => setEditAddress(false)}
							className="btn h-8 rounded-full text-xs+ font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
						>
							Cancel
						</button>
						<button
							onClick={handleSubmit(onSubmit)}
							className="btn h-8 rounded-full bg-primary text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
						>
							Update
						</button>
					</div>
				</Modal>
			)}
		</React.Fragment>
	);
});
