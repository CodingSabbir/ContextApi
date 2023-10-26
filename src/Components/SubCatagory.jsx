import React, { useContext, useEffect, useState } from 'react';
import { CatagoryContext } from '../App';
import Child from './Child';
import CatagoryDetalis from './CatagoryDetalis';
const allProduct=[
    { name: 'samsung', catagory: 'mobile' },
    { name: 'apple', catagory: 'mobile' },
    { name: 'oppo', catagory: 'mobile' },
    { name: 'sony', catagory: 'camera' },
    { name: 'canon', catagory: 'camera' },
    { name: 'nikon', catagory: 'camera' },
    { name: 'hp', catagory: 'laptop' },
    { name: 'asus', catagory: 'laptop' },
    { name: 'lenovo', catagory: 'laptop' },
]
const SubCatagory = () => {
    const [catagory]=useContext(CatagoryContext)
    const [product,setProduct] = useState([])
    useEffect(()=>{
        const matchProduct=allProduct.filter(pd => pd.catagory.toLowerCase() === catagory.toLowerCase())
        setProduct(matchProduct)
    },[catagory])
    console.log(product)
    return (
        <>
            <h1 className='text-[22px] font-mono'>Sub Catagory  : {catagory}</h1>
            <Child/>
            {
                product.map(pd => <CatagoryDetalis product={pd}/>)
            //    product.map((data,i)=>(
            //     <CatagoryDetalis product={data} key={i}/>
            //     ))
            }
        </>
    );
};

export default SubCatagory;



