import React from 'react';
import Slide from 'react-slick';
// Components
import ThumbnailCA from '../ThumbnailCA';
// Styles
import { CarouselStyle, NextArrow, PrevArrow } from './style';


export default function CarouselCA({ videoLinks }) {
  
  const SlickNextArrow = ({ currentSlide, slideCount, ...props }) => (
    <NextArrow 
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    />
  );
  const SlickPrevArrow = ({ currentSlide, slideCount, ...props }) => (
    <PrevArrow 
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    />
  );


  let settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 768,
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
  }
    return (
      <CarouselStyle>
          <Slide {...settings}>
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
