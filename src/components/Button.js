import { Btn } from './styles/Button.styled';
import PropTypes from 'prop-types';
import { MdExpandLess } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';

const Button = ({
	bg,
	borderColor,
	borderRadius,
	color,
	label,
	size,
	display,
	textDecoration,
	iconStart,
	iconEnd,
	handleClick,
}) => {
	let startIcon = '';
	let endIcon = '';
	if (iconStart === '') startIcon = '';
	else if (iconStart === 'arrow-up') startIcon = <MdExpandLess />;
	else if (iconStart === 'arrow-down') startIcon = <MdExpandMore />;

	if (iconEnd === '') startIcon = '';
	if (iconEnd === 'arrow-up') endIcon = <MdExpandLess />;
	else if (iconEnd === 'arrow-down') endIcon = <MdExpandMore />;

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
			{startIcon}
			{label}
			{endIcon}
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
	iconEnd: PropTypes.oneOf(['none', 'arrow-up', 'arrow-down']),
	iconStart: PropTypes.oneOf(['none', 'arrow-up', 'arrow-down']),
	handleClick: PropTypes.func,
};

export default Button;
