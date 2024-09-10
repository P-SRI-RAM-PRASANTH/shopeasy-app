import React from 'react'
import ProductCard from './ProductCard';
const productsData =[
    {
        img:"/jacket.jpg ",
        title:'JACKET',
        desc:"MEN YARN FULL-ZIP JACKET",
        rating:4,
        price:'899',
    },
    {
        img:"/skirt-1.jpg ",
        title:'SKIRT',
        desc:"FULL BLACK WRAP-MIDI SKIRT ",
        rating:5,
        price:'549',
    },
    {
        img:"/partywear-1.jpg ",
        title:'PARTYWEAR',
        desc:"WOMENS PARTY_WEAR",
        rating:4,
        price:'689',
    },
    {
        img:"/shirt.jpg ",
        title:'SHIRT',
        desc:"CLASSIC LOOK MEN's-SHIRT ",
        rating:5,
        price:'449',
    },
    {
        img:"/sport-1.jpg ",
        title:'SPORT',
        desc:"TRECKING",
        rating:4,
        price:'647',
    },
    {
        img:"/shoes-1.jpg ",
        title:'SHOES',
        desc:"RUNNING-COMPATABLE-SPORT",
        ratinng:3,
        price:'589',
    },
    {
        img:"/watches-1.jpg ",
        title:'WATCHES',
        desc:"LEATHER WATCH",
        rating:5,
        price:'834',
    },
    {
        img:"/fancybag.jpg ",
        title:'HAND BAGS',
        desc:"FANCY HAND BAGS ",
        rating:4,
        price:'354',
    }
];

const NewProducts = () => {
  return (
    <div>
        <div className='container pt-16'>
            <h2 className='font-medium text-2xl pb-4'>New Products</h2>
            <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                {
                    productsData.map((item,index)=>{
                        return (
                            <ProductCard
                               key={index}
                               img={item.img}
                               title={item.title}
                               desc={item.desc}
                               rating={item.rating}
                               price={item.price}
                            />
                        )

                    })
                }
            </div>
        </div>
    </div>
  )
}

export default NewProducts