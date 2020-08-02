import React from 'react';

import { ContainerVideoCA, VideoIframe} from './style';


export default function BannerVideoCA({ youtubeID }) {
    return(

        <ContainerVideoCA>
            <VideoIframe 
                src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=0`} 
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </ContainerVideoCA>
    );
}