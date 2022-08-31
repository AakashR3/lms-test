import { styled } from '@twind/react';

export const Box = styled();

export const FlexBox = styled(Box, {
	base: `flex`
});

export const Container = styled('section', {
	base: `container mx-auto`
});
