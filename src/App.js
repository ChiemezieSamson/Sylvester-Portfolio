import Navigation from "./Components/Navigation/Navigation";
import { FetchLanguage } from "./Components/Navigation/NavigationComponent/NavigationComponent";

const App = () => {
	const { lang, setIsLanguage } = FetchLanguage();
	console.log(lang);
	return (
		<div className="">
			<Navigation lang={lang} setIsLanguage={setIsLanguage} />
		</div>
	);
};

export default App;
