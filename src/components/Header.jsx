import React from 'react'
import Assets from '../Assets/header.png'
export default function Header() {
  return (
    <div>
        
      <div className='px-12 max-xl:p-8 max-md:p-2'>
        <div className='bg-[#e3e6f1]  flex justify-between items-center rounded-3xl max-md:flex-col max-md:gap-5'>
            <div className='w-1/2 px-14 py-10  max-lg:px-8 max-lg:py-8  max-md:px-5 max-md:w-[80%] ' >

                <h1 className='text-[4rem] font-extrabold leading-normal max-lg:text-[3rem] max-md:text-center  '  >

                    <p className='bg-white w-[60%] pl-4 max-md:text-[2.5rem] max-sm:w-[50%] max-md:w-[50%] max-md:m-auto max-sm:m-auto'  data-aos='fade-right'  data-aos-duration={1200} data-aos-delay={1000} >LET’S</p>
                    <p className='max-md:text-[2.5rem] max-md:w-[100%] ' data-aos='fade-right'  data-aos-duration={1400} data-aos-delay={1200}>EXPLORE</p>
                    <p className='bg-[#E6C744] w-[60%]  pl-4 max-md:text-[2.5rem] max-sm:w-[60%] max-md:w-[50%] max-md:m-auto max-sm:m-auto' data-aos='fade-right'  data-aos-duration={1600} data-aos-delay={1400}>UNIQUE </p>
                    <p className='max-md:text-[2.5rem] max-md:w-[100%] ' data-aos='fade-right'  data-aos-duration={1800} data-aos-delay={1600}>CLOTHES.</p>
                    
                    </h1>
                      <p className='text-2xl pb-4 max-lg:text-[1rem] max-lg:leading-[1.6]  max-md:text-center ' data-aos='zoom-out' data-aos-delay={500}>Live for Influential and Innovative fashion!</p>
                <div className=' max-md:grid max-md:place-items-center'>
                    <button className='bg-black text-white px-8 py-4 rounded-md max-lg:py-2 max-lg:px-6   ' data-aos="zoom-in" data-aos-delay={100}data-aos-duration={1000}>shop Now</button>
                </div>


            </div>
            <div className='w-[50%]  max-md:w-[80%] max-md:m-auto'  data-aos='zoom-in' data-aos-duration={1200}  >
                <img src={Assets} alt={Assets} className='w-full h-full'/>
            </div>
        </div>
      </div>
    </div>
  )
}
