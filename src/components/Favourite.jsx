import React from 'react';
import FImage from '../Assets/Favourite.png'
import FImage1 from '../Assets/Favourite1.png'

const favourite=[
    {
    image:FImage,
    Name:'Trending on instagram',
    explore:'  Explore Now!'
},
{
    image:FImage1,
    Name:'All Under $40',
    explore:'  Explore Now!'
},
]






const Favourite = () => {
    return (
        <div className='px-12 py-12 max-xl:p-8 max-md:p-2' >
            <div>
            <h1 className='font-bold text-5xl max-md:text-center my-16 max-lg:my-10 max-md:my-6'  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>New Traend</h1>
                <div className=' flex gap-8 max-md:flex-col max-sm:gap-6 ' >
                    {favourite.map((fav)=>(
                      <FavouriteList fav={fav}   key={fav.Name}/>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Favourite;
 

// data-aos="zoom-in"
//   data-aos-delay={index * 100}
// data-aos-duration={1000}

function FavouriteList({fav}){
    return(
        <div className='w-[100%]  h-full ' >
        <div className='my-4 max-md:w-[70%] max-md:m-auto'  >
            <img src={fav.image} alt={fav.image} className='w-full h-full'  data-aos="zoom-in"  data-aos-delay={100} data-aos-duration={1000}/>
        </div>
       <div className='my-4 max-md:w-[70%] max-md:m-auto max-md:my-6'>
       <h2 className=' text-2xl max-xl:text-xl max-lg:text-[1rem]  font-semibold '  data-aos="fade-left"  data-aos-delay={500}  data-aos-duration={1400} >{fav.Name}</h2>
       <p className='text-[#0C1D31] '  data-aos="fade-right"  data-aos-delay={500}  data-aos-duration={1400} >{fav.explore}</p>
       </div>
        </div>
    )
}