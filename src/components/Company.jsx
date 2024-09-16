import React from 'react'
import Company1 from '../Assets/Company-1.png'
import Company2 from '../Assets/Company-2.png'
import company3 from '../Assets/Company-3.png'
import company4 from '../Assets/Company-4.png'
import company5 from '../Assets/Company-5.png'


const Comapny=[{
  image:Company1,
},
{
  image:Company2,
},{
  image:company3,
 
},{
  image:company4,
 
},{
  image:company5,
}
]

function Company() {
  return (
    <div>
      {/* <div className=' py-10  '>
<div className='flex justify-evenly items-center  flex-wrap gap-4' >
<img src={Company1} alt={Company1} data-aos='zoom-out' data-aos-duration={1000}  data-aos-delay={200}/>
<img src={Company2} alt={Company1} data-aos='zoom-out' data-aos-duration={1200} data-aos-delay={500} />
<img src={company3} alt={Company1} data-aos='zoom-out' data-aos-duration={1500} data-aos-delay={700} />
<img src={company4} alt={Company1} data-aos='zoom-out' data-aos-duration={1800} data-aos-delay={900} />
<img src={company5} alt={Company1} data-aos='zoom-out' data-aos-duration={2000}  data-aos-delay={1200} />
</div>
      </div> */}
<ul className='flex justify-evenly items-center  flex-wrap gap-4 py-10'data-aos='zoom-out' data-aos-duration={1000}  data-aos-delay={200} >
  {Comapny.map((logo)=>(
    <li >
      <img src={logo.image} alt={logo.image}/>
    
    </li>
  ))}
</ul>
    </div>
  )
}

export default Company
