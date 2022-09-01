import { FloatingLabelInput } from '~/components/FloatingLabelInput';
import { Link } from '@tanstack/react-location';

function SsoLoginContainer() {
	return (
		<div className="animate-opacity">
			<h1 className="tracking-wide font-bold text-2xl leading-7 mb-2 mt-5">Single Sign On</h1>
			<p className="tracking-wide text-sm font-normal text-[#00000099] mb-7">
				If your company has single sign-on set-up with i GET IT, enter your company's web address to access your
				unique login page. The format needs to be as such: "domainname.com".
			</p>
			<FloatingLabelInput name="domain" label="Domain Name" />
			<button className="block w-full bg-[#1869B3] py-4 font-bold mt-4 rounded-md text-white mb-2">
				Proceed
			</button>
			<Link to="/auth" className="flex space-x-1 tracking-wide text-sm font-normal text-[#00000099] mt-7">
				<span>Not an enterprise user?</span>
				<span className="text-[#1869B3] underline cursor-pointer">Login</span>
			</Link>
		</div>
	);
}

export default SsoLoginContainer;
