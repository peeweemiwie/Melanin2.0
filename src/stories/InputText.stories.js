import InputTextGroup from '../components/InputText';
import { Card } from '../components/styles/Card.styled';

export default {
	title: 'Form/Input Text',
	component: InputTextGroup,
};

const Template = args => (
	<Card>
		<h2>Create a text input</h2>
		<InputTextGroup {...args} />
	</Card>
);

export const CreateATextInput = Template.bind({});
CreateATextInput.args = {
	label: 'Email Address',
	inputIcon: 'none',
	type: 'text',
	message: 'Please enter valid email address',
	messageType: 'danger',
	required: true,
	placeholder: 'Placeholder',
};
