import React from 'react'
import "./ProjectsBgStyle.css"
import SliderCards from './SliderCards';


const ProjectsBg = () => {
  return (
    <div className=' background-projects'>
        <div className='project-contents'>

        <div className='finished-content'>
        <h1 className='title-project' style={{marginBottom:"1rem"}}>Tamamladığımız Projelerimiz</h1>
        <div className='show-cards'>

       <SliderCards/>

        </div>
    
      </div>
     

      <div className='unfinished-content'>
        <h1 className='title-project' style={{marginBottom:"1rem"}}>Devam Eden Projelerimiz</h1>

        <div className='show-cards'>

       <SliderCards/>

        </div>
      </div>

        </div>

      
    </div>
  )
}

export default ProjectsBg
