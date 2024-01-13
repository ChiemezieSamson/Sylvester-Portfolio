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
    {isDarkMode ? <FaSun className="icon"/> : <FaMoon className="icon"/>}
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
        className="dark:bgLightSoft bgSoft text-stone-200 hover:bg-[rgba(24,34,55,0.9)] dark:text-slate-800 dark:hover:bg-sky-100 px-2 whitespace-nowrap transitionEffect"
        title={lang ? "翻译" : "translate"}
        onClick={toggleLanguage}
      >
          <BsTranslate className="inline-block text-xl"/>
        <span className="inline-block mx-1">
          {lang ? "Chinese" : "English"}
        </span>
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
					className="mx-4 my-2 p-2 inline-block dark:bg rounded-lg bgLightSoft dark:text-white sm:hidden"
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