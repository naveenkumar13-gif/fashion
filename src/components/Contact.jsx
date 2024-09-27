import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className=' px-14 py-10  max-lg:px-8 max-lg:py-8  max-md:py-5  bg-[#EDCE49] text-white ' >
            <h1  className='font-bold text-5xl max-md:text-center mb-2 max-lg:my-8  max-xl:text-4xl  max-lg:text-[2.5rem] max-md:my-4 max-md:text-[1.5rem] w-[60%] text-center m-auto  max-xl:w-[70%]  max-lg:w-[80%] max-md:w-full max-md:leading-tight'  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h1>
                <p  className=' text-2xl max-xl:text-xl max-lg:text-[1rem] max-md:leading-tight font-semibold text-center' data-aos='fade-left' data-aos-duration={1000}   data-aos-delay={500}>Type your email down below and be young wild generation</p>
              
               <label className='flex items-center justify-center my-4 max-lg:my-8  max-md:my-4 relative  max-sm:hidden 'data-aos='zoom-in' data-aos-duration={1000}   data-aos-delay={500}>
               <input  type='text' placeholder='Search Your Fav..'   className="  py-[0.8rem] pl-[0.8rem] pr-[10rem] border-none outline-none rounded-[0.3rem] max-sm:pr-[0.8rem] "/>
               <p className='bg-black text-white px-4 py-2 rounded-md max-lg:py-2 S absolute right-[37.5%] max-xl:right-[35%]  max-lg:right-[32%] max-md:right-[26%] max-sm:right-[20%]'>shop Now</p>
               
               
               </label>
          
            </div>
        </div>
    );
}

export default Contact;
