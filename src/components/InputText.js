import PropTypes from 'prop-types';
import {
	InputTextStyled,
	InputIconWrapperStyled,
	MessageContainer,
	LabelStyled,
} from './styles/Form.styled';
import {
	MdSearch,
	MdOutlineErrorOutline,
	MdOutlineCheckCircle,
	MdOutlineWarningAmber,
} from 'react-icons/md';

const InputTextGroup = ({
	label,
	inputIcon,
	type,
	required,
	message,
	messageType,
	placeholder,
}) => {
	let svg = '';
	if (inputIcon === 'search') svg = <MdSearch />;

	let requireIcon = required ? <span className='wrapper-required'>*</span> : '';

	let messageIcon = '';
	if (messageType === 'danger') {
		messageIcon = <MdOutlineErrorOutline />;
	} else if (messageType === 'warning') {
		messageIcon = <MdOutlineWarningAmber />;
	} else if (messageType === 'success') {
		messageIcon = <MdOutlineCheckCircle />;
	}

	let messageContainer = message ? (
		<MessageContainer className={messageType}>
			{messageIcon}
			{message}
		</MessageContainer>
	) : (
		''
	);

	return (
		<div>
			<LabelStyled>
				{label}
				{requireIcon}
			</LabelStyled>
			<InputIconWrapperStyled>
				<InputTextStyled
					type={type}
					name=''
					id=''
					className={messageType}
					placeholder={placeholder}
				/>
				{svg}
			</InputIconWrapperStyled>
			{messageContainer}
		</div>
	);
};

InputTextGroup.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	inputIcon: PropTypes.oneOf(['none', 'search']),
	type: PropTypes.oneOf(['text', 'search']),
	required: PropTypes.bool,
	message: PropTypes.string,
	messageType: PropTypes.oneOf(['none', 'danger', 'warning', 'success']),
};
export default InputTextGroup;
