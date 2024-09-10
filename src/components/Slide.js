import React from 'react';
import Image from 'next/image';

const Slide = ({ img, title, mainTitle, price }) => {
  return (
    <div className='outline-none border-none relative'>
      <div className='absolute left-[30px] md:left[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-4 bg-[#fffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] mg:text-[30px] lg:text-[44px]'>{mainTitle}</h2>
        <h3>
          Starting at <strong>{price}</strong>.00
        </h3>
        <div className='bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish'>Shop now</div>
      </div>
      <Image className='w-[100%] h-[300px] md:h-auto rounded-xl object-cover object-right md:object-left-bottom' src={img} alt={title} width={1800} height={1800} />
    </div>
  );
}

export default Slide;
