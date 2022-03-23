import { Btn } from './styles/Button.styled';
import PropTypes from 'prop-types';

const Button = ({
	bg,
	borderColor,
	borderRadius,
	color,
	label,
	size,
	display,
	textDecoration,
	handleClick,
}) => {
	return (
		<Btn
			bg={bg}
			borderColor={borderColor}
			borderRadius={borderRadius}
			size={size}
			color={color}
			display={display}
			textDecoration={textDecoration}
		>
			{label}
		</Btn>
	);
};

Button.propTypes = {
	label: PropTypes.string,
	bg: PropTypes.oneOf([
		'primary',
		'secondary',
		'danger',
		'warning',
		'success',
		'transparent',
	]),
	borderColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'danger',
		'warning',
		'success',
		'transparent',
	]),
	color: PropTypes.oneOf(['dark', 'light']),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	borderRadius: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
	display: PropTypes.oneOf(['inline', 'block']),
	textDecoration: PropTypes.oneOf(['none', 'underline']),
	handleClick: PropTypes.func,
};

export default Button;
