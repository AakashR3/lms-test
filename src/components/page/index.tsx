import classNames from "classnames";
import React, { PropsWithChildren } from "react";

export interface IPage {
	title?: string;
	harizontal?: boolean;
}
function Page(props: PropsWithChildren<IPage>) {
	const { title, children, harizontal = true } = props;
	const wrapper = classNames("main w-full h-full px-[var(--margin-x)] pb-8 flex", { "flex-col": harizontal });
	return (
		<section className={wrapper}>
			{title && (
				<div className="flex items-center space-x-4 py-5 lg:py-6">
					<h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">{title}</h2>
				</div>
			)}
			{children}
		</section>
	);
}

export default React.memo(Page);
