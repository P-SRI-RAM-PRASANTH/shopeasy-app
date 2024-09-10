import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs";

const Headertop = () => {
  return (
    <div className='boder-b border-grey-200 hidden sm:block'>
        <div className='container py-4'>
            <div className='flex justify-between items-center '>
                <div className='hidden lg:flex gap-1'>
                    <div className="header_top__icon_wrapper">
                        <BsFacebook/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsInstagram/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsTwitter/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsLinkedin/>
                    </div>
                </div>
                <div className='text-grap-500'>
                    <strong>Free Shipping </strong>
                      ORDER OVER 500 RUPEES
                </div>
                <div className='flex gap-4'> 
                    <select name='currency' id='currency' className="text-gray-500 text-[12px] w-[70px]">
                        <option value="INR">INR ₹</option>
                        <option value="USD">USD $</option>
                        <option value="EUR">EUR €</option>

                    </select>
                    <select name='language' id='language' className="text-gray-500 text-[12px] w-[70px]">
                        <option value="English">English</option>
                        <option value="French">French</option>

                    </select>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Headertop