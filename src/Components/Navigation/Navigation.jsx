import React, { useState } from "react"
import { naveLinks } from "./data";
import { DarkModeToggleButton, LanguageToggleButton } from "./NavigationComponent/NavigationComponent";


const Navigation = ({lang, navBar, size, handleCloseSideBar, setIsLanguage}) => {
  const [active, setActive] = useState("")

 const handleActive = (text) => {
  setActive(() => text)
  handleCloseSideBar()
 } 
 return (
  <nav className="bgLight sm:dark:bg dark:bgSoft w-full">
    <div className="grid grid-flow-col justify-between max-w-4xl mx-auto sm:px-2">
      <div className="py-3 mx-2 sm:mx-0">
        <span className="inline-block py-1 px-[6px] tracking-tighter mx-0.5 text-center font-poppins font-bold rounded-full dark:bg-white dark:text-slate-800 text-stone-200 bgSoft">
          Oc
        </span>
          <small className="inline-block align-bottom font-semibold font-round sm:hidden md:inline-block">Okafor Chukwuka.</small>
      </div>

      <ul className={`grid grid-flow-row dark:bg bgLight sm:dark:bg-transparent sm:bg-transparent drop-shadow-md fixed py-5 ${navBar ? "translate-x-0 visible opacity-100" : "-translate-x-full invisible opacity-0"}
        sm:translate-x-0 sm:visible sm:opacity-100 transition-all duration-300 ease-out sm:grid-flow-col sm:py-3 sm:max-w-xl sm:mx-auto sm:gap-x-3 sm:static`}>
        {naveLinks?.map((link) => {
          return (
            <li 
              key={link?.id}
              className="px-10 py-1.5 sm:px-0 group cursor-pointer hover:bg-slate-200 sm:hover:bg-transparent dark:hover:bg-slate-500 dark:sm:hover:bg-transparent transition-colors duration-300 ease-linear"
              onClick={() => handleActive(link?.offsetOfLinks)}
            >
              <a href={"#" + link?.offsetOfLinks} className="inline-block font-poppins uppercase leading-3 relative"> 
                {lang ? link?.name?.En : link?.name?.Zh}{size.width < 640 && !lang ? "-" + link?.name?.En : ""}
                <span className={active === link?.offsetOfLinks ? "active" : "navlink"}></span>
              </a>
            </li>
          )
        })}
        <li className="px-10 py-1.5 sm:px-0 cursor-pointer hover:bg-slate-200 sm:hover:bg-transparent dark:hover:bg-slate-500 dark:sm:hover:bg-transparent">
          <DarkModeToggleButton lang={lang}/>
        </li>
        <li className="px-10 py-1.5 sm:px-0 cursor-pointer hover:bg-slate-200 sm:hover:bg-transparent dark:hover:bg-slate-500 dark:sm:hover:bg-transparent">
          <LanguageToggleButton lang={lang} setIsLanguage={setIsLanguage}/>
        </li>
      </ul>    
    </div>
  </nav>
 ) 
}

export default Navigation
