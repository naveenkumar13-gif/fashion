import React, { useState } from 'react'



// const listStyle= "active==='CATALOGUE' ? 'bg-[#000] text-white  px-4 py-2 rounded-md transition-all duration-700 ' :' hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700'"
const listStyle= "active==='CATALOGUE' ?  hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700': '' "
export default function NavBar() {

const [active,setActive]=useState('')


  return (
    <div>
      <div className='flex justify-between  item-center p-12 max-xl:p-8 max-md:p-4'>
        <ul className='flex  items-center gap-2  text-4xl max-lg:text-2xl' >
            <li>
            <ion-icon name="logo-vimeo" ></ion-icon>
            </li>
            <li className='font-extrabold '   data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
            FASHION
            </li>
        </ul>
      

       <ul className='flex  gap-6 items-center  font-semibold   max-lg:gap-2   max-lg:text-sm   max-md:hidden'  >
            <li >
              <a href="#"  onClick={()=>setActive('CATALOGUE')} className={listStyle}>CATALOGUE</a>
              </li>
              <li>
              <a href="#Product"   onClick={()=>setActive('FASHION')} className={listStyle}> FASHION</a>
              </li>
            <li  className={listStyle}>
              <a href="#"  onClick={()=>setActive('FAVOURITE')}>FAVOURITE</a>
              </li>
            <li  className={listStyle}>
              <a href="#"   onClick={()=>setActive('LIFESTYLE')}> LIFESTYLE</a>
              </li>

            <button className='bg-[#fec44e] text-white px-8 py-2 rounded-md border-[2px] border-yellow-400 hover:bg-white hover:text-yellow-600 transition-all duration-1000 max-lg:px-6'>SIGN UP</button>
          </ul>
            {/* className='hover:bg-black hover:text-white  px-4 py-2 rounded-md transition-all duration-700  ' */}
            <button className='text-4xl hidden  max-md:block' type='submit' ><ion-icon name="menu-outline"></ion-icon></button>
      </div>
    </div>
  )
}


