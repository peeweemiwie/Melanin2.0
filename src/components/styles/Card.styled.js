import styled from 'styled-components';

export const Card = styled.div`
	border: 1px solid var(--gray60);
	padding: var(--space1);
`;

export const CardLight = styled.div`
	background-color: var(--gray0);
	padding: var(--space1);
	margin-block-end: var(--space1);
`;

export const CardTitle = styled.h4`
	color: var(--gray80);
	font-size: var(--font-size-sm);
	margin: 0 0 0.5em 0;
	text-transform: uppercase;
`;
