import React from 'react'
import { LanguageToggleButton } from '../Navigation/NavigationComponent/NavigationComponent';

const Footer = ({setIsLanguage, lang}) => {
  return (
    <div className='bgSoft fixed bottom-0 inset-x-0 '>
      <div className='max-w-xl mx-auto grid grid-flow-col justify-between'>
        <small>
          copyright &copy; 2022 by Nebe.Samson 
        </small>
        <div>
          <div>
            <LanguageToggleButton lang={lang} setIsLanguage={setIsLanguage}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
