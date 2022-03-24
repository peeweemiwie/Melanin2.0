import styled from 'styled-components';

export const LabelCheckbox = styled.label`
	align-items: center;
	color: var(--text-dark);
	display: flex;
	margin-block: 0.5rem;
	&[data-toggle='true'] {
		justify-content: space-between;
	}
	input {
		margin-right: 0.5em;
		&[data-toggle='true'] {
			left: -500rem;
			position: absolute;
		}
	}
	svg {
		font-size: 1.5rem;
	}
	span {
		font-size: var(--font-size-sm);
	}
`;
