import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

// Components
import LogoCA from '../LogoCA';
import MenuCA from '../MenuCA';
// Styles
import { Header } from './style';


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
        <Header style={headerShow}>
            <a as={Link} to="/">
                <LogoCA></LogoCA>
            </a>
            <Header.Menu>
                <Header.MenuItem><Link to="/">Home</Link></Header.MenuItem>
                <Header.MenuItem><Link to="/categories">Categories<FaCaretDown /></Link></Header.MenuItem>
            </Header.Menu> 
        </Header>
    );
}