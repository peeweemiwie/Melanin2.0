import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --brand-primary100: #5D48A1;
    --brand-primary40: #8367E7;
    --brand-secondary100: #425D9E;
    --brand-secondary40: #8FA2D0;

    --gray100: #52565A;
    --gray80: #7F8FA4;
    --gray60: #C3C5CD;
    --gray40:#EBEDF3;
    --gray20: #F4F7F9;
    --gray0: #ffffff;

    --accent-primary100: #4B89DC;
    --accent-primary40: #96B5DF;
    --accent-secondary100: var(--gray80);
    --accent-secondary40: var(--gray40);
    --accent-success100: #37BC9B;
    --accent-success40:#A0D1C5;
    --accent-danger100: #DA4453;
    --accent-danger40: #E3BDC1;
    --accent-warning100: #FFA600;
    --accent-warning40: #F8E3BC;


    --text-dark: var(--gray100);
    --text-light: var(--gray0);

    --space1: 1rem;
    --space2: 2rem;
    --space3: 3rem;

    --font-family-roboto: 'Roboto', sans-serif;
  }
  h2 {
    border-bottom: 1px solid var(--text-dark);
		color: var(--text-dark);
		font-family: var(--font-family-roboto);
    margin: 1rem 0;
	}
`;
