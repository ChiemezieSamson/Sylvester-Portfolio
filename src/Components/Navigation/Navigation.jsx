import React, { useState } from "react"
import { naveLinks } from "./data";
import { DarkModeToggleButton } from "./NavigationComponent/NavigationComponent";


const Navigation = ({lang, navBar, size, handleCloseSideBar}) => {
  const [active, setActive] = useState("")

 const handleActive = (text) => {
  setActive(() => text)
  handleCloseSideBar()
 } 
 return (
  <nav className="bgLight dark:bg w-full block">
    <ul className={`grid grid-flow-row dark:bg bgLight sm:dark:bg-transparent sm:bg-transparent drop-shadow-md fixed py-5 ${navBar ? "translate-x-0 visible opacity-100" : "-translate-x-full invisible opacity-0"}
      sm:translate-x-0 sm:visible sm:opacity-100 transition-all duration-300 ease-out sm:grid-flow-col sm:py-3 sm:max-w-xl sm:mx-auto sm:gap-x-3 sm:static`}>
      {naveLinks.map((link) => {
        return (
          <li 
            key={link.id}
            className="px-10 py-1.5 sm:px-0 group cursor-pointer hover:bg-slate-200 sm:hover:bg-transparent dark:hover:bg-slate-500 dark:sm:hover:bg-transparent transition-colors duration-300 ease-linear"
            onClick={() => handleActive(link.offsetOfLinks)}
          >
            <a href={"#" + link.offsetOfLinks} className="inline-block font-poppins uppercase leading-3 relative"> 
              {lang ? link.name.En : link.name.Zh}{size.width < 640 && !lang ? "-" + link.name.En : ""}
              <span className={active === link.offsetOfLinks ? "active" : "navlink"}></span>
            </a>
          </li>
        )
      })}
      <li className="px-10 py-1.5 sm:px-0 cursor-pointer hover:bg-slate-200 sm:hover:bg-transparent dark:hover:bg-slate-500 dark:sm:hover:bg-transparent transition-colors duration-300 ease-linear">
        <DarkModeToggleButton lang={lang}/>
      </li>
    </ul>    
  </nav>
 ) 
}

export default Navigation
