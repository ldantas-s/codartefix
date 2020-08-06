import React from 'react';

// Components
import HeaderCA from '../../components/HeaderCA';
import FooterCA from '../../components/FooterCA';
// Styles
import { BodyPageDefault } from "./style";


export default function PageDefault({ children }) {

    return (
        <BodyPageDefault>
            <HeaderCA />
                { children }
            <FooterCA />
        </BodyPageDefault>
    );
}