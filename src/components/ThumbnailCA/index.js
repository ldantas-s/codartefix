import React from 'react';

// Components
import LinkCA from '../LinkCA';
// Styles
import { VideoCard, Title } from './style';
// Services
import GetYoutubeInfo from '../../services/GetYoutubeInfo';


export default function ThumbnailCA({ url, title }) {
    return (
        <VideoCard key="titulo">
            <LinkCA href={url} target="_blank">
                <Title>{ title }</Title>
                <VideoCard.Img src={GetYoutubeInfo(url).thumbnail} alt="Thumbnail video" />
            </LinkCA>
        </VideoCard>
    );
}