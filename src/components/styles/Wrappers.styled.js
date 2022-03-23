import styled from 'styled-components';

export const FlexWrapper = styled.div`
	display: flex;
	${({ flexDirection }) => flexDirection === 'row' && 'flex-direction: row'};
	${({ flexDirection }) =>
		flexDirection === 'column' && 'flex-direction: column'};

	${({ columnGap }) => `column-gap: ${columnGap}`};
	${({ rowGap }) => `row-gap: ${rowGap}`};
`;
