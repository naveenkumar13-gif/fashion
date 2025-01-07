import React, { useState } from 'react'


const listStyle= "active==='CATALOGUE' ?  hover:bg-[#000] hover:text-white  px-4 py-2 rounded-md transition-all duration-700': '' "

  const Btn='text-4xl hidden  max-lg:block'
export default function NavBar() {
  const[Open,SetOpen]=useState(false)


  return (
     <>

     
      <div className='flex justify-between  item-center p-12 max-xl:p-8 max-md:p-4'>
        <Logo/>        
        <NavLink/>
        <div onClick={()=>SetOpen(!Open)} className=' hidden max-md:block'>
  {Open ? 
      <button className={Btn} type='submit'><ion-icon name="close-outline"></ion-icon></button> :
<button className={Btn} type='submit'  ><ion-icon name="menu-outline"></ion-icon></button>
         }
  </div>
      </div>

      
      {Open && (
        <div className="hidden max-md:flex flex-col gap-4 items-center justify-center text-[#000]  py-[2rem] font-semibold   " >
          <a className="relative group" href="#home"  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#000] transition-all duration-700 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#property"  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={700}>
            Property
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#000] transition-all duration-700 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#blog"  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={900}>
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#000] transition-all duration-700 group-hover:w-full"></span>
          </a>
          <a className="relative group" href="#about"  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={1000}>
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#000] transition-all duration-700 group-hover:w-full"></span>
          </a>

          <button className='bg-[#fec44e] text-white px-8 py-2 rounded-md border-[2px] border-yellow-400 hover:bg-white hover:text-yellow-600 transition-all duration-1000 max-lg:px-6'  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={1200}>SIGN UP</button>
        
        </div>
      )}

    </>
  )
}
function Logo(){
    return(
        <ul className='flex  items-center gap-2  text-4xl max-lg:text-2xl' >
            <li>
            <ion-icon name="logo-vimeo" ></ion-icon>
            </li>
            <li className='font-extrabold ' data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
            FASHION
            </li>
        </ul>
      
          )
}


function NavLink(){
  const [active,setActive]=useState('')
  return(
    <>
    <ul className='flex  gap-6 items-center  font-semibold   max-lg:gap-2   max-lg:text-sm   max-md:hidden'  >
    <li className={active=== 'CATALOGUE'} >
      <a href="#"  onClick={()=>setActive('CATALOGUE')} className={listStyle}>CATALOGUE</a>
      </li>
      <li>
      <a href="#Product"   onClick={()=>setActive('FASHION')} className={listStyle}> FASHION</a>
      </li>
    <li  className={listStyle}>
      <a href="#sale"  onClick={()=>setActive('FAVOURITE')}>FAVOURITE</a>
      </li>
    <li  className={listStyle}>
      <a href="#"   onClick={()=>setActive('LIFESTYLE')}> LIFESTYLE</a>
      </li>

    <button className='bg-[#fec44e] text-white px-8 py-2 rounded-md border-[2px] border-yellow-400 hover:bg-white hover:text-yellow-600 transition-all duration-1000 max-lg:px-6'>SIGN UP</button>
  </ul>
  
  </>
  )
}