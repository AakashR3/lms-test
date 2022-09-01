export function OtpModal({ handleVerify }: any) {
	return (
		<div
			id="defaultModal"
			className="animate-opacity backdrop-filter backdrop-blur bg-white/30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
			aria-modal="true"
			role="dialog"
		>
			<div className="relative p-4 w-full max-w-sm h-full md:h-auto">
				<div className="relative bg-white rounded-lg shadow p-10">
					<h3 className="text-xl font-semibold text-gray-900 text-center">OTP Verification</h3>
					<div id="otp" className="flex flex-row justify-between mt-5">
						{[...Array(4)].map((key) => (
							<input
								key={key}
								className="m-2 border h-12 w-12 text-center form-control rounded"
								type="text"
								id="first"
								maxLength={1}
							/>
						))}
					</div>
					<div className="flex space-x-3 my-5 items-center justify-center text-xs">
						<span className="text-[#00000099]">00:28</span>
						<span className="text-[#C7CFD761]">Resent OTP</span>
					</div>
					<button
						onClick={() => handleVerify()}
						className="block opacity-30 w-full bg-[#1868B3] tracking-wide py-3 mt-6 rounded-md text-white mb-2"
					>
						Verify
					</button>
				</div>
			</div>
		</div>
	);
}
