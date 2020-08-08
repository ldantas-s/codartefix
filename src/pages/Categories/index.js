import React from 'react';

// Components
import PageDefault from '../PageDefault';
import ThumbnailCA from '../../components/ThumbnailCA';
// Styles
import { MainCategories } from './style';
// database
import { categorias } from "../../database/youtubeInfo.json";


export default function Categories() {
    return(
        <PageDefault>
            <MainCategories>
                <MainCategories.Header>
                    <h1>Categories</h1>
                </MainCategories.Header>

                <MainCategories.Main>
                    {categorias.map(({ titulo, videos }, index) => (
                        <ThumbnailCA
                            key={index}
                            urls={{ urlVideo: videos[0].url, urlCateg:titulo.replaceAll(' ','-').toLowerCase() }}
                            title={titulo}
                        />
                    ))}
                </MainCategories.Main>


            </MainCategories>
        </PageDefault>
    );
}