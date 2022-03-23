import styled from 'styled-components';

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 100%;
	ul {
		column-gap: 1rem;
		display: flex;
		list-style: none;
		a {
			color: var(--gray0);
			text-decoration: none;
			&.active {
				position: relative;
				&:after {
					content: '';
					position: absolute;
					height: 3px;
					width: 100%;
					display: block;
					background-color: var(--accent-primary40);
					bottom: -3px;
					left: 0;
				}
			}
		}
	}
`;

export default StyledNav;
