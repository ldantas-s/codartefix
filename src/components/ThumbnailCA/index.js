import React from 'react';
import { Link } from 'react-router-dom';

// Components
import LinkCA from '../LinkCA';
// Styles
import { VideoCard, Title } from './style';
// Services
import GetYoutubeInfo from '../../services/GetYoutubeInfo';


export default function ThumbnailCA({ urls, title }) {
    const { urlVideo, urlCateg } = urls;
    let existUrlCateg = urlCateg !== '';
    
    let url = existUrlCateg ? `category/${urlCateg}` : urlVideo,
        target = existUrlCateg ? '_self': '_blank',
        tag = existUrlCateg ? Link : 'a';


    return ( 
        <VideoCard key="titulo">
            <LinkCA as={tag} to={url} href={existUrlCateg ? '' : url} target={target}>
                <Title>{ title }</Title>
                <VideoCard.Img src={GetYoutubeInfo(urlVideo).thumbnail} alt="Thumbnail video" />
            </LinkCA>
        </VideoCard>
    );
}