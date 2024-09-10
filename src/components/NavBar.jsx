import React from 'react'


export default function NavBar() {
//   const[isOpen,setOpen]=useState(true)
// function handleOnclick(){
//   setOpen(isOpen=>!isOpen)
// }

  return (
    <div>
      <div className='flex justify-between  item-center p-12 max-xl:p-8 max-md:p-4'>
        <ul className='flex  items-center gap-2  text-4xl max-lg:text-2xl' >
            <li>
            <ion-icon name="logo-vimeo" className=''></ion-icon>
            </li>
            <li className='font-extrabold ' data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>

            FASHION
            </li>
        </ul>
        <button className='text-4xl hidden  max-md:block' type='submit' ><ion-icon name="menu-outline"></ion-icon></button>

        <ul className='flex  gap-6 items-center  font-semibold   max-lg:gap-2   max-lg:text-sm   max-md:hidden'  >
            <li><a href="#" className='hover:bg-black hover:text-white  px-4 py-2 rounded-md transition-all duration-700 '>CATALOGUE</a></li>
            <li><a href="#" className='hover:bg-black hover:text-white  px-4 py-2 rounded-md transition-all duration-700 '> FASHION</a></li>
            <li><a href="#" className='hover:bg-black hover:text-white  px-4 py-2 rounded-md transition-all duration-700 '>FAVOURITE</a></li>
            <li><a href="#" className='hover:bg-black hover:text-white  px-4 py-2 rounded-md   transition-all duration-700'>LIFESTYLE</a></li>
            <button className='bg-black text-white px-8 py-2 rounded-md hover:bg-slate-800 transition-all duration-500 max-lg:px-6'>SIGN UP</button>

        </ul>
            
      </div>
    </div>
  )
}


