import React from 'react';

// Components
import HeaderCA from '../../components/HeaderCA';
import FooterCA from '../../components/FooterCA';


export default function PageDefault({ children }) {

    return (
        <>
            <HeaderCA />
                { children }
            <FooterCA />
        </>
    );
}