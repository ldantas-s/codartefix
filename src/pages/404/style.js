import styled from 'styled-components';


export const Main404 = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

Main404.ErrorContent = styled.div`
    width: 50%;
    height: 300px;
    margin: 10px 0;
    position: relative;
    border: 2px solid var(--white);
    border-radius: 3px;
    color: var(--white);

    font-size: 70px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        display: flex;
        align-items: center;
        height: 0;
    }
    & p {
        height: 0;
        font-size: 30px;
        line-height: 0;
    }

    & svg {
        stroke-width: 1;
    }
    &::before {
        content: 'Error';
        display: block;
        position: absolute;
        font-size: 16px;
        padding: 10px;
        background: black;
        top: -22px;
        left: 20px;
        font-weight: 500;
    }
`;