import React from 'react';
import { Box } from '~/components/UI/FlexBox';
import { Icon } from '@iconify/react';

export function FloatingLabelInput({ type, name, label }: any) {
	const [active, setActive] = React.useState(false);
	const [showPassword, setShowPassword] = React.useState(false);

	function handleActivation(e: any) {
		setActive(!!e.target.value);
	}

	return (
		<Box tw="h-12 relative border rounded-md bg-white text-[rgba(0,0,0,0.6)] w-full border-color[#D7DBE0]">
			<Box
				as="input"
				autoComplete="off"
				tw={[
					'h-12 leading-8 outline-none cursor-text w-full rounded-md bg-transparent text-sm transition-all duration-200 ease-in-out py-2 px-3',
					active ? 'pt-6' : '',
					type === 'password' ? 'pr-11' : ''
				].join(' ')}
				id={name}
				name={name}
				type={showPassword ? 'text' : type || 'text'}
				onChange={handleActivation}
			/>
			<Box
				as="label"
				tw={[
					'absolute cursor-text h-12 top-0 left-0 flex items-center py-2 px-3 transition-all duration-200 ease-in-out',
					active ? 'text-[10px] h-auto' : 'text-sm'
				].join(' ')}
				htmlFor={name}
			>
				{label}
			</Box>
			{type === 'password' && (
				<Box
					as="button"
					onClick={() => setShowPassword(!showPassword)}
					tw="absolute top-0 right-0 h-11 w-12 inline-flex items-center justify-center focus:outline-none"
				>
					<Icon color='rgba(55, 65, 81, 1)' icon={!showPassword ? 'akar-icons:eye' : 'akar-icons:eye-slashed'} width={24} />
				</Box>
			)}
		</Box>
	);
}