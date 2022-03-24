import InputCheckbox from '../components/InputCheckbox';

export default {
	title: 'Form / Input Checkbox',
	component: InputCheckbox,
};

const Template = args => (
	<div>
		<h2>Create a checkbox input</h2>
		<section style={{ width: 'min(100%, 300px)' }}>
			<InputCheckbox {...args} />
		</section>
	</div>
);

export const CreateACheckbox = Template.bind({});
CreateACheckbox.args = {
	label: 'Create a checkbox input',
	toggle: true,
	id: 'demo',
};
