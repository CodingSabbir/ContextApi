import React, { useContext } from 'react';
import { CatagoryContext } from '../App';

const Child = () => {
    const [count,setCount] = useContext(CatagoryContext)
    return (
        <>
            <h1 className='text-[25px]'>Child Components </h1>
            <button className='text-[20px] border-2 bg-yellow-300 px-2' onClick={() => setCount(count +1)}>Increment</button>
            <p> Count {count}</p>
        </>
    );
};

export default Child;