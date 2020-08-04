import React from 'react';

// Styles
import { BannerCAMain, ContentAreaContainer } from './style';
//Components
import BannerVideoCA from './components/BannerVideoCA';
//Services
import GetYoutubeInfo from '../../services/GetYoutubeInfo';


export default function BannerCA({ videoTitle, videoDescription, url }) {

    const { bgUrl, iframeSrc } = GetYoutubeInfo(url);

    return(
        <BannerCAMain backgroundImg={bgUrl}>
            <ContentAreaContainer>

                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
                    <ContentAreaContainer.Description>{videoDescription}</ContentAreaContainer.Description>
                </ContentAreaContainer.Item>


                <ContentAreaContainer.Item>
                    <BannerVideoCA iframeSrc={iframeSrc} />
                </ContentAreaContainer.Item>

            </ContentAreaContainer>
        </BannerCAMain>
    );
}