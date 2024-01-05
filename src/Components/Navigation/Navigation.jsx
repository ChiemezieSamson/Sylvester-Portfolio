import React from "react"
import { naveLinks } from "./data";


const Navigation = () => {
  const handleToLink = (offsetOflink) => {
    document.body.scrollTop = offsetOflink.current.offsetTop; 
    window.scrollTo({left: 0, top: offsetOflink.current.offsetTop, behavior: "smooth"})
    return
  }
 return (
  <nav>
    <ul>
      {naveLinks.map((link) => {
        return (
          <li>{link.name}</li>
        )
      })}
    </ul>    
  </nav>
 ) 
}

export default Navigation
