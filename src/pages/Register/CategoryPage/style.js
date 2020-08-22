import styled from 'styled-components';
// Components
import ButtonCA from '../../../components/ButtonCA';
import FormFieldCA from '../../../components/FormFieldCA';


export const CategoryPageMain = styled.main`
    height: 100vh;
    padding: 80px 5% 50px;
    color: white;
    display: flex;
`;
CategoryPageMain.Content = styled.section`
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        font-size: 2rem;
        margin-top: -27px;
        margin-bottom: 40px;
    }
`;
export const CategoryForm = styled.form`
    width: 755px;
    padding: 35px;
    background-color: var(--white);
    border-radius: 10px;
    color: #5b5b5b;

    input, textarea {
        border-color: #5b5b5b;
        color: #414141;
    }
    & textarea {
        resize: vertical;
        min-height: 100px;
    }
    & input[type='color'] {
        padding: 3px 2px;
        height: 42px;
        cursor: pointer;
    }

    & ${ButtonCA} {
        background: var(--primary);
        margin: auto;
        padding: 10px 36px;
    }
    & ${ButtonCA}:hover {
        border-color: transparent;
        background: var(--primary);
        color: var(--white);
    }
`;
CategoryForm.Section = styled.div`
    display: flex;

    & > div:last-child {
        flex-shrink: 5;
    }
`;