import React from 'react';

// Styles
import { BannerCAMain, ContentAreaContainer } from './style';
//Components
import BannerVideoCA from './components/BannerVideoCA';


function getYouTubeId(youtubeURL) {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,'$7',
    );
}

export default function BannerCA({ videoTitle, videoDescription, url }) {

    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return(
        <BannerCAMain backgroundImg={bgUrl}>
            <ContentAreaContainer>

                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
                    <ContentAreaContainer.Description>{videoDescription}</ContentAreaContainer.Description>
                </ContentAreaContainer.Item>


                <ContentAreaContainer.Item>
                    <BannerVideoCA youtubeID={youTubeID} />
                </ContentAreaContainer.Item>


            </ContentAreaContainer>
        </BannerCAMain>
    );
}