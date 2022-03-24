import { useState } from 'react';
import { LabelCheckbox } from '../components/styles/InputCheckbox.styled';
import PropTypes from 'prop-types';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';

const InputCheckbox = ({ label, toggle, id }) => {
	const toggleOn = <BsToggle2On />;
	const toggleOff = <BsToggle2Off />;
	const [icon, setIcon] = useState(toggleOff);
	const [toggleState, setToggleState] = useState(false);

	const handleClick = e => {
		const isChecked = e.target.checked;
		isChecked ? setIcon(toggleOn) : setIcon(toggleOff);
		isChecked ? setToggleState(true) : setToggleState(false);
	};

	return (
		<LabelCheckbox htmlFor={id} data-toggle={toggle}>
			<input
				type='checkbox'
				name=''
				id={id}
				onClick={e => handleClick(e)}
				data-toggle={toggle}
			/>
			<span className='wrapper-label'>{label}</span>
			{toggle && (
				<span className='wrapper-icon' data-toggle-state={toggleState}>
					{icon}
				</span>
			)}
		</LabelCheckbox>
	);
};

InputCheckbox.propTypes = {
	toggle: PropTypes.bool,
	label: PropTypes.string,
	id: PropTypes.string,
};
export default InputCheckbox;
