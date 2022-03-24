import Button from '../components/Button';
import {
	arrayFilledButton,
	arrayBorderedButton,
	arrayIconButton,
} from '../components/ButtonValues';
import { Card } from '../components/styles/Card.styled';
import { FlexWrapper } from '../components/styles/Wrappers.styled';

export default {
	title: 'Button',
	component: Button,
};

const Template = args => (
	<Card>
		<h2>Create a button</h2>
		<Button {...args} />
	</Card>
);

export const CreateAButton = Template.bind({});
CreateAButton.args = {
	bg: 'primary',
	label: 'Create a button',
	size: 'md',
	color: 'light',
	hover: 'shadow',
};

export const FilledButtons = () => (
	<Card>
		<h2>Button - Filled</h2>
		<FlexWrapper flexDirection='row' columnGap='1rem'>
			{arrayFilledButton.map(btn => (
				<Button
					bg={btn.bg}
					borderColor={btn.borderColor}
					label={btn.label}
					borderRadius={btn.borderRadius}
					size={btn.size}
					color={btn.color}
				/>
			))}
		</FlexWrapper>
	</Card>
);

export const BorderedButtons = () => (
	<Card>
		<h2>Button - Bordered</h2>
		<FlexWrapper flexDirection='row' columnGap='1rem'>
			{arrayBorderedButton.map(btn => (
				<Button
					bg='transparent'
					borderColor={btn.borderColor}
					label={btn.label}
					borderRadius={btn.borderRadius}
					size={btn.size}
					color={btn.color}
				/>
			))}
		</FlexWrapper>
	</Card>
);

export const UnderlinedButtons = () => (
	<Card>
		<h2>Button - Underlined</h2>
		<FlexWrapper flexDirection='row' columnGap='1rem'>
			{arrayBorderedButton.map(btn => (
				<Button
					bg='transparent'
					borderColor='transparent'
					label={btn.label}
					borderRadius='0'
					size='md'
					color={btn.color}
					textDecoration='underline'
				/>
			))}
		</FlexWrapper>
	</Card>
);

export const BlockButtons = () => (
	<Card>
		<h2>Button - Block</h2>
		<FlexWrapper flexDirection='column' rowGap='1rem'>
			{arrayFilledButton.map(btn => (
				<Button
					bg={btn.bg}
					borderColor='transparent'
					label={btn.label}
					borderRadius='sm'
					size='lg'
					color={btn.color}
					display='block'
					textDecoration='none'
				/>
			))}
		</FlexWrapper>
	</Card>
);

export const ButtonIcons = () => (
	<Card>
		<h2>Button - Icons</h2>
		<FlexWrapper flexDirection='row' columnGap='1rem'>
			{arrayIconButton.map(btn => (
				<Button
					bg={btn.bg}
					borderColor={btn.borderColor}
					label={btn.label}
					borderRadius={btn.borderRadius}
					size={btn.size}
					color={btn.color}
					iconStart={btn.iconStart}
					iconEnd={btn.iconEnd}
				/>
			))}
		</FlexWrapper>
	</Card>
);
