import React from 'react'
import { SectionHead } from '../SharedComponent/sharedcomponent'
import { contactMe } from './data'


const Contact = ({lang}) => {
  return (
    <div className='pb-14 xx:px-2 sm:px-4 rounded-3xl contactImage relative isolate after:absolute after:inset-0 after:bg-sky-400/70 after:-z-30 after:rounded-3xl
    before:inset-0 before:bg-black/40 before:-z-20 before:rounded-3xl before:absolute text-white'>
      <div className=''>
        <SectionHead lang={lang} eng={"Contact"} chn={"联系"} _eng={"Me"} _chn={"我"} _id={"contact"}/>
        
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-10 xl:gap-[2%] pt-10'>
          {contactMe?.map(contact => {
            return (
              <li key={contact?.id} className='inline-block border border-dashed border-white p-2 xx:p-5 rounded-3xl relative'>
                <b className='text-2xl tracking-wider font-josefin py-px inline-block'>{lang ? contact?.name?.En : contact?.name?.Zh}</b>
                <br />
                <small className='text-base mt-2 inline-block break-all'>{contact?.url?.slice(0, 30)}{contact?.url?.length > 30 ? "..." : ""}</small>

                <div className="text-4xl cursor-pointer absolute -top-[30px] right-2">
                  <a href={contact?.url} target='_blank' rel="noreferrer" className='py-2 inline-block px-2.5 mx-1.5 rounded-full bg-white text-sky-500 
                  hover:bg-sky-500 hover:text-white transitionEffect'>
                    {contact?.icon}
                  </a>
                </div>
              </li>
            )
          })}
        </ul>      
      </div>
    </div>
  )
}

export default Contact
