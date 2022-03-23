import StyledNav from './styles/Nav.styled';
import Button from './Button';

const Nav = () => {
	return (
		<StyledNav>
			<ul>
				<li>
					<a href='#'>Documents</a>
				</li>
				<li>
					<a href='#' className='active'>
						Patient Timeline
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<Button>designsystem@oncota.com</Button>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
