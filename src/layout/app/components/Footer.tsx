import { Link } from "react-router-dom";

export function AppFooter() {
	return (
		<footer className="px-[var(--margin-x)] transition-[padding,width] duration-[.25s] relative bg-white border-t text-sm">
			<section className="flex items-center justify-between py-4">
				<span>&copy; Tata Technologies</span>
				<div className="items-center text-sm text-gray-500 space-x-6">
					<Link to="#!" className="no-underline hover:underline">
						Help
					</Link>
					<Link to="a" className="no-underline hover:underline">
						Privacy Policy
					</Link>
					<Link to="a" className="no-underline hover:underline">
						Terms of Use
					</Link>
				</div>
			</section>
		</footer>
	);
}
