import React from 'react';
import { Link } from "react-router-dom";
// Styles
import FooterStyle from './style';
// Components
import LinkCA from '../LinkCA';
import LogoCA from '../LogoCA';


export default function FooterCA() {
    return (
        <FooterStyle>
            <LinkCA as={Link} to="/">
                <LogoCA></LogoCA>
            </LinkCA>
            <p>
                Criado com carinho por <LinkCA target="_blank" href="https://twitter.com/ldantas_s">Luciano Dantas</LinkCA> na {' '}<LinkCA target="_blank" href="https://twitter.com/search?q=%23ImersaoReact&src=recent_search_click">#imersãoReact</LinkCA>
            </p>
        </FooterStyle>
    );
}