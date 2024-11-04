import React from 'react'
import Image from 'next/image'

const Hero_Section = () => {
  return (
    <div>
        <main className='flex'>
            <div className='w-1/2 flex flex-col justify-center ml-16'>
                <h1 className='w-[495px] h-[189px] font-bold text-[40px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE
                </h1>
                <p className='text-[30px] w-[802px] h-[147px] font-medium text-[#787054] mt-4'>
                An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>
                <button className='w-[288px] h-[58px] bg-[#A29875] rounded-lg mt-4 ml-5 text-white font-medium text-center text-[30px] hover:bg-[#d4c696] hover:text-slate-800'>Explore Now</button>

                
            </div>
            <div className='w-1/2 flex justify-center my-20 ml-20'>
                <Image src={"/images/figma-image.jpeg"} alt='Figma Image' width={442} height={611}/>


            </div>
        </main>
      
    </div>
  )
}

export default Hero_Section
