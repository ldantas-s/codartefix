import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';

// Components
import LogoCA from '../LogoCA';
// Styles
import { Header } from './style';
// Database
import { categorias } from '../../database/youtubeInfo.json';


export default function HeaderCA() {
    const [ scrollY, setScrollY ] = useState(0);
    const [ headerShow, setHeaderShow ] = useState({});
    const [ url ] = useState(useRouteMatch().path.slice(0,10));

    function urlCategories(slug) {
        return url === '/category/' ? slug :`category/${slug}`;
    }

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
            <Link to="/">
                <LogoCA></LogoCA>
            </Link>
            <Header.Menu>
                <Header.MenuItem><Link to="/">Home</Link></Header.MenuItem>
                <Header.MenuItem>
                    <Link to="">Categories<FaCaretDown /></Link>
                
                    <Header.Dropdown>
                        {categorias.map(({ titulo }, index) => (
                            <Header.DropdownItem key={titulo + index}>
                                <Link to={() => urlCategories(titulo.replace(/' '/g,' ','-').toLowerCase())}>
                                    { titulo }
                                </Link>
                            </Header.DropdownItem>
                        ))}
                    </Header.Dropdown>
                </Header.MenuItem>
            </Header.Menu> 
                
        </Header>
    );
}