import React, { useState } from 'react'


export default function NavBar() {

const [active,setActive]=useState('')

  return (
    <div>
      <div className='flex justify-between  item-center p-12 max-xl:p-8 max-md:p-4'>
        <ul className='flex  items-center gap-2  text-4xl max-lg:text-2xl' >
            <li>
            <ion-icon name="logo-vimeo" className=''></ion-icon>
            </li>
            <li className='font-extrabold '   data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>

            FASHION
            </li>
        </ul>
        <button className='text-4xl hidden  max-md:block' type='submit' ><ion-icon name="menu-outline"></ion-icon></button>

        <ul className='flex  gap-6 items-center  font-semibold   max-lg:gap-2   max-lg:text-sm   max-md:hidden'  >
           
            <li className={active==='CATALOGUE'? 'bg-[#000] text-white  px-4 py-2 rounded-md transition-all duration-700 ' :" hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700"} >
              <a href="#"  onClick={()=>setActive('CATALOGUE')}>CATALOGUE</a>
              </li>
            <li className={active==='FASHION' ? 'bg-[#000] text-white  px-4 py-2 rounded-md  transition-all duration-700  ' :" hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700"}>
              <a href="#Product"   onClick={()=>setActive('FASHION')}> FASHION</a>
              </li>
            <li className={active==='FAVOURITE'? 'bg-[#000] text-white  px-4 py-2 rounded-md transition-all duration-700  ' :" hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700"} >
              <a href="#"  onClick={()=>setActive('FAVOURITE')}>FAVOURITE</a>
              </li>
            <li className={active==='LIFESTYLE' ? 'bg-[#000] text-white  px-4 py-2 rounded-md transition-all duration-700  ' :" hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700"}>
              <a href="#"   onClick={()=>setActive('LIFESTYLE')}> LIFESTYLE</a>
              </li>

            <button className='bg-[#fec44e] text-white px-8 py-2 rounded-md border-[2px] border-yellow-400 hover:bg-white hover:text-yellow-600 transition-all duration-500 max-lg:px-6'>SIGN UP</button>
            {/* className='hover:bg-black hover:text-white  px-4 py-2 rounded-md transition-all duration-700  ' */}
        </ul>
            
      </div>
    </div>
  )
}


