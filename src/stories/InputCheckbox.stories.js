import InputCheckbox from '../components/InputCheckbox';
import { Card } from '../components/styles/Card.styled';

export default {
	title: 'Form / Input Checkbox',
	component: InputCheckbox,
};

const Template = args => (
	<Card>
		<h2>Create a checkbox input</h2>
		<section style={{ width: 'min(100%, 300px)' }}>
			<InputCheckbox {...args} />
		</section>
	</Card>
);

export const CreateACheckbox = Template.bind({});
CreateACheckbox.args = {
	label: 'Create a checkbox input',
	toggle: true,
	id: 'demo',
};
