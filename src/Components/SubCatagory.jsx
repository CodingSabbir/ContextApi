import React, { useContext } from 'react';
import { CatagoryContext } from '../App';
import Child from './Child';

const SubCatagory = () => {
    const catagory=useContext(CatagoryContext)
    return (
        <>
            <h1>Sub Catagory  : {catagory}</h1>
            <Child/>
        </>
    );
};

export default SubCatagory;