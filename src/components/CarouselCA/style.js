import styled from 'styled-components';


export const CarouselStyle = styled.section`
    .slick-prev,
    .slick-next {
        z-index: 10;
        background-color: rgba(0,0,0,1);
        width: 40px;
        height: 83%;
        opacity: .3;
    }
    .slick-prev { left: 0; }
    .slick-next { right: 0; }

    .slick-prev:hover,
    .slick-next:hover {
        opacity: 1;
        background-color: rgba(0,0,0,.5);
        transition: opacity 100ms linear, background-color 100ms linear;
    }
`;
