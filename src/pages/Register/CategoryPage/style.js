import styled from 'styled-components';
// Components
import ButtonCA from '../../../components/ButtonCA';


export const CategoryPageMain = styled.main`
    height: 100vh;
    padding: 80px 5% 50px;
    color: white;
    display: flex;
`;
CategoryPageMain.Content = styled.section`
    width: 100%;
    /* padding: 10px; */
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
`;
CategoryForm.SectionInput = styled.div`
    display: flex;

    & > div:last-child {
        flex-shrink: 5;
    }
    & input[type='color'] {
        padding: 3px 2px;
        height: 42px;
        cursor: pointer;
    }
`;
CategoryForm.SectionButton = styled.div`
    display: flex;
    justify-content: flex-end;
    /* padding: 0 10px; */
    & ${ButtonCA} {
        background: var(--primary);
        padding: 10px 36px;
        border-radius: 3px;
    }
    & > ${ButtonCA}:hover {
        background: var(--primary);
        color: var(--white);
        transform: scale(1.03);
        transition: transform 100ms linear;
    }
`;

export const CategoryTable = styled.table`
    width: 100%;
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #414141;
    th, td {
        background-color: rgba(41,255,41,.2);
        padding: 12px 16px;
    }
`;