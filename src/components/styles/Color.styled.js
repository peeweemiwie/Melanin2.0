import styled from 'styled-components';
import { Card } from './Card.styled';

export const CardColor = styled.div`
	align-items: center;
	border: 3px solid ${({ bg }) => bg};
	border-radius: 0.5rem;
	color: var(--text-dark);
	column-gap: 0.5rem;
	display: flex;
	font-family: var(--font-family--roboto);
	padding: 1rem;
	width: min(100% - 2rem, 30rem);
	.swatch {
		background-color: ${({ bg }) => bg};
		border-radius: 5px;
		height: 3rem;
		width: 3rem;
	}
	.bordered {
		background-color: var(--gray20);
		border: 1px solid var(--gray60);
		border-radius: 1rem;
		padding: 0.5rem 1rem;
	}
`;

export const ContainerColors = styled(Card)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`;
