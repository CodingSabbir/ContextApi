import React from 'react';

const CatagoryDetalis = (props) => {
    const {name}=props.product;
    return (
        <>
            <h1>Catagory Detalis : {name}</h1>
        </>
    );
};

export default CatagoryDetalis;