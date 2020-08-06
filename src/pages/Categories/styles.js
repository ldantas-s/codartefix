import styled from 'styled-components';

export const MainCategories = styled.main`
    color: white;
`;

MainCategories.Header = styled.header`
    height: 30vh;
    padding: 70px 5% 0;
    position: relative;
    /* background: rgba(231,0,0,.2); */
    display: flex;
    align-items: flex-end; 

    & h1 {
        width: 100%;
        font-weight: 300;
        font-size: 35px;
        z-index: 1;
    }
    @media(max-width: 800px) {
        & h1 {
            text-align: center;
        }
    }

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: rgba(247, 118, 42,.2);
    }
`;

MainCategories.Main = styled.main`
    padding: 70px 5%;

`;