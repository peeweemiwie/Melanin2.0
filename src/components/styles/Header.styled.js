import styled from 'styled-components';

const StyledHeader = styled.header`
	align-items: center;
	background-color: var(--brand-secondary100);
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
	column-gap: var(--space1);
	display: flex;
	grid-area: header;
	padding: var(--space1);
	position: fixed;
	width: 100%;
	z-index: 10;
`;

export default StyledHeader;
