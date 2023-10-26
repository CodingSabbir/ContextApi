import React, {useContext } from 'react';
import { CatagoryContext } from '../App';

const Home = () => {
   const [catagory,setCatagory] = useContext(CatagoryContext)
    return (
        <>
            <h1 className='text-[22px]'>Home Component</h1>
            <h1 className='text-[25px] font-mono'>Catagory : {catagory}</h1>
            <button className='border-2 bg-yellow-300 px-2' onClick={ () => setCatagory('Laptop')}>Laptop</button>
            <button className='border-2 bg-yellow-300 px-2' onClick={ () => setCatagory('Mobile')}>Mobile</button>
            <button className='border-2 bg-yellow-300 px-2' onClick={ () => setCatagory('Camera')}>Camara</button>
        </> 
    );
};

export default Home;