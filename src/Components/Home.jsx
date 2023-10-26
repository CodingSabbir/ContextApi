import React, {useContext } from 'react';
import { CatagoryContext } from '../App';

const Home = () => {
   const [count,setCount] = useContext(CatagoryContext)
    return (
        <>
            <h1 className='text-[22px]'>Home Component</h1>
            <h1 className='text-[25px] font-mono'>Count : {count}</h1>
            <button className='border-2 bg-yellow-300 px-2' onClick={ () => setCount(count + 1)}>Increment</button>
        </>
    );
};

export default Home;