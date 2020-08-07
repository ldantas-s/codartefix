import React from 'react';
import { useParams } from 'react-router-dom';


export default function Category() {
    const { slug } = useParams();
    
    return(
        <>
            <h1 style={{color:'white'}}>Category {slug}</h1>
        </>
    );
}