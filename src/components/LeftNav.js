import { LeftNavFormStyled } from './styles/Form.styled';
import { CardLight, CardTitle } from './styles/Card.styled';
import Button from './Button';
import InputTextGroup from './InputText';
import InputCheckbox from './InputCheckbox';

const LeftNav = () => {
	return (
		<LeftNavFormStyled>
			<CardLight>
				<InputTextGroup label='Search Patients by MRN' inputIcon='search' />
			</CardLight>
			<CardLight>
				<CardTitle>QA tools</CardTitle>
				<InputCheckbox toggle='true' label='Enable QA Mode' />
				<Button
					bg='primary'
					borderRadius='sm'
					color='light'
					label='Export Timeline'
					size='sm'
					display='block'
				/>
			</CardLight>
			<CardLight>
				<CardTitle>Filter facts by</CardTitle>
				<InputCheckbox label='Patient Fact' id='1' />
				<InputCheckbox label='Fact Type' id='2' />
				<InputCheckbox label='Date of Event' id='3' />
				<InputCheckbox label='Source Document Type' id='4' />
				<InputCheckbox label='Abstractor' id='5' />
				<InputCheckbox label='Date Abstracted' id='6' />
			</CardLight>
			<CardLight>
				<CardTitle>Toggle by status</CardTitle>
				<InputCheckbox toggle='true' label='suppressed' id='11' />
				<InputCheckbox toggle='true' label='deleted' id='12' />
			</CardLight>
			<CardLight>
				<CardTitle>Complete patient abstraction</CardTitle>
				<Button
					bg='primary'
					borderRadius='sm'
					color='light'
					label='Complete Abstraction'
					size='sm'
					display='block'
				/>
			</CardLight>
		</LeftNavFormStyled>
	);
};

export default LeftNav;
