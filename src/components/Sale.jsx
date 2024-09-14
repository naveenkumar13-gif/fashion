import React from 'react';
import Image from '../Assets/Sale.png'



const Sale = () => {
    return (
        <div className='flex  gap-10 bg-[#EDCE49]  items-center max-md:flex-col max-md:pt-6 max-md:gap-6 max-sm:gap-4'>
            <div className='w-1/2  max-md:w-[80%] max-md:ml-[-9%] '> 
                <img src={Image} alt='Sales' className='w-full h-full' data-aos='fade-right' data-aos-delay={1300}  data-aos-duration={1100}  />
            </div>
            <div  className='flex flex-col gap-4  max-md:gap-2 max-md:w-[90%] max-md:mx-auto'> 
                <h1 className='text-[4rem] font-extrabold leading-normal max-lg:text-[3rem] max-md:text-center  '  >
                    
                    <p className='bg-white w-[90%] pl-4 max-md:text-[2.5rem] max-sm:w-[65%] max-md:w-[50%] max-md:m-auto max-sm:m-auto'  data-aos='zoom-in'  data-aos-duration={1200} data-aos-delay={1000} >PAYDAY
                    </p>
                    <p className='max-md:text-[2.5rem] max-md:w-[100%] ' data-aos='zoom-in'  data-aos-duration={1400} data-aos-delay={1200}>
                    SALE NOW</p>
                   
                    </h1>
                    <p className='text-xl max-lg:text-[1rem] max-lg:leading-[1.6]  max-md:text-center font-medium '  data-aos='zoom-in' data-aos-duration={1200}>Spend minimal $100 get 30% off<br></br>
                    voucher code for your next purchase</p>
                    <p className='text-xl max-lg:text-[1rem] max-lg:leading-[1.6]  max-md:text-center  font-medium'  data-aos='zoom-out'  data-aos-duration={1200}>1 June - 10 June 2021<br></br>
                    *Terms & Conditions apply</p>
                
               
                <div className=' max-md:grid max-md:place-items-center'>
                <button className='bg-black text-white px-8 py-4 rounded-md max-lg:py-2 max-lg:px-6 font-semibold hover:bg-white hover:text-black transition-colors duration-1000'  data-aos='fade-left' data-aos-duration={1000} data-aos-delay={1000}    >Shop Now</button>
               
                </div> </div>

            </div>
// data-aos='fade-left' data-aos-duration={1000} data-aos-delay={1000}
    );
}

export default Sale;
