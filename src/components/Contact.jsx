import React from 'react';

const Contact = () => {
    const ListStyle=" p-1 text-xl bg-[#E6C744]  text-black rounded-lg"
    const UList="flex flex-col gap-4 item-start"
    const H4="text-xl text-white"
    return (
        <div  className=' px-14 py-12  max-lg:px-8 max-lg:py-8  max-md:py-5  bg-[#000] text-[#8E8E8E] '>
            <footer className='flex justify-between items-center max'>
                <div className='flex flex-col gap-2 w-[25%] mb-4'>
                    <h1  className='text-[3rem] font-extrabold  max-lg:text-[2.5rem] max-md:text-center text-white  '  data-aos='zoom-in '  data-aos-duration={1400} data-aos-delay={1200}>
                    FASHION
                    </h1>
                    <p className='text-xl' data-aos='fade-right'  data-aos-duration={1400} data-aos-delay={1200}>Complete your style with awesome clothes from us.</p>
                    <div className='flex gap-4 items-center list-none ' >
                        <li className={ListStyle} data-aos='fade-up'  data-aos-duration={1100} data-aos-delay={500}><ion-icon name="logo-facebook"></ion-icon></li>
                         <li  className={ListStyle} data-aos='fade-left'  data-aos-duration={1200} data-aos-delay={700}><ion-icon name="logo-instagram"></ion-icon></li>
                     <li  className={ListStyle} data-aos='fade-right'  data-aos-duration={1300} data-aos-delay={900}><ion-icon name="logo-twitter"></ion-icon></li>
                        <li  className={ListStyle} data-aos='fade-down'  data-aos-duration={1400} data-aos-delay={1100}><ion-icon name="logo-linkedin"></ion-icon></li> 
                       {/* data-aos='fade-right'  data-aos-duration={1400} data-aos-delay={1200} */}
                    </div>
                </div>
                <div className='flex justify-between  w-1/2'>
                    <ul className={UList} data-aos='fade-down'  data-aos-duration={1400} data-aos-delay={1200}>
                        <h4 className={H4}>Company</h4>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Support</li>
                        <li>carees</li>
                    </ul>
                    <ul className={UList}data-aos='zoom-out'  data-aos-duration={1400} data-aos-delay={1200}>
                        <h4 className={H4}>Quick Link</h4>
                        <li>Share Location</li>
                        <li>Orders Tracking</li>
                        <li> Size Guide</li>
                        <li>FAQs</li>
                    </ul>
                    <ul  className={UList} data-aos='fade-up'  data-aos-duration={1400} data-aos-delay={1200}>
                        <h4 className={H4}>Legal</h4>
                        <li>Terms & conditions</li>
                        <li>Privacy Policy</li>
                       
                    </ul>
                </div>

            </footer>
        </div>
    );
}

export default Contact;
