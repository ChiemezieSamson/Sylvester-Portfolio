import React from 'react'
import { HeroProjects, personalInfo } from './data'

const Hero = ({lang}) => {
  return (
    <div id={"home"} className='lg:py-10 relative'>
      <div className='grid grid-flow-row lg:grid-flow-col'>

        {/* Name and welcom Text */}
        <div className='mt-10 py-5 xx:px-2 sm:px-4 max-w-3xl'>
          <h4 className='text-4xl sm:text-5xl font-lora font-extralight py-2 my-2'>{lang ? personalInfo?.welcome?.En : personalInfo?.welcome?.Zh}</h4>
          <h1 className='text-4xl xs:text-[48px] sm:text-[65px] leading-normal font-poppins font-bold py-3 block my-5 text-balance tracking-wide'>
            {lang ? personalInfo?.Full_name?.En : personalInfo?.Full_name?.Zh}{!lang && "-" + personalInfo?.Full_name?.En}
          </h1>

          <>
            <div className='h-px w-16 border-[3px] xs:border-4 line inline-block mb-[5px] xs:mb-2'></div>
            <span className='text-2xl xs:text-3xl sm:text-4xl font-poppins mx-2 xs:mx-6'>{lang ? personalInfo?.profession?.En : personalInfo?.profession?.Zh}</span>
          </>

          {/* social media */}
          <ul className='mt-20'>
            {personalInfo?.socialMedia?.map((social) => {
              return (
                <li key={social?.id} className="group inline-block text-3xl cursor-pointer" title={social?.name}>
                  <a href={social?.url} target='_blank' rel="noreferrer" className='bg-white py-1 px-1.5 mx-1.5 transitionEffect dark:hover:bg-sky-100 inline-block rounded-full'>
                    {social?.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        
        {/* Image */}
        <div className='relative isolate mt-10 lg:mt-20 py-5 sm:px-5 lg:px-10 grid items-center mx-auto rounded-full'>
          <div className='border-8 border-amber-400 rounded-full overflow-clip'>
            <div className='bg-white rounded-full border-[24px] size-40 xx:size-60 xs:size-80 sm:size-96 md:size-[448px] lg:size-[512px] grid items-center border-solid border-sky-500'>
              <img src={personalInfo?.Image} alt={personalInfo?.username?.En} className='size-40 xx:size-60 xs:size-80 sm:size-96 md:size-[448px] lg:size-[512px] object-top mx-auto'/>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */} 
      <div className='max-w-[350px] h-[387px] sm:h-[496px] lg:h-32 relative -bottom-[103px] isolate before:line before:border-[20px] before:absolute before:top-1/2 before:-left-[100%] before:inset-x-0'>
        <ul className='grid gap-y-4 lg:grid-flow-col dark:bg-white bgSoft text-white dark:text-slate-800 py-10 rounded-3xl absolute right-0 sm:right-auto sm:left-[49%] lg:max-w-2xl'>
          {HeroProjects?.map((project) => {
            return (
              <li key={project?.id} className='grid grid-cols-2 w-60 sm:w-[300px] lg:max-w-52 mx-auto justify-center text-center'>
                <img src={project?.image_Icon} alt={project?.name?.En} className='size-20 sm:size-32 lg:size-20 mx-auto'/>
             
                <div className='grid grid-flow-row text-lg sm:text-xl'>
                  <span className='text-xl sm:text-3xl font-semibold'>{project?.project_number}</span>
                  <span>{lang ? project?.name?.En : project?.name?.Zh}</span>
                  <span>{lang ? "Project" : "事业"}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Hero
