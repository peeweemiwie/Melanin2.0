import { GlobalStyle } from '../src/components/styles/Global';
import { themes } from '@storybook/theming';

export const decorators = [
	Story => (
		<>
			<GlobalStyle />
			<Story />
		</>
	),
];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	darkMode: {
		// Override the default dark theme
		dark: { ...themes.dark, appBg: '#222' },
		// Override the default light theme
		light: { ...themes.normal, appBg: '#f0f0f0' },
		stylePreview: true,
	},
	layout: 'fullscreen',
};
