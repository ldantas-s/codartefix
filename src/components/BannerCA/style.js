import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 10;
    
    @media(max-width: 800px) {
        padding: 70px 0 0 0;
        flex-direction: column-reverse;
        
    & > div:first-child {
            height: auto;
        }
    }
`;

ContentAreaContainer.Item = styled.div`
    width: 50%;
    height: 70%;
    padding: 5%;

    @media(max-width: 800px) {
        width: 100%;
        height: 80vh;
    }
`;
ContentAreaContainer.Title = styled.h2`
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 32px;
`;
ContentAreaContainer.Description = styled.p`
    line-height: 1.5;
`;


export const BannerCAMain = styled.section`
    width: 100%;
    height: 95vh;
    position: relative;

    color: var(--white);
    background-color: var(--black);
    background-image: ${ ({backgroundImg}) => `url(${backgroundImg})`};
    background-size: cover;
    background-position: center top;

    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.8);
    }
    
    @media(max-width: 800px) {
        height: auto;
    }
`;



