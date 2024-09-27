import React from 'react'
import Mobile from '../Assets/Mobile app.png'

function Download() {
   
  return (
    <div className='px-12 py-12 max-xl:p-8 max-md:p-2 flex items-center justify-around max-md:flex-col '>
            <DownloadList/>
            <DownloadImg/>
    </div>
  )
}

export default Download

// after:border-gray-900 after:border-4 after:rounded-full 624 640 432 448





function DownloadList(){
    return(
    <div className=' flex flex-col gap-8 max-lg:gap-4 max-md:gap-2 '>
      <DownloadContent/>
    <div className='flex items-center gap-2 text-2xl  cursor-pointer'>
      <Btn/>
    </div>
</div>
    )
}


function DownloadContent(){
    return(
        <>
    <h1  className='font-bold text-6xl max-md:text-center max-lg:my-8  max-xl:text-5xl  max-lg:text-[2.5rem] max-md:my-4 max-md:text-[2rem]'  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
    DOWNLOAD APP &<br></br>GET THE VOUCHER!
    </h1>

    <p  className=' text-2xl max-xl:text-xl max-lg:text-[1rem]  font-semibold  max-md:text-center'  data-aos='fade-left' data-aos-duration={1000}   data-aos-delay={500}>Get 30% off for first transaction using<br></br>
    Rondovision mobile app for now.</p>
        </>
    )
}
function Btn(){
    const AppStyle='flex items-center  gap-2 bg-[#fec44e] text-white px-8 py-2 rounded-md border-[2px] border-yellow-400 hover:bg-white hover:text-yellow-600 transition duration-1000  max-lg:px-6 max-md:px-4 '
    const Font='font-bold max-md:text-sm'
    return(
<div className='flex gap-4  max-md:m-auto max-md:gap-4'>
<button className={AppStyle}  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>
<ion-icon name="logo-google-playstore"></ion-icon>
<p className={Font}>Play Store</p>
</button>

<button className={AppStyle}  data-aos='fade-left' data-aos-duration={1000}   data-aos-delay={500}>
<ion-icon name="logo-apple-appstore"></ion-icon>
<p className={Font}>App Store</p>
</button> 
</div>
    )
}

const DownloadImg =()=>{
    return(
        <div className='w-[30%] max-md:w-[60%] '>
    <img src={Mobile} alt='mobile' className='w-full h-1/2' data-aos='fade-left' data-aos-duration={1000}   data-aos-delay={1200} />
    {/* <div className="absolute   block  after:content-[''] after:absolute after:border-4 after:rounded-full  after:w-[34rem] after:h-[34rem]  after:top-[-633px] after:right-[-30rem] z-[-3] "></div>
    <div className="absolute   block  after:content-[''] after:absolute   after:border-4 after:rounded-full  after:w-[30rem] after:h-[30rem]  after:top-[-600px] after:right-[-444px] z-[-1] "></div>
    <div className="absolute   block  after:content-[''] after:absolute   after:border-4 after:rounded-full   after:w-[25rem] after:h-[25rem]  after:top-[-35rem] after:right-[-405px] z-[-1] "></div> */}
</div>
    )
}
