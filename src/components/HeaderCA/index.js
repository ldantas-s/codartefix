import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Components
import LogoCA from '../LogoCA';
// import ButtonCA from '../ButtonCA';
import MenuCA from '../MenuCA';
// Styles
import HeaderCAStyle from './style';
import LinkCA from '../LinkCA';


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
            <LinkCA as={Link} to="/">
                <LogoCA></LogoCA>
            </LinkCA>
            <MenuCA />  
        </HeaderCAStyle>
    );
}