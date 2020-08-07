import styled from 'styled-components';
// Images
import bgCategories from '../../assets/img/background-categories.jpg';

export const MainCategories = styled.main`
    color: white;
`;

MainCategories.Header = styled.header`
    height: 30vh;
    padding: 70px 5% 0;
    position: relative;
    background: url(${bgCategories});
    background-size: cover;
    background-position: center;
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

        background: linear-gradient(rgba(0,0,0,.6), rgb(0,0,0));
    }
`;

MainCategories.Main = styled.main`
    padding: 70px 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;