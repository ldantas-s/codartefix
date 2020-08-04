import React from 'react';
import Slide from 'react-slick';

// Components
import LinkCA from '../LinkCA';
// Services
import GetYoutubeInfo from '../../services/GetYoutubeInfo';
// Styles
import { VideoCard, CarouselStyle, Title } from './style';


export default function CarouselCA({ videoLinks }) {
    return (
        <CarouselStyle>
          <Slide {...{
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          }}>
              {videoLinks.map(({ titulo, url }) => (
                  <VideoCard>
                      <LinkCA href={url}>
                          <Title>{ titulo }</Title>
                          <VideoCard.Img src={GetYoutubeInfo(url).thumbnail} alt="Thumbnail video" />
                      </LinkCA>
                  </VideoCard>
              ))}
            </Slide>
        </CarouselStyle>
    );
}
