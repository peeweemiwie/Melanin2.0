import Header from './Header';
import StyledPage from './styles/Page.styled';
import LeftNav from './LeftNav';
import Timeline from './Timeline';
import Panel from './Panel';
const Page = () => {
	return (
		<StyledPage>
			<Header />
			<LeftNav />
			<Timeline />
			<Panel />
		</StyledPage>
	);
};

export default Page;
