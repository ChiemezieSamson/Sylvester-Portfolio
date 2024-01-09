import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import {
	FetchLanguage,
	NavBartoggleIcon,
} from "./Components/Navigation/NavigationComponent/NavigationComponent";
import { useWindowSize } from "@uidotdev/usehooks";
import Hero from "./Components/HeroComponent/Hero";
import Footer from "./Components/Footer/Footer";

const App = () => {
	const [navBar, setNavBar] = useState(false);
	const { lang, setIsLanguage } = FetchLanguage();
	const size = useWindowSize();

	const toggleNavBar = () => {
		setNavBar((change) => !change);
	};

	// Handle closing of navigation bar in small-screen devices,
	//  when other part of the page is clicked
	const handleCloseSideBar = () => {
		setNavBar(() => false);
	};

	// Handle closing of navigation bar if the screen width changes
	useEffect(() => {
		if (size.width > 640) {
			handleCloseSideBar();
		}
	}, [size]);

	return (
		<div className="relative py-10 ">
			{/* Navigation Links and Bar button */}

			<div className="grid grid-flow-col bgLight dark:bgSoft justify-between sm:justify-normal fixed z-50 inset-x-0 top-0">
				<Navigation size={size} lang={lang} navBar={navBar} />
				<NavBartoggleIcon navBar={navBar} toggleNavBar={toggleNavBar} />
			</div>

			<div className="bgLight dark:bgSoft">
				{/* hero component */}
				<div className="max-w-7xl mx-auto">
					<Hero lang={lang} />
				</div>
			</div>

			<div className="mt-40 ">
				<Footer lang={lang} setIsLanguage={setIsLanguage} />
			</div>
		</div>
	);
};

export default App;
