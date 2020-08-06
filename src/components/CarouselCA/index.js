import React from 'react';
import Slide from 'react-slick';

// Components
import ThumbnailCA from '../ThumbnailCA';
// Styles
import { CarouselStyle} from './style';


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
              {videoLinks.map(({ url, titulo }, index) => (
                <ThumbnailCA
                  key={titulo+index}
                  title={titulo}
                  urls={{ urlVideo:url, urlCateg: '' }}
                />
              ))}
            </Slide>
        </CarouselStyle>
    );
}
