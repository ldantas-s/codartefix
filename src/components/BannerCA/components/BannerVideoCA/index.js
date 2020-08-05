import React from 'react';

import { ContainerVideoCA, VideoIframe} from './style';


export default function BannerVideoCA({ iframeSrc }) {
    return(
        <ContainerVideoCA>
            <VideoIframe 
                src={ iframeSrc } 
                frameBorder="0"
                // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </ContainerVideoCA>
    );
}