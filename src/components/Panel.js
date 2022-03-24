import { PanelStyled } from './styles/Panel.styled';
import { default as record } from '../img/record.jpg';

const Panel = () => {
	return (
		<PanelStyled>
			<img src={record} alt='' />
		</PanelStyled>
	);
};

export default Panel;
