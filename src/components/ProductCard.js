import React from 'react'
import Image from 'next/image';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const ProductCard = ({img,title,desc,rating,price}) => {
    const starRating = (rating)=>{
        switch (rating) {
            case 1:
                return (
                <div className='flex gap-1 text-[20px] text-[#FF9528]'>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>
                );
            case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9528]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>

                );
            case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9528]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                </div>

                );
            case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9528]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                </div>

                );
            case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9528]'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>

                );


        }
    };
  return (
    <div className='fixed-size-div px-4 border border-gray-200 rounded-xl max-w-[300px]'>
        <div>
            <Image 
             className='w-full h-auto'
            src={img} width={200} height={300} alt={title} />
            <div className='space-y-2 py-2'>
                <h2 className='text-accent '>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                <div className='font-bold flex gap-4 '>
                    {starRating(rating)}
                </div>
                <div>
                   ₹ {price}
                   <del className='text-gray-500 foont-normal'>
                    ₹{parseInt(price)+200}.00
                   </del>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard