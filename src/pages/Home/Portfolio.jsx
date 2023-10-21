import React from 'react'
import projects from '../../data/projects.json'
import { ArrowUpRight } from 'phosphor-react'
export default function Portfolio() {
  return (
    <div id='portfolio' className=' dark:bg-gray-900 p-12 flex flex-col gap-8 mt-12'>
        <div className='flex flex-col gap-4'>
            <div className='font-bold text-5e3bee'>Recent Projects</div>
            <div className='dark:text-white font-bold text-3xl'>My Projects</div>  
        </div>
        <div className='flex lg:flex-nowrap  flex-wrap gap-8'>
           {
            projects.map((project,index)=>(
                <div 
                key={index} 
                className='dark:bg-gray-800 relative hover:border-b-2 hover:border-5e3bee md:flex-row shadow-lg rounded-md flex lg:flex-col gap-4 p-4 bg-blue-50 '>
                    <div style={{objectFit:'cover'}} className=' flex  justify-center'>
                        <img src={project.img}  />
                    </div>
                    <div className='flex flex-col pb-12'>
                        <div>
                            <div className='dark:text-white font-bold text-xl'>{project.title}</div>
                            <div className='dark:text-white '>{project.text}</div>
                        </div>
                          
                        <div className='dark:text-white absolute flex gap-2 right-4 bottom-2 font-bold text-5e3bee'>
                            <div>View In GitHub </div>
                            
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                    
                </div>               
            ))
           }
        </div>
        
    </div>
  )
}
