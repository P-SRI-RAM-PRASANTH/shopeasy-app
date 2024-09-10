import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div>
        <div className='container grid-cols-2 py-16'>
            <h2 className='font-medium text-[20px] pb-4'>
                TESTINOMIALS
            </h2>
            <div className='grid lg:grid-cols-[300px,1fr] gap-4'>
                <div className='border border-gray-300 rounded-2xl grid place-items center'>
                    <div className='text-center flex flex-col items-center gap-1'>
                        <Image className='rounded-full inline-block'
                            src="/user.jpg"
                            width={80}
                            height={80}
                            alt="profile"
                        />
                        <h2 className='text-gray-500 font-black text-[20px]'>Esla Doe</h2>
                        <p>CEO and Founder Invision</p>
                        <Image 
                            src="/quote.jpg" 
                            width={30} 
                            height={30} 
                            alt="quotos"
                        />
                        <p className='max-w-[200px] text-gray-500'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                    </div>
                </div>
                <div className='bg-red-600 bg-[url(/bb.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                    <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-2 grid place-items-center gap-3'>
                        <button className='bg-blackish text-white p-2 rounded-md'>25% Discount</button>
                        <h2 className='font-extrabold text-2xl text-[#272727]'>Festival Collection</h2>
                        <p className='text-gray-500 text-[20px]'>
                            Starting @-₹200<strong>Shop Now</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial