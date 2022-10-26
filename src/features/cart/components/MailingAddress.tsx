import React from "react";
import { Icon } from "@iconify/react";
import { Modal } from "~/components";

export const MailingAddress = React.memo(() => {
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
						className="hidden btn relative h-8 w-8 rounded-md p-0 hover:bg-slate-300/20"
					>
						<Icon className="w-4 h-4 text-primary" icon="mingcute:pencil-line" />
					</button>
				</div>
				<div className="pt-2 text-base">
					<p>Steve Jonas</p>
					<p>stevejonas@gmail.com</p>
					<address className="mt-5">
						Room #1 - Grounud Floor, AL hington building, 24 B street, India 620 001
					</address>
				</div>
			</div>
			{isEditAddress && (
				<Modal title="Update Mailing Address" onCancel={() => setEditAddress(false)}>
					address
				</Modal>
			)}
		</React.Fragment>
	);
});
