import React, { useState, useEffect } from 'react';

// Components
import LogoCA from '../LogoCA';
// import ButtonCA from '../ButtonCA';
import MenuCA from '../MenuCA';
// Styles
import HeaderCAStyle from './style';


export default function HeaderCA() {
    const [ scrollY, setScrollY ] = useState(0);
    const [ headerShow, setHeaderShow ] = useState({});

    window.onscroll = function() {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        if (scrollY > 72) {
            setHeaderShow({
                backgroundColor: 'var(--black)',
                borderBottom: '3px solid var(--primary)'
            });
        } else {
            setHeaderShow({});
        }

    }, [scrollY]);

    return (
        <HeaderCAStyle style={headerShow}>
            <LogoCA></LogoCA>
            <MenuCA />  
        </HeaderCAStyle>
    );
}