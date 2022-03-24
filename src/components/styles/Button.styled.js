import styled from 'styled-components';

const colorNames = {
	primary: 'var(--accent-primary100)',
	secondary: 'var(--accent-secondary100)',
	danger: 'var(--accent-danger100)',
	warning: 'var(--accent-warning100)',
	success: 'var(--accent-success100)',
	textLight: 'var(--text-light)',
	textDark: 'var(--text-dark)',
};

export const Btn = styled.button`
	align-items: center;
	border: 1px solid transparent;
	column-gap: 0.5rem;
	cursor: pointer;
	display: flex;
	padding: 0.8em 1em;
	transition: box-shadow 0.3s ease-in-out;

	${({ bg }) => bg === 'primary' && `background-color: ${colorNames.primary}`};
	${({ bg }) =>
		bg === 'secondary' && `background-color: ${colorNames.secondary}`};
	${({ bg }) => bg === 'danger' && `background-color: ${colorNames.danger}`};
	${({ bg }) => bg === 'warning' && `background-color: ${colorNames.warning}`};
	${({ bg }) => bg === 'success' && `background-color: ${colorNames.success}`};
	${({ bg }) => bg === 'transparent' && 'background-color: transparent'};

	${({ borderColor }) =>
		borderColor === 'primary' && `border-color: ${colorNames.primary}`};
	${({ borderColor }) =>
		borderColor === 'secondary' && `border-color: ${colorNames.secondary}`};
	${({ borderColor }) =>
		borderColor === 'danger' && `border-color: ${colorNames.danger}`};
	${({ borderColor }) =>
		borderColor === 'warning' && `border-color: ${colorNames.warning}`};
	${({ borderColor }) =>
		borderColor === 'success' && `border-color: ${colorNames.success}`};
	${({ borderColor }) =>
		borderColor === 'transparent' && 'border-color: transparent'};

	${({ color }) => color === 'light' && `color: ${colorNames.textLight}`};
	${({ color }) => color === 'dark' && `color: ${colorNames.textDark}`};
	${({ color }) => color === 'primary' && `color: ${colorNames.primary}`};
	${({ color }) => color === 'secondary' && `color: ${colorNames.secondary}`};
	${({ color }) => color === 'danger' && `color: ${colorNames.danger}`};
	${({ color }) => color === 'warning' && `color: ${colorNames.warning}`};
	${({ color }) => color === 'success' && `color: ${colorNames.success}`};

	${({ size }) => size === 'sm' && 'font-size: .8rem'};
	${({ size }) => size === 'md' && 'font-size: 1rem'};
	${({ size }) => size === 'lg' && 'font-size: 1.2rem'};

	${({ borderRadius }) => borderRadius === 'none' && 'border-radius: 0'};
	${({ borderRadius }) => borderRadius === 'sm' && 'border-radius: .4rem'};
	${({ borderRadius }) => borderRadius === 'md' && 'border-radius: .8rem'};
	${({ borderRadius }) => borderRadius === 'lg' && 'border-radius:  1rem'};

	${({ display }) => display === 'inline' && 'display: inline'};
	${({ display }) => display === 'block' && 'display: block; width: 100%'};

	${({ textDecoration }) =>
		textDecoration === 'underline' && 'text-decoration: underline'};

	&:hover {
		${({ hover }) =>
			hover === 'shadow' && `box-shadow: 5px 5px 5px rgba(0,0,0, 0.3)`}
	}
`;

export const BtnFilled = styled(Btn)`
	background-color: ${({ bg }) => bg};
	border-color: ${({ borderColor }) => borderColor};
`;
