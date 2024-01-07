import React from 'react'
import { personalInfo } from './data'

const Hero = ({lang}) => {
  return (
    <div className='py-10 grid grid-flow-row lg:grid-flow-col lg:justify-center lg:items-center gap-x-6'>
      <div className='mt-10 py-5 px-10 max-w-2xl lg:max-w-3xl'>
        <h4 className='text-4xl font-lora font-extralight py-2 my-2'>{lang ? personalInfo?.welcome?.En : personalInfo?.welcome?.Zh}</h4>
        <h1 className='text-5xl font-poppins font-bold py-2 my-2 leading-tight text-balance'>{lang ? personalInfo?.Full_name?.En : personalInfo?.Full_name?.Zh}</h1>

        <div>
          <div className='h-px w-16 line inline-block mb-2'></div>
          <span className='text-3xl font-poppins mx-6'>{lang ? personalInfo?.profession?.En : personalInfo?.profession?.Zh}</span>
        </div>

        <ul className='my-10'>
          {personalInfo.socialMedia.map((social) => {
            return (
              <li key={social.id} className="inline-block bg-cyan-100 py-1 px-1.5 mx-1.5 rounded-full cursor-pointer transitionEffect hover:bg-cyan-200">
                <a href={social.id}>
                  {social.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className='relative isolate mt-10 lg:mt-20 py-5 px-5 lg:px-10 grid items-center mx-auto rounded-full'>
        <div className='border-8 border-amber-400 rounded-full overflow-clip'>
          <div className='bg-white rounded-full border-[24px] size-80 sm:size-96 md:size-[448px] lg:size-[512px] grid items-center border-solid border-sky-500'>
            <img src={personalInfo.Image} alt={personalInfo.username} className='size-80 sm:size-96 md:size-[448px] lg:size-[512px] object-top mx-auto'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
