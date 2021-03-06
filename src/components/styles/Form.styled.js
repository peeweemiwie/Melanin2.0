import styled from 'styled-components';

export const LeftNavFormStyled = styled.div`
	background-color: var(--gray20);
	grid-area: leftNav;
	padding: var(--space1);
	padding-top: 6rem;
`;

export const InputIconWrapperStyled = styled.div`
	align-items: center;
	display: inline-flex;
	svg {
		color: var(--gray80);
		margin-left: -1.5rem;
	}
`;

export const LabelStyled = styled.label`
	align-items: center;
	color: var(--text-dark);
	column-gap: 0.5em;
	display: flex;
	font-size: var(--font-size-sm);
	.wrapper-required {
		color: var(--accent-warning100);
		font-size: var(--font-size-md);
		line-height: 0;
		margin-left: -6px;
	}
`;

export const MessageContainer = styled.p`
	align-items: center;
	column-gap: 0.5em;
	display: flex;
	font-size: var(--font-size-sm);
	margin: 0;
	&.danger {
		color: var(--accent-danger100);
	}
	&.warning {
		color: var(--accent-warning100);
	}
	&.success {
		color: var(--accent-success100);
	}
`;

export const InputTextStyled = styled.input`
	border: 1px solid var(--gray60);
	border-radius: 4px;
	padding: 0.3rem;
	&.danger {
		border-color: var(--accent-danger100);
	}
	&.warning {
		border-color: var(--accent-warning100);
	}
	&.success {
		border-color: var(--accent-success100);
	}
	&::placeholder {
		color: var(--gray80);
	}
`;
