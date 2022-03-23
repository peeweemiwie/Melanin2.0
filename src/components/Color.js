import PropTypes from 'prop-types';
import { CardColor } from './styles/Color.styled';

const Color = ({ label, bgColor }) => {
	const colorValue = bgColor.includes('#') ? bgColor : `var( ${bgColor} )`;

	return (
		<CardColor className='Color' bg={colorValue}>
			<div className='swatch'></div>
			<div className='bordered'>{label}</div>
			<div className='bordered'>{colorValue}</div>
		</CardColor>
	);
};

Color.propTypes = {
	label: PropTypes.string,
	bgColor: PropTypes.string,
};
export default Color;
