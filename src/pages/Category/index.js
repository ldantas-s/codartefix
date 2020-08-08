import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import PageDefault from '../PageDefault';
import ThumbnailCA from '../../components/ThumbnailCA';
// Styles 
import { CategoryHeader, CategoryMain } from './style';
// Database
import { categorias } from "../../database/youtubeInfo.json";


export default function Category() {
    const { slug } = useParams();
    const { titulo, videos } = categorias.filter((categoria) => categoria.titulo.replace(/' '/g,' ','-').toLowerCase() === slug)[0];

    return(
        <PageDefault>
            <CategoryHeader>
                <h1>{ titulo }</h1>
            </CategoryHeader>

            <CategoryMain>
                {videos.map(({ titulo, url }, index) => (
                    <ThumbnailCA
                        key={index}
                        urls={{ urlVideo: url, urlCateg:'' }}
                        title={titulo}
                    />
                ))}
            </CategoryMain>
        </PageDefault>
    );
}