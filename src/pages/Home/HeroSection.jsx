import React from 'react'

export default function HeroSection() {
  return (
    <div id='HeroSection' className=' dark:bg-gray-900  grid md:grid-cols-2 items-center justify-items-center gap-16 bg-blue-50 p-20 mt-10 transition-all duration-500 ease-in-out'>
        <div className=' order-last md:order-first items-center md:items-start flex flex-col lg:w-96 w-72 gap-4'>
            <div className='font-bold  dark:text-white '>Hey, I'm Eyasu.</div>
            <div>
                <h1 className='font-bold text-5xl text-5e3bee'>Full Stack</h1>
                <h1 className='font-bold text-5xl  dark:text-white '>Developer</h1>                
            </div>

            <p className=' dark:text-white'>
                Using Tailwind CSS involves a slightly different approach
                compared to traditional CSS frameworks. Tailwind is a 
                utility-first.
            </p> 
            <button className=" hover:text-5e3bee hover:bg-white hover:border-2 hover:border-5e3bee  cursor-pointer w-40 bg-5e3bee text-white rounded-md text-2xl p-2">
                RESUME
            </button>


            
            
        </div>
        <div className='order-first md:order-last'>
            <img style={{objectFit:'cover',borderRadius:'50%'}} className='w-96 h-96 rounded-circle' src="/images/Eyasu.jpg" alt="" />
        </div>
        


    </div>
  )
}
