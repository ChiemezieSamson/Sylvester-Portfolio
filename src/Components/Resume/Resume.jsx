import React from 'react'
import { nameResume } from './data'
import { MdOutlineFileDownload } from "react-icons/md";

const Resume = ({lang}) => {
  return (
    <div className='grid md:grid-flow-col justify-between mx-2'>
      <>
        <h1 className='text-3xl sm:text-4xl leading-normal font-poppins font-bold py-3 block text-balance tracking-wide'>
          {lang ? nameResume?.name?.En : nameResume?.name?.Zh}{!lang && "-" + nameResume?.name?.En.slice(0, 18)}
        </h1>

        <span className='text-2xl sm:text-3xl font-poppins'>{lang ? nameResume?.profession?.En : nameResume?.profession?.Zh}</span>
      </>

      <>
        <p className='text-xl sm:text-2xl font-poppins mb-2 mt-8 md:mt-0'>{lang ? "Download Resume" : "下载简历"}</p>
        <a href={nameResume?.resume} download="document.pdf" target="_blank" rel='noreferrer'>
          <button className='inline-block px-2 py-1 border border-solid line dark:lineSoft hover:text-sky-500 lg:text-lg dark:hover:border-white rounded-xl transitionEffect font-lora font-bold'>
            {lang ? "Resume" : "简历"}
            <MdOutlineFileDownload className='inline-block'/>
          </button>
        </a>
      </>
    </div>
  )
}

export default Resume
