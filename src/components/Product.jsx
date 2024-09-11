import React from 'react'
import Person1 from "../Assets/person-1.png"
import Person2 from "../Assets/person-2.png"
import Person3 from "../Assets/person-3.png"




const data=[{
    image:Person1,
    Name:'Hoodies & Sweetshirt',
    Explore:'Explore Now!'
},{
    image:Person2,
    Name:'Hoodies & Sweetshirt',
    Explore:'Explore Now!'
},{
    image:Person3,
    Name:'Hoodies & Sweetshirt',
    Explore:'Explore Now!'
}
,{
    image:Person1,
    Name:'Hoodies & Sweetshirt',
    Explore:'Explore Now!',
 

}
]

// data-aos="zoom-in"
//   data-aos-delay={index * 100}
// data-aos-duration={1000}

const Product = () => {
    return (
        <div className='p-12 max-xl:p-8 max-md:p-4  bg-[#E6C744]' id='Product'>
            <h1 className='font-bold text-5xl max-md:text-center mb-8  '>New Traend</h1>
            <ul className='flex justify-between items-center gap-10 max-md:flex-wrap max-lg:gap-7 '>
                {data.map((item,index)=>(
                    <div className='w-full' >
                        <div className='w-[100%] max-md:w-1/2 max-md:m-auto  ' >
                        <img src={item.image} alt='person' className='w-full h-full '  data-aos="zoom-in"  data-aos-delay={index * 100} />
                        </div>
                        <div className='flex flex-col gap-2 mt-4 max-md:w-1/2 max-md:m-auto max-md:mt-5  '>
                        <h2 className=' text-2xl max-xl:text-xl max-lg:text-[1rem]  font-semibold'>{item.Name}</h2>
                        <p  className='text-[#0C1D31]'>{item.Explore}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Product;
