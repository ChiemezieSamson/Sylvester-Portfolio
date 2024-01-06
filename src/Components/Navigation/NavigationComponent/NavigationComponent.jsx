import { useEffect, useState } from "react";
import { FaEllipsisH, FaEllipsisV, FaEye, FaEyeSlash } from "react-icons/fa";

export const DarkModeToggleButton = ({lang}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return ( 
    <button
    className="inline-block"
    type="button"
    title={isDarkMode ? `${lang ? "lightMode" : "灯光模式"}` : `${lang ? "darkMode" : "深色模式"}`}
    onClick={toggleDarkMode}
  >
    {isDarkMode ? <FaEyeSlash className="icon"/> : <FaEye className="icon"/>}
  </button>
  )
}


export const LanguageToggleButton = ({lang, setIsLanguage}) => {
  const toggleLanguage = () => {
      let newMode
      if (!lang) {
        localStorage.setItem("Language", "en");
        document.documentElement.setAttribute('lang', 'en');
        newMode = "en"
        setIsLanguage(true)
      } else {
        localStorage.setItem("Language", 'zh-Hans');
        document.documentElement.setAttribute('lang', 'zh-Hans');
        newMode = 'zh-Hans'    
        setIsLanguage(false)    
      }
      return newMode
  };

  return (
    <div>
       <button
        className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-700 dark:text-gray-100"
        onClick={toggleLanguage}
      >
        {lang ? "English" : "Chinese"}
      </button>
    </div>
  )
}


export const FetchLanguage = () => {
  const [isLanguage, setIsLanguage] = useState(false);
  const languageMode = localStorage.getItem("Language");

  const handleSetLanguage = (text) => {
    setIsLanguage(() => text)
  }

  useEffect(() => {
    if (languageMode === "en") {
      setIsLanguage(true);
      document.documentElement.setAttribute('lang', 'en');
    } else {
      setIsLanguage(false);
      document.documentElement.setAttribute('lang', 'zh-Hans');
    }
  }, [languageMode]);

  return {lang: isLanguage, setIsLanguage: handleSetLanguage}
}

export const NavBartoggleIcon = ({navBar, toggleNavBar}) => {
  return (
    <span
					className="m-4 p-2 inline-block dark:bgSoft rounded-lg bgLight dark:text-white sm:hidden"
					onClick={toggleNavBar}
				>
					{navBar ? (
						<FaEllipsisH className="icon" />
					) : (
						<FaEllipsisV className="icon" />
					)}
				</span>
  )
}