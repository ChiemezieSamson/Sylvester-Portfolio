import { useEffect, useState } from "react";
import { FaEllipsisH, FaEllipsisV, FaMoon, FaSun } from "react-icons/fa";
import { BsTranslate } from "react-icons/bs";

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
    {isDarkMode ? <FaSun className="inline-block text-xl sm:mb-1"/> : <FaMoon className="inline-block sm:align-top sm:mt-0.5"/>}
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
      <button
      className="whitespace-nowrap"
      title={lang ? "中文-Chinese" : "English"}
      onClick={toggleLanguage}
    >
      <BsTranslate className="inline-block sm:align-top sm:mt-0.5 text-lg"/>
    </button>
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
					className="mx-4 my-2 p-2 grid items-center justify-center dark:bg rounded-lg bgLightSoft dark:text-white sm:hidden "
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