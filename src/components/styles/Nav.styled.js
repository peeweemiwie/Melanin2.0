import styled from 'styled-components';

const StyledNav = styled.nav`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 100%;
	ul {
		align-items: center;
		column-gap: 1rem;
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
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
					background-color: var(--accent-warning100);
					bottom: -5px;
					left: 0;
				}
			}
		}
	}
`;

export default StyledNav;
