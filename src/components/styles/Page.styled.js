import styled from 'styled-components';

const StyledPage = styled.div`
	display: grid;
	grid-template-columns: 20% 70% 20%;
	grid-template-areas:
		'header header header'
		'leftNav timeline panel';
	width: min(100%, 1500px);
`;

export default StyledPage;
