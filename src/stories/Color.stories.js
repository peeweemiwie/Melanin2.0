import Color from '../components/Color';
import { ContainerColors } from '../components/styles/Color.styled';
import { customProps } from '../components/ColorValues';

export default {
	title: 'Colors',
	component: Color,
};

const arrayBrandColors = [];
const arrayAccentColors = [];
const arrayGrayColors = [];
const arrayTextColors = [];

Object.entries(customProps).map(([key, value]) => {
	if (key.includes('brand')) {
		arrayBrandColors.push([key, value]);
	} else if (key.includes('accent')) {
		arrayAccentColors.push([key, value]);
	} else if (key.includes('gray')) {
		arrayGrayColors.push([key, value]);
	} else if (key.includes('text')) {
		arrayTextColors.push([key, value]);
	}
});

export const AllColors = () => (
	<ContainerColors>
		<h2>All Colors</h2>
		{Object.entries(customProps).map(([key, value]) => {
			return <Color key={key.concat(value)} label={key} bgColor={value} />;
		})}
	</ContainerColors>
);

export const Brand = () => (
	<ContainerColors>
		<h2>Brand Colors</h2>
		{arrayBrandColors.map(color => (
			<Color key={color[0]} label={color[0]} bgColor={color[1]} />
		))}
	</ContainerColors>
);

export const Accent = () => (
	<ContainerColors>
		<h2>Accent Colors</h2>
		{arrayAccentColors.map(color => (
			<Color key={color[0]} label={color[0]} bgColor={color[1]} />
		))}
	</ContainerColors>
);

export const Grays = () => (
	<ContainerColors>
		<h2>Grays</h2>
		{arrayGrayColors.map(color => (
			<Color key={color[0]} label={color[0]} bgColor={color[1]} />
		))}
	</ContainerColors>
);

export const TextColors = () => (
	<ContainerColors>
		<h2>Text Colors</h2>
		{arrayTextColors.map(color => (
			<Color key={color[0]} label={color[0]} bgColor={color[1]} />
		))}
	</ContainerColors>
);
