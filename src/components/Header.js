import StyledHeader from './styles/Header.styled';
import Nav from './Nav';
import { default as logo } from '../img/logo-white.svg';
const Header = () => {
	return (
		<StyledHeader>
			<a href='#'>
				<img src={logo} alt='Cota Healthcare Logo' />
			</a>
			<Nav></Nav>
		</StyledHeader>
	);
};

export default Header;
