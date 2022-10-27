import React from "react";
import { Icon } from "@iconify/react";
import { Modal } from "~/components";
import { getLoggedUser } from "~/helpers/auth";

export const MailingAddress = React.memo(() => {
	const user = getLoggedUser();
	const [isEditAddress, setEditAddress] = React.useState<boolean>(false);
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
				<div className="pt-2 text-base">
					<p>
						{user.FirstName} {user.LastName}
					</p>
					<p>{user.Email}</p>
					<address className="mt-5">
						Room #1 - Grounud Floor, AL hington building, 24 B street, India 620 001
					</address>
				</div>
			</div>
			{isEditAddress && (
				<Modal title="Update Mailing Address" onCancel={() => setEditAddress(false)}>
					<div className="space-y-3">
						<label className="block">
							<span className="text-sm">Address</span>
							<textarea
								placeholder=" Enter Text"
								className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
							></textarea>
						</label>
						<div className="flex space-x-3">
							<label className="block w-1/2">
								<span className="text-sm">Country</span>
								<select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
									<option>Laravel</option>
									<option>Node JS</option>
									<option>Django</option>
									<option>Other</option>
								</select>
							</label>
							<label className="block w-1/2">
								<span className="text-sm">State</span>
								<select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
									<option>Laravel</option>
									<option>Node JS</option>
									<option>Django</option>
									<option>Other</option>
								</select>
							</label>
						</div>
						<div className="flex space-x-3">
							<label className="block w-1/2">
								<span className="text-sm">City</span>
								<select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
									<option>Laravel</option>
									<option>Node JS</option>
									<option>Django</option>
									<option>Other</option>
								</select>
							</label>
							<label className="block w-1/2">
								<span className="text-sm">Zip Code</span>
								<input
									className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
									placeholder="URL Address"
									type="text"
								/>
							</label>
						</div>
					</div>
					<div className="mt-6 text-right">
						<button
							onClick={() => setEditAddress(false)}
							className="btn h-8 rounded-full text-xs+ font-medium text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25"
						>
							Cancel
						</button>
						<button className="btn h-8 rounded-full bg-primary text-xs+ font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
							Update
						</button>
					</div>
				</Modal>
			)}
		</React.Fragment>
	);
});
