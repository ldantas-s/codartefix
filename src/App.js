import React from 'react';

// Components
import HeaderCA from './components/HeaderCA';
import FooterCA from './components/FooterCA';
import LogoCA from './components/LogoCA';
import ButtonCA from './components/ButtonCA';
import LinkCA from './components/LinkCA';
import BannerCA from './components/BannerCA';


export default function App() {
    return(
        <>
            <HeaderCA>
                <LogoCA></LogoCA>
                <ButtonCA as="a" href="/">New Video</ButtonCA>  
            </HeaderCA>

            <BannerCA 
                videoTitle="Your Name"
                videoDescription="Mitsuha Miyamizu é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana, um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos."
                url="https://www.youtube.com/watch?v=nLhKXh6sJtk"
            />


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