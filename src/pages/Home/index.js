import React from 'react';

// Components
import HeaderCA from '../../components/HeaderCA';
import FooterCA from '../../components/FooterCA';
import BannerCA from '../../components/BannerCA';
import SectionCA from '../../components/SectionCA';
import TagCA from '../../components/TagCA';
import CarouselCA from '../../components/CarouselCA';
// Database
import { categorias } from '../../database/youtubeInfo.json';


export default function App() {
    return(
        <>
            <HeaderCA />

            <BannerCA 
                videoTitle="Your Name"
                videoDescription="Mitsuha Miyamizu é uma jovem que mora no interior do Japão e que deseja deixar sua pequena cidade para trás para tentar a sorte em Tóquio. Enquanto isso, Taki Tachibana, um jovem que trabalha em um restaurante italiano em Tóquio, deseja largar o seu emprego para tentar se tornar um arquiteto. Os dois não se conhecem, mas estão direta e misteriosamente conectados pelas imagens de seus sonhos."
                url="https://www.youtube.com/watch?v=nLhKXh6sJtk"
            />

            {categorias.map(({ titulo, videos, cor }, index) => (
                <SectionCA key={titulo+index}>
                    <TagCA color={cor}>{ titulo }</TagCA>
                    <CarouselCA videoLinks={videos} />
                </SectionCA>
            ))}


            <FooterCA />
        </>
    );
}