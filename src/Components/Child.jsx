import React, { useContext } from 'react';
import { CatagoryContext } from '../App';

const Child = () => {
    const [catagory] = useContext(CatagoryContext)
    return (
        <>
            <h1 className='text-[25px]'>Child Components </h1>
            <p className='text-[22px] font-mono'> Child Catagory : {catagory}</p>
        </>
    );
};

export default Child;