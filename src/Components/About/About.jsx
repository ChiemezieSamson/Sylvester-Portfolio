
import { SectionHead } from '../SharedComponent/sharedcomponent'
import { aboutMe, technicalSkills } from './data'

const About = ({lang}) => {
    
  return (
    <div className='py-20 xs:px-2 sm:px-4'>
      {/* About texts */}
      <div>        
        <SectionHead lang={lang} eng={"About"} chn={"关于"} _eng={"Me"} _chn={"我"} _id={"about"}/>
                
        <div className='p-2'>
          <p>{lang ? aboutMe?.mainIntro?.En : aboutMe?.mainIntro?.Zh}</p>

          <ul className='grid grid-flow-row gap-y-3 mt-3'>
            {aboutMe?.otherParagraph?.map(paragraph => {
              return (
                <li key={paragraph.id}>
                  <p>{lang ? paragraph?.paragraph?.En : paragraph?.paragraph?.Zh}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {/* Technical skills */}
      <div className='my-10'>        
        <SectionHead lang={lang} eng={"Technical"} chn={"技术"} _eng={"Skills"} _chn={"能力"}/>        

        <ul className='my-2 p-1.5'>
            {technicalSkills?.map(skill => {
              return (
                <li key={skill.id} className='inline-block m-2 xs:text-lg sm:text-xl'>
                  <button type='button' className='rounded-xl px-2 py-1'>
                    {lang ? skill.name.En : skill.name.Zh}
                  </button>
                </li>
              )
            })}
          </ul>
      </div>
    </div>
  )
}

export default About
