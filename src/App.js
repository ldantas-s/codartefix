import React from 'react';

// Components
import HeaderCA from './components/HeaderCA';
import FooterCA from './components/FooterCA';
import LogoCA from './components/LogoCA';
import ButtonCA from './components/ButtonCA';
import LinkCA from './components/LinkCA';



export default function App() {
    return(
        <>
            <HeaderCA>
                <LogoCA></LogoCA>
                <ButtonCA as="a" href="/">New Video</ButtonCA>  
            </HeaderCA>


            <FooterCA>
                <LinkCA href="/">
                    <LogoCA></LogoCA>
                </LinkCA>
                <p>
                    Criado com carinho por <LinkCA target="_blank" href="https://twitter.com/ldantas_s">Luciano Dantas</LinkCA> na {' '}<LinkCA target="_blank" href="https://twitter.com/search?q=%23ImersaoReact&src=recent_search_click">#imersãoReact</LinkCA>
                </p>
            </FooterCA>
        </>
    );
}