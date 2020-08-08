import styled from 'styled-components';

import ButtonCA from '../../../components/ButtonCA';

export const CategoryPageMain = styled.main`
    height: 100vh;
    padding: 80px 5% 50px;
    color: white;
    display: flex;
`;
CategoryPageMain.Content = styled.section`
    width: 40%;
    padding: 10px;
    margin: 20px auto;
    border: 2px solid var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > form {
        width: 100%;
    }
    & ${ButtonCA} {
        background: transparent;
        margin: auto;
        padding: 10px 36px;
    }
    & ${ButtonCA}:hover {
        border-color: transparent;
        background: var(--primary);
        color: var(--white);
    }
    & > h1 {
        margin-top: -27px;
        background: var(--black);
        padding: 0 10px;
        margin-bottom: 40px;
    }
    & textarea {
        resize: none;
        height: 100px;
    }
    & input[type='color'] {
        padding: 5px 10px;
        height: 30px;
        cursor: pointer;
    }
    
`;
