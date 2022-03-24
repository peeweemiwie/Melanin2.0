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
	.wrapper-label {
		font-size: var(--font-size-sm);
	}
	.wrapper-icon {
		font-size: var(--font-size-sm);
		&[data-toggle-state='true'] {
			color: var(--accent-primary100);
		}
		&[data-toggle-state='false'] {
			color: var(--gray60);
		}
		svg {
			font-size: 1.5rem;
		}
	}
`;
