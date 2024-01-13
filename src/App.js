import { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import {
	FetchLanguage,
	NavBartoggleIcon,
} from "./Components/Navigation/NavigationComponent/NavigationComponent";
import { useWindowSize } from "@uidotdev/usehooks";
import Hero from "./Components/HeroComponent/Hero";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Awards from "./Components/Awards&cert/Awards";
import Contact from "./Components/Contact/Contact";
import Resume from "./Components/Resume/Resume";

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
		<div className="relative pt-10">
			{/* Navigation Links and Bar button */}

			<header className="grid grid-flow-col bgLight dark:bgSoft justify-between sm:justify-normal fixed z-50 inset-x-0 top-0">
				<Navigation
					size={size}
					lang={lang}
					navBar={navBar}
					handleCloseSideBar={handleCloseSideBar}
					setIsLanguage={setIsLanguage}
				/>
				<NavBartoggleIcon navBar={navBar} toggleNavBar={toggleNavBar} />
			</header>

			<main onClick={handleCloseSideBar}>
				<div className="bgLight dark:bgSoft mb-40">
					{/* hero component */}
					<div className="sectionWidth">
						<Hero lang={lang} />
					</div>
				</div>

				{/* About component */}
				<div className="sectionWidth">
					<About lang={lang} />
				</div>

				{/* My Project component */}
				<div className="bgLight dark:bgSoft">
					<div className="sectionWidth">
						<Projects lang={lang} />
					</div>
				</div>

				{/* margin line*/}
				<div className="line border-8 max-w-[40%] ml-auto text-right"></div>

				{/* Awards & Certificate */}
				<div className="sectionWidth">
					<Awards lang={lang} />
				</div>
			</main>

			<footer
				className="mt-40 bgLight dark:bgSoft"
				onClick={handleCloseSideBar}
			>
				<div className="sectionWidth relative -top-[150px]">
					<Contact lang={lang} />
				</div>

				<div className="sectionWidth pb-60">
					<Resume lang={lang} />
				</div>

				<Footer lang={lang} />
			</footer>
		</div>
	);
};

export default App;
