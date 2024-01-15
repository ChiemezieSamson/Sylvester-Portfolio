import React, { useEffect, useState } from 'react'
import { SectionHead } from '../SharedComponent/sharedcomponent'
import { MyProjects, projectButton } from './data'

const Projects = ({lang}) => {
  const [buttonType, setButtonType] = useState("all")
  const [displayedProjects, setDisplayedProjects] = useState([])

  const buttonText = projectButton?.map((button, index) => ({id:index, name: button }))

  useEffect(() => {
    if (buttonType !== "all") {
      const filterProject = MyProjects?.filter(project => project?.type === buttonType)
      setDisplayedProjects(() => filterProject)
    } else {
      setDisplayedProjects(() => MyProjects)
    }
  }, [buttonType])

  return (
    <div className='py-20 xx:px-2 sm:px-4'>
      <SectionHead lang={lang} eng={"My"} chn={"我的"} _eng={"Projects"} _chn={"项目"} _id={"projects"}/>  

      <ul className='max-w-sm mx-auto grid grid-cols-2 xx:grid-flow-col'>
        {buttonText?.map(text => {
          return (
            <li key={text?.id} className='inline-block m-2 text-sm xs:text-lg sm:text-xl' onClick={() => setButtonType(() => text.name)}>
              <button className='border border-solid border-transparent dark:border-transparent hover:border hover:line rounded-xl px-2 py-1 uppercase font-medium transitionEffect'>
                {!lang && text.name === "all" ? "全部" : text.name}
              </button>
            </li>
          )
        })}
      </ul>

      <ul className='py-10 grid sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4'>
        {displayedProjects?.map((project) => {
          return (
            <li key={project?.id} className='my-5 shadow-sm shadow-[rgba(21,28,44,0.3)] rounded-xl bg-white dark:bg-transparent'>
              <img src={project?.project_image} alt={"project"} className='aspect-[16/10] rounded-t-xl dark:rounded-xl'/>

              <div className='px-2 mb-6'>
                <h3 className='xs:text-xl sm:text-2xl font-poppins font-medium mt-10 mb-3'>{lang ? project?.title?.En :  project?.title?.Zh}</h3>
                <p className='p-px my-0.5 text-lg lg:text-xl'>
                  {lang ? project?.text?.En?.slice(0, 150) : project?.text?.Zh?.slice(0, 150)}{lang ? project?.text?.En?.length > 150 ? "..." : "" :  project?.text?.Zh?.length > 150 ? "..." : "" }
                </p>

                <div className='grid grid-flow-col justify-between mt-10 px-2'>                  
                  <a href={project?.url} target='_blank' rel="noreferrer" className='inline-block px-2 py-1 border border-solid line dark:lineSoft
                    hover:text-sky-500 lg:text-lg dark:hover:border-white rounded-xl transitionEffect font-lora font-bold'>
                    {lang ? "See My Work" : "查看"}
                  </a>               

                  <img src={project?.icon_image} alt={"projectIcon"} className='size-8'/>
                </div>         
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Projects
