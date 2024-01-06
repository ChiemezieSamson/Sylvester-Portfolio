import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import {
	FetchLanguage,
	NavBartoggleIcon,
} from "./Components/Navigation/NavigationComponent/NavigationComponent";
import { useWindowSize } from "@uidotdev/usehooks";

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
		<div className="relative">
			{/* Navigation Links and Bar button */}

			<div className="grid grid-flow-col justify-between sm:justify-normal absolute z-50 inset-x-0 top-0">
				<Navigation lang={lang} navBar={navBar} />
				<NavBartoggleIcon navBar={navBar} toggleNavBar={toggleNavBar} />
			</div>
		</div>
	);
};

export default App;
