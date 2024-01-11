import React, { useState } from 'react'
import { SectionHead } from '../SharedComponent/sharedcomponent'
import { awardsCertificate } from './data'

const Awards = ({lang}) => {
  const [overLay, setOverlay] = useState("")

  const handleOverLay = (image) => {
    setOverlay(() => image);
  }

  return (
    <div className='py-20 xx:px-2 sm:px-4'>
      <SectionHead lang={lang} eng={"Awards"} chn={"奖项"} _eng={"& Certificate"} _chn={"与证书"} _id={"certificates"}/>

      <ul className='py-10 grid sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
        {awardsCertificate.map((award) => {
          return (
            <li key={award.id} className='my-5 shadow-sm shadow-[rgba(21,28,44,0.3)] rounded-xl text-center'>
              <figure onClick={() => handleOverLay(award.image)}>
                <img src={award.image} alt={"project"} className='aspect-[16/10] rounded-xl'/>
                <figcaption className='px-2 my-1'>{lang ? award.text.En : award.text.Zh}</figcaption>
              </figure>
            </li>
          )
        })}
      </ul> 

      <div className={`${overLay ? "grid justify-center items-center fixed z-40 inset-0 bg-black/50" : "hidden"}`} onClick={() => setOverlay(() => "")}>
       <img src={overLay} alt={"project"} className='max-h-[60%] max-w-[99%] rounded-xl'/>
      </div>     
    </div>
  )
}

export default Awards
