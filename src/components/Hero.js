"use client";


import React from 'react'
import Slide from "./Slide";
import Slider from 'react-slick'


const Hero = () => {

    let settings = {
        dots: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        pauseOnHover: false,
    };

   const slideData=[{
        id:0,
        img:"/banner-1.jpg",
        title:'trending',
        maintitle:"WOMEN'S LATEST FASHION SALE",
        price:"$20",
    }, 
    {
        id:1,
        img: "/banner-2.jpg",
        title:'trending',
        maintitle:"STYLISH SUNGLASSES",
        price:"$20",
    },
    {
        id:2,
        img: "/banner-3.jpg",
        title:'trending',
        maintitle:"CLASSY HAND-BAGS",
        price:"$20",
    },
    ];
    return (
    <div>
        <div className='container pt-6 lg:pt-0'>
         <Slider {...settings} > 
           {slideData.map((item)=>{

            return (<Slide key={item.id} img={item.img} title={item.title} mainTitle={item.maintitle} price={item.price}/> );
          })}
         </Slider>
        </div>
    </div>
    );
};

export default Hero;