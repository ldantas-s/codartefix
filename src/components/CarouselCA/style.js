import styled from 'styled-components';


export const CarouselStyle = styled.section`
    /* border: 1px solid red; */
`;
export const Title = styled.h3`
    width: 100%;
    padding: 20px;
    margin: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    opacity: 0;
`;
export const VideoCard = styled.div.attrs({title:'ldantas'})`
    width: 300px;
    position: relative;
    padding: 0;
    margin: 0;

    &:hover  ${Title} {
        background: rgba(0,0,0,.6);
        opacity: 1;
        transition: opacity 100ms linear, background 100ms linear;

    }
    &:hover {
        transform: scale(1.1);
        z-index: 3;
        transition: transform 100ms cubic-bezier(.68,-0.55,.27,1.55);
    }
`;
VideoCard.Img = styled.img`
    width: 100%;
    height: 180px;
    /* margin: 16px; */
    object-fit: cover;
`;