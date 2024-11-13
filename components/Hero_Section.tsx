import React from 'react'
import Image from 'next/image'

const Hero_Section = () => {
  return (
    <div>
        <main className="flex flex-col md:flex-row ">
            <div className=' md:w-1/2 w-full flex  flex-col justify-center ml-16'>
                <h1 className= ' w-[350px] md:w-[495px] mx-28 my-10 md:mx-0 md:my-3 h-[189px] font-bold text-[40px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
                </h1>
                <p className='text-[30px]  md:w-[802px] w-[600px] h-[140px] md:h-[147px] font-medium text-[#787054] mt-4'>
                An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>
                <button className=' mx-32 w-[288px] h-[58px] bg-[#A29875] rounded-lg mt-4 md:ml-5 text-white font-medium text-center text-[30px] hover:bg-[#d4c696] hover:text-slate-800'>Explore Now</button>

                
            </div>
            <div className=' md:w-1/2 w-full md:flex md:justify-center  md:my-20 md:ml-20'>
                <Image src={"/images/figma-image.jpeg"} alt='Figma Image'   width={442} height={611}
                className="inline-block ml-32 "
                />


            </div>
        </main>
      
    </div>
  )
}

export default Hero_Section



