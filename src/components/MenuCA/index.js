import React from 'react';
import { Link } from 'react-router-dom';
// Icons
import { FaCaretDown } from 'react-icons/fa';
// Styles
import { NavMenu, Menu, SubMenu } from './style';
// Components
import LinkCA from '../LinkCA';

export default function MenuCA() {
    return (
        <NavMenu>
            <Menu>
                <Menu.MenuItem><LinkCA as={Link} to="/">Home</LinkCA></Menu.MenuItem>
                <Menu.MenuItem><LinkCA as={Link} to="/categories">Categories</LinkCA></Menu.MenuItem>
                <Menu.MenuItem>
                    <LinkCA as={Link} to="/">Register<FaCaretDown /></LinkCA>
                    <SubMenu>
                        <SubMenu.SubItem><LinkCA as={Link} to="/register-category">Category</LinkCA></SubMenu.SubItem>
                        <SubMenu.SubItem><LinkCA as={Link} to="/register-video">Video</LinkCA></SubMenu.SubItem>
                    </SubMenu>
                </Menu.MenuItem>
            </Menu>
        </NavMenu>
    );
}

// Falta corrigir um pequeno bug que dá nos itens de menu, quando é aplicado o font-weight ele afasta o item do lado