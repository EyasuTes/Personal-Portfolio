import React from 'react'
import exp from '../../data/skills.json'
export default function Skills() {
  return (
    <div id='skills' className='transition-all duration-500 ease-in-out mx-12 flex flex-col gap-8 mt-12'>
        <div className='flex flex-col gap-4'>
            <div className='font-bold text-5e3bee'>My Skills</div>
            <div className=' dark:text-white font-bold text-3xl'>My Expertise</div>  
        </div>
        <div className='flex lg:flex-nowrap flex-wrap gap-8'>
            {exp.map((e,index)=>(
                <div key={index} className=' dark:bg-gray-900 hover:border-b-2 hover:border-5e3bee shadow-lg rounded-md flex flex-col gap-4 p-4 bg-blue-50 '>
                    <div className='w-12 h-12'>
                        <img src={e.img} alt="" />
                    </div>
                    
                    <div className=' dark:text-white font-bold text-xl'>{e.title}</div>
                    <div className='dark:text-white'>{e.text}</div>
                </div>
            ))
            }
        </div>
        
    </div>
  )
}
