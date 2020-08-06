import React from 'react';

// Components
import LinkCA from '../LinkCA';
// Styles
import { VideoCard, Title } from './style';
// Services
import GetYoutubeInfo from '../../services/GetYoutubeInfo';


export default function ThumbnailCA({ urls, title}) {
    const { urlVideo, urlCateg } = urls;
    let existUrlCateg = urlCateg !== '';
    
    let url = existUrlCateg ? urlCateg : urlVideo;
    let target = existUrlCateg ? '_self': '_blank';

    return ( 
        <VideoCard key="titulo">
            <LinkCA href={url} target={target}>
                <Title>{ title }</Title>
                <VideoCard.Img src={GetYoutubeInfo(urlVideo).thumbnail} alt="Thumbnail video" />
            </LinkCA>
        </VideoCard>
    );
}