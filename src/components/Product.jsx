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

const Product = () => {
    return (
        <div className='p-12 max-xl:p-8 max-md:p-4 bg-[#e3e6f1]'id='Product'>
            <h1 className='font-bold text-5xl max-md:text-center mb-16 max-lg:mb-12 max-md:mb-10'  data-aos='fade-right' data-aos-duration={1000}   data-aos-delay={500}>New Traend</h1>
            <ul className='flex justify-between items-center gap-10 max-md:flex-wrap max-lg:gap-7 '>
                {data.map((item,index)=>(
                   <ProductList key={index} item={item}/>
                ))}
            </ul>
        </div>
    );
}

export default Product;


function ProductList({item,index}){
    return(
        <div className='w-full'   >
        <div className='w-full max-md:w-[50%] max-md:m-auto hover:scale-[1.1]  transition-all duration-200 overflow-hidden ' >
        <img src={item.image} alt='person' className='w-full h-full '  data-aos="zoom-in"  data-aos-delay={index * 100}   />
        </div>
        <div className='flex flex-col gap-2 mt-4 max-md:mt-4  max-md:gap-0 max-md:w-[45%] max-md:m-auto '>
        <h2 className=' text-2xl max-xl:text-xl max-lg:text-[1rem]  font-semibold ' data-aos="fade-left"  data-aos-delay={500}  data-aos-duration={1400} >{item.Name}</h2>
        <p  className='text-[#0C1D31] '  data-aos="fade-right"  data-aos-delay={300}  data-aos-duration={1200}>{item.Explore}</p>
        </div>
    </div>
    )
}