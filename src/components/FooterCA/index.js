import React from 'react';
// Styles
import FooterStyle from './style';
// Components
import LinkCA from '../LinkCA';


export default function FooterCA() {
    return (
        <FooterStyle>
            <p>
                Codarteflix - by <LinkCA target="_blank" href="https://twitter.com/ldantas_s">Luciano Dantas</LinkCA>
            </p>
        </FooterStyle>
    );
}