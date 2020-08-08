import styled from 'styled-components';
// Components styles
import { MainCategories } from '../Categories/style';


export const CategoryHeader = styled(MainCategories.Header)``;

export const CategoryMain = styled.main`
    height: 100vh;
    padding: 2% 5%;
    display: flex;
    flex-wrap: wrap;

    & > div {
        flex-grow: 1;
    }
`;