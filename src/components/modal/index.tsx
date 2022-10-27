import classNames from "classnames";
import type { PropsWithChildren } from "react";

interface Props {
	title: string;
	onCancel: VoidFunction;
}

const style = {
	wrapper: classNames(
		"fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 ",
		"sm:px-5"
	),
	backdrop: classNames("absolute inset-0 bg-slate-900/60 transition-opacity duration-300")
};

function Modal({ children, title, onCancel }: PropsWithChildren<Props>) {
	return (
		<div className={style.wrapper} role="dialog">
			<div className={style.backdrop} />
			<div className="relative max-w-md rounded-lg bg-white px-4 pb-4 transition-all duration-300 dark:bg-navy-700 sm:px-5">
				<div className="my-3 flex h-8 items-center justify-between">
					<h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 text-lg">
						{title}
					</h2>
					{onCancel && (
						<button
							onClick={onCancel}
							className="btn -mr-1.5 h-7 w-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4.5 w-4.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					)}
				</div>
				{children}
			</div>
		</div>
	);
}

export default Modal;
